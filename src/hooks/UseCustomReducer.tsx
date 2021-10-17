import { useReducer } from "react";
import { State, Action } from "../types/types";
import { parseUserInputs } from "../utilities/utilities";

const initialState: State = {
  userInputs: [],
  cartItems: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "input":
      return {
        ...state,
        userInputs: parseUserInputs(action.userInputValue!),
      };
    case "add":
      const { userInputs, cartItems } = state;
      const { userInputId } = action;
      const currentUserInput = userInputs.find(
        (userInput) => userInput.id === userInputId
      )!;
      const foundItem = cartItems.find((item) => item.id === userInputId);

      const newItem = foundItem
        ? {
            ...foundItem,
            quantity: foundItem.quantity + 1,
          }
        : {
            ...currentUserInput,
            quantity: 1,
          };
      const index = cartItems.findIndex(
        (userInput) => userInput.id === userInputId
      );

      let replenishedCartItems = [];
      if (index >= 0) {
        const cartItemsBeforeIndex = cartItems.slice(0, index);
        const cartItemsAfterIndex = cartItems.slice(index + 1);
        replenishedCartItems = [
          ...cartItemsBeforeIndex,
          newItem,
          ...cartItemsAfterIndex,
        ];
      } else {
        replenishedCartItems = [...cartItems, newItem];
      }

      return {
        ...state,
        cartItems: replenishedCartItems,
      };
    case "remove":
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.cartItemId
      );
      return {
        ...state,
        cartItems: filteredCartItems,
      };
    default:
      throw new Error();
  }
};

const useCustomReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userInputs, cartItems } = state;
  return { userInputs, cartItems, dispatch };
};

export default useCustomReducer;

export type UserInput = {
  id: string;
  name: string;
  price: number;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type State = {
  userInputs: Array<UserInput>;
  cartItems: Array<CartItem>;
};

export type Action = {
  type: "input" | "add" | "remove";
  userInputValue?: string;
  userInputId?: string;
  cartItemId?: string;
};

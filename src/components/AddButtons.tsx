import React, { MouseEvent } from "react";
import { UserInput } from "../types/types";

type OwnProps = {
  items: Array<UserInput>;
  dispatch: Function;
};

const AddButtons: React.FC<OwnProps> = ({ items, dispatch }) => {
  const addToCart = (e: MouseEvent) => {
    const { id } = e.currentTarget;
    dispatch({ type: "add", userInputId: id });
  };

  return (
    <>
      {items && (
        <ul className="items-list">
          {items.map((item) => (
            <li key={`ui-${item.id}`}>
              <span>
                {item.name} {item.price}{" "}
              </span>
              <button id={item.id} onClick={addToCart} className="add-button">
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      )}
      {!items.length && (
        <p className="invalid-format">
          The input is empty or the input format is invalid
        </p>
      )}
    </>
  );
};

export default AddButtons;

import React, { MouseEvent, useMemo } from "react";
import { CartItem } from "../types/types";

type OwnProps = {
  items: Array<CartItem>;
  dispatch: Function;
};

const Cart: React.FC<OwnProps> = ({ items, dispatch }) => {
  const removeFromCart = (e: MouseEvent) => {
    const { id } = e.currentTarget;
    dispatch({ type: "remove", cartItemId: id });
  };

  const getTotalPrice = useMemo(
    () => () =>
      items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items]
  );

  return (
    <>
      <h2 className="title">Cart Items:</h2>
      {items.length > 0 && (
        <>
          <ul className="items-list">
            {items.map((item) => (
              <li key={`ci-${item.id}`}>
                <span>
                  name = <b>{item.name}</b>;{" "}
                </span>
                <span>
                  unit price = <b>{item.price}</b>;{" "}
                </span>
                <span>
                  quantity = <b>{item.quantity}</b>;{" "}
                </span>
                <span>
                  total price = <b>{item.quantity * item.price}</b>{" "}
                </span>
                <button
                  id={item.id}
                  onClick={removeFromCart}
                  className="remove-button"
                >
                  Remove item
                </button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <span>CART TOTAL PRICE: </span>
            <b>{getTotalPrice()}</b>
          </div>
        </>
      )}
      {items.length === 0 && (
        <p className="no-items-section">There are no items yet</p>
      )}
    </>
  );
};

export default Cart;

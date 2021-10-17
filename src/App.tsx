import React, { useMemo } from "react";
import "./App.css";
import useCustomReducer from "./hooks/UseCustomReducer";
import Cart from "./components/Cart";
import UserInputs from "./components/UserInputs";
import AddButtons from "./components/AddButtons";

const App: React.FC = () => {
  const { userInputs, cartItems, dispatch } = useCustomReducer();

  const renderCart = useMemo(
    () => <Cart items={cartItems} dispatch={dispatch} />,
    [cartItems, dispatch]
  );

  const renderUserInputs = useMemo(
    () => <UserInputs dispatch={dispatch} />,
    [dispatch]
  );

  const renderAddButtons = useMemo(
    () => <AddButtons items={userInputs} dispatch={dispatch} />,
    [userInputs, dispatch]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{renderCart}</div>
        <div className="col-6">
          {renderUserInputs}
          {renderAddButtons}
        </div>
      </div>
    </div>
  );
};

export default App;

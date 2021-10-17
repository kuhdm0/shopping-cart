import React, { ChangeEvent } from "react";

type OwnProps = {
  dispatch: Function;
};

const UserInputs: React.FC<OwnProps> = ({ dispatch }) => {
  const handleUserInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    dispatch({ type: "input", userInputValue: value });
  };

  return (
    <>
      <h2 className="title">User Inputs:</h2>
      <textarea
        rows={6}
        cols={55}
        placeholder="e.g. apple, 4, banana, 6.2, strawberry, 2"
        onChange={handleUserInput}
      ></textarea>
    </>
  );
};

export default UserInputs;

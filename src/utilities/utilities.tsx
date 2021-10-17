import { UserInput } from "../types/types";

export const parseUserInputs = (userStr: string) => {
  const rawInputs = userStr.split(",");
  const userInputs: Array<UserInput> = [];
  let isValid = false;
  rawInputs.forEach((el: string, index: number) => {
    if (!el) {
      isValid = false;
      return;
    }
    const newIndex = Math.floor(index / 2);
    if (index % 2 === 0) {
      userInputs.push({
        id: newIndex.toString(),
        name: el,
        price: 0,
      });
      isValid = false;
    } else {
      const price = parseFloat(el);
      if (isNaN(price) || price <= 0) {
        isValid = false;
        return;
      }
      isValid = true;
      userInputs[newIndex].price = price;
    }
  });
  return isValid ? userInputs : [];
};

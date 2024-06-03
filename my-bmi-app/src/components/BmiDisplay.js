import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const BmiDisplay = () => {
  const { user } = useContext(UserContext);

  const calculateBMI = (height, weight) => {
    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (
      !isNaN(parsedHeight) &&
      parsedHeight > 0 &&
      !isNaN(parsedWeight) &&
      parsedWeight > 0
    ) {
      const bmi = (parsedWeight / (parsedHeight * parsedHeight)).toFixed(2);
      console.log(
        `Height: ${parsedHeight}, Weight: ${parsedWeight}, BMI: ${bmi}`
      );
      return bmi;
    } else {
      console.log("Invalid input for height or weight");
      return "0.00";
    }
  };

  return (
    <div>
      {user.height && user.weight ? (
        <div>BMI: {calculateBMI(user.height, user.weight)}</div>
      ) : (
        <div>Please enter height and weight</div>
      )}
    </div>
  );
};

export default BmiDisplay;

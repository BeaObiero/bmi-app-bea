import React, { useState } from "react";

function BmiCalculator() {
  const [height, setHeight] = useState(""); // Stores the user's input for height
  const [weight, setWeight] = useState(""); // Stores the user's input for weight
  const [bmi, setBmi] = useState(""); // Stores the calculated BMI
  const [error, setError] = useState(""); // Stores any error message

  const calculateBMI = (height, weight) => {
    if (height <= 0 || weight <= 0) {
      return "Invalid input";
    }
    return (weight / (height * height)).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (isNaN(heightNum) || isNaN(weightNum)) {
      setError("Please enter valid numbers for height and weight");
      setBmi("");
      return;
    }

    const calculatedBmi = calculateBMI(heightNum, weightNum);
    if (calculatedBmi === "Invalid input") {
      setError("Height and weight must be greater than zero");
      setBmi("");
    } else {
      setBmi(calculatedBmi); // Updates the bmi state with the calculated bmi
    }
  };

  return (
    <div>
      <h2>Calculate Your BMI</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Height (in meters):
            <input
              type="number" // This input field specifies that it only accepts numeric values
              step="0.01"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              aria-label="Height in meters"
            />
          </label>
        </div>
        <div>
          <label>
            Weight (in kilograms):
            <input
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} // Updates the 'weight' state variable when the user enters this input
              required
              aria-label="Weight in kilograms"
            />
          </label>
        </div>
        <button type="submit">Calculate BMI</button>{" "}
        {/* Once you hit this button, the calculated BMI is displayed */}
      </form>
      {error && (
        <div style={{ color: "red" }}>
          <h3>{error}</h3>
        </div>
      )}
      {bmi && !error && (
        <div>
          <h3>Your BMI: {bmi}</h3>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;

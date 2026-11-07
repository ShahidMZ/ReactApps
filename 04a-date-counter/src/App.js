import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en", options),
  );

  function decreaseCount() {
    setCount((x) => x - step);
    setDate((x) => {
      var date = new Date(x.valueOf());
      date.setDate(date.getDate() - step);
      return date.toLocaleDateString("en", options);
    });
  }

  function increaseCount() {
    setCount((x) => x + step);
    setDate((x) => {
      var date = new Date(x.valueOf());
      date.setDate(date.getDate() + step);
      return date.toLocaleDateString("en", options);
    });
  }

  return (
    <>
      <div className="counter">
        <button
          onClick={() => {
            if (step > 0) {
              setStep((x) => x - 1);
            }
          }}
        >
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((x) => x + 1)}>+</button>
      </div>
      <div className="counter">
        <button onClick={decreaseCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>+</button>
      </div>
      <div className="text">
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
                ? `${count} day(s) from today is `
                : `${Math.abs(count)} day(s) ago was `}
          </span>
          <span>{date}</span>
        </p>
      </div>
    </>
  );
}

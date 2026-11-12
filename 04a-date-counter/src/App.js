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
  const newDate = new Date();
  newDate.setDate(new Date().getDate() + count);

  return (
    <>
      <div className="center slider">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(x) => setStep(+x.target.value)}
        />
        <span>{step}</span>
      </div>

      <div className="center">
        <button onClick={(x) => setCount((x) => x - step)}>-</button>
        <input value={count} onChange={(x) => setCount(+x.target.value)} />
        <button onClick={(x) => setCount((x) => x + step)}>+</button>
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
          <span>{newDate.toLocaleDateString("en", options)}</span>
        </p>
      </div>

      {(step !== 1 || count !== 0) && (
        <div className="center">
          <button
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
}

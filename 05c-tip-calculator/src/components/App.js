import { useState } from "react";
import "./App.css";
import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} setBill={setBill}></BillInput>

      <SelectPercentage tip={tip1} setTip={setTip1}>
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={((tip1 + tip2) * bill) / 200}></Output>
          <Reset onReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}

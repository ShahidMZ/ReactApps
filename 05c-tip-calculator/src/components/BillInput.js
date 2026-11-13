export default function BillInput({ bill, setBill }) {
  return (
    <div className="component">
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(x) => setBill(+x.target.value)}
      ></input>
    </div>
  );
}

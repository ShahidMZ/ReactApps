export default function SelectPercentage({ children, tip, setTip }) {
  return (
    <div className="component">
      <span>{children}</span>
      <select value={tip} onChange={(e) => setTip(+e.target.value)}>
        <option value={0} key={0}>
          Dissatisfied (0%)
        </option>
        <option value={5} key={5}>
          It was okay (5%)
        </option>
        <option value={10} key={10}>
          It was good (10%)
        </option>
        <option value={20} key={20}>
          Absolutely amazing! (20%)
        </option>
      </select>
    </div>
  );
}

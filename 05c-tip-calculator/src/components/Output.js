export default function Output({ bill, tip }) {
  return (
    <div>
      <h1>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h1>
    </div>
  );
}

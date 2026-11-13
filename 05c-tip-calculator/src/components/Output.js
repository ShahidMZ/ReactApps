export default function Output({ bill, tip }) {
  return (
    <div>
      {bill !== 0 && (
        <h1>
          You pay ${bill + tip} (${bill} + ${tip} tip)
        </h1>
      )}
    </div>
  );
}

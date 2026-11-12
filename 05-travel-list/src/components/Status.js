export default function Status({ items }) {
  const itemCount = items.length;
  const packedItems = items.filter((x) => x.packed).length;
  const packedPercentage = Math.round((packedItems * 100) / itemCount);

  return (
    <footer className="stats">
      <em>
        {itemCount === 0
          ? "You don't have any items in your list. Add some items to get started!"
          : packedPercentage === 100
            ? "You've packed everything! You are ready to go!"
            : `You have ${itemCount} items on your list and you've already packed 
          ${packedItems} (${packedPercentage}%).`}
      </em>
    </footer>
  );
}

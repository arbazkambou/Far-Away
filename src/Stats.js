export default function Stats({ totalItem, items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const packedItems = items.filter((item) => item.packed === true).length;
  const totalItems = items.length;
  const percentageOfPackedItems = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {percentageOfPackedItems === 100 ? (
        <em>You got everything! ready to go ✈️</em>
      ) : (
        <em>
          You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} (
          {isNaN(percentageOfPackedItems) ? 0 : percentageOfPackedItems}%)
        </em>
      )}
    </footer>
  );
}

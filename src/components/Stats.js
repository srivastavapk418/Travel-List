export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent = Number(((packedItems * 100) / numItems).toFixed(1));
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "Whooo! You got everything. Ready to go ✈️"
          : `You have ${numItems} items on your list, and you packed ${packedItems} (${percent}%)`}
      </em>
    </footer>
  );
}

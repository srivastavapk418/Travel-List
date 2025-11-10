export default function Item({ itemObj, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemObj.packed} //value(optional) attribute here but checked is required
        onChange={() => onToggleItem(itemObj.id)}
        // onClick={() => onToggleItem(itemObj.id)}
      />
      {/* onClick can also works instead on onChange */}

      <span
        style={itemObj.packed ? { textDecorationLine: "line-through" } : {}}
      >
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}

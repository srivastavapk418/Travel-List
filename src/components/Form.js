import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault(); //prevent screen reload
    if (!description) return; //if description column is empty
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ? 🤔</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((ele) => (
          <option value={ele} key={ele}>
            {ele}
          </option>
        ))}
      </select>
      <input
        placeholder="Item..."
        type="text"
        value={description}
        onChange={(e) => {
          // console.log(e.target);
          setDescription(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}

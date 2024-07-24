import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handeAddItems(data) {
    setItems((items) => [...items, data]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleItemToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handeAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onItemToggle={handleItemToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

import { useState } from "react";

export default function StuffForm({addStuff}) {

  const [stuffName, setStuffName] = useState("");
  const [price, setPrice] = useState("");

  function onStuffName(event) {
    setStuffName(event.target.value);
  }

  function onPrice(event) {
    setPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!stuffName || !price) {
      alert("Please enter stuff name and price.");
      return;
    }
    addStuff({ name: stuffName, price: parseFloat(price) });

    // clear input fueks
    setStuffName("");
    setPrice("");
  }


  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={onStuffName} />

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={onPrice} />

      <button type="submit">Add Stuff</button>
    </form>
  );
}

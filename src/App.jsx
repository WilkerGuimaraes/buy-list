import { useState } from "react";

import { AddButton, AddInput, Container } from "./App.style";

function App() {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Milk",
    },
    {
      id: "2",
      name: "noodle",
    },
  ]);

  return (
    <Container>
      <h1>Buy List</h1>
      <AddInput type="text" placeholder="product..." />
      <AddButton>Add</AddButton>

      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </Container>
  );
}

export default App;

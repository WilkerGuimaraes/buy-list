import { useRef, useState } from "react";

import { AddButton, AddInput, Container } from "./App.style";

function App() {
  const inputRef = useRef();
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

  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        id: crypto.randomUUID(),
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  };

  return (
    <Container>
      <h1>Buy List</h1>
      <AddInput type="text" placeholder="product..." ref={inputRef} />
      <AddButton onClick={handleAddProduct}>Add</AddButton>

      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </Container>
  );
}

export default App;

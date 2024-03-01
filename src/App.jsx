import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AddButton, AddInput, Container, ListContent } from "./App.style";

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
        id: uuidv4(),
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
        <ListContent key={product.id}>
          <p>{product.name}</p>
        </ListContent>
      ))}
    </Container>
  );
}

export default App;

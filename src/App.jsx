import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoTrashOutline } from "react-icons/io5";

import {
  AddButton,
  AddInput,
  Container,
  ListContent,
  TrashButton,
} from "./App.style";

function App() {
  const inputRef = useRef();
  const [products, setProducts] = useState([]);

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

  const handleDeleteProduct = (productId) => {
    const removedProduct = products.filter(
      (product) => productId !== product.id
    );

    setProducts(removedProduct);
  };

  const handleKeyboardEvent = (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      handleAddProduct();
    }
  };

  return (
    <Container>
      <h1>Buy List</h1>
      <AddInput
        type="text"
        placeholder="product..."
        ref={inputRef}
        onKeyDown={handleKeyboardEvent}
      />
      <AddButton onClick={handleAddProduct}>Add</AddButton>

      {products.map((product) => (
        <ListContent key={product.id}>
          <p>{product.name}</p>
          <TrashButton onClick={() => handleDeleteProduct(product.id)}>
            <IoTrashOutline className="icon" />
          </TrashButton>
        </ListContent>
      ))}
    </Container>
  );
}

export default App;

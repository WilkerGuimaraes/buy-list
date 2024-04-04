import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import axios from "axios";

import {
  AddButton,
  AddInput,
  Container,
  ListContent,
  TrashButton,
} from "./App.style";

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  const onChange = (e) => {
    setProductName(e.target.value);
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3335/productsList");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:3335/productsList", {
        productName,
      });

      await fetchProducts();

      setProductName("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3335/productsList/${productId}`);

      await fetchProducts();
    } catch (_error) {
      console.log("Algo deu errado!");
    }
  };

  const handleKeyboardEvent = (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      handleAddProduct();
    }
  };

  return (
    <Container>
      <h1>Lista de compras</h1>
      <AddInput
        type="text"
        placeholder="produto..."
        value={productName}
        onChange={onChange}
        onKeyDown={handleKeyboardEvent}
      />
      <AddButton onClick={handleAddProduct}>Adicionar</AddButton>

      {products.map((product) => (
        <ListContent key={product._id}>
          <p>{product.productName}</p>
          <TrashButton onClick={() => handleDeleteProduct(product._id)}>
            <IoTrashOutline className="icon" />
          </TrashButton>
        </ListContent>
      ))}
    </Container>
  );
}

export default App;

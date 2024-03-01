import { AddButton, AddInput, Container } from "./App.style";

function App() {
  return (
    <Container>
      <h1>Buy List</h1>
      <AddInput type="text" placeholder="product..." />
      <AddButton>Add</AddButton>
    </Container>
  );
}

export default App;

import Container from "./components/home/Container";
import Home from "./components/home/Home";
import TodoList from "./components/Todo_List/TodoList";

const App = () => {
  return (
    <center>
      <Container>
        <Home />
        <TodoList />
      </Container>
    </center>
  );
};

export default App;

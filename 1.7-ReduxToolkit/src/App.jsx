import "./App.css";
// import AddTodo from "./components/AddTodo";
import Todos from "./components/todos";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <TodoForm />
      {/* <AddTodo /> */}
      <Todos />
    </>
  );
}

export default App;

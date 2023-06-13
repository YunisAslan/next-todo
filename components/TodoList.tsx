import { getTodos } from "@/lib/getTodos";
import Todo from "./Todo";

async function TodoList() {
  const todos = await getTodos();
  const sortedTodos = todos.reverse();

  return (
    <>
      {sortedTodos.map((todo) => {
        return <Todo {...todo}/>;
      })}
    </>
  );
}

export default TodoList;

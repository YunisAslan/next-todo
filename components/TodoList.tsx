import { getTodos } from "@/lib/getTodos";
import Todo from "./Todo";

async function TodoList() {

  const todos = await getTodos();
  

  return (
    <>
      {todos.map((todo) => {
        return <Todo {...todo}/>
      })}
    </>
  );
}

export default TodoList;

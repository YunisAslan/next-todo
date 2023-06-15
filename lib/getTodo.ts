import { notFound } from "next/navigation";

export async function getTodo(todoId: string) {
  const res = await fetch(`http://127.0.0.1:3500/todos/${todoId}`, {
    cache: "no-store",
  });

  const todo: Todo = await res.json();

  if(!todo.id) notFound()

  return todo
}


export async function getTodos() {
  const res = await fetch("http://127.0.0.1:3500/todos", { cache: "no-store" });
  const todos: Todo[] = await res.json();

  return todos;
}

export async function getTodo(todoId: string) {
  const res = await fetch(`http://127.0.0.1:3500/todos/${todoId}`);

  if (!res.ok) return undefined;

  const data: Todo = await res.json();

  return data;
}

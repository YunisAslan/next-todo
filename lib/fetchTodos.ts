export async function fetchTodos() {
  const res = await fetch(`http://127.0.0.1:3500/todos`);
  const data: Todo[] = await res.json();

  return data;
}

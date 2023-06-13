export async function getTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    cache: "no-cache",
  });

  if (!res.ok) throw Error("Todos fetch is failed");

  const todos: Todo[] = await res.json();

  return todos;
}

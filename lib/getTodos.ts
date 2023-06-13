export async function getTodos() {

  const res = await fetch("http://127.0.0.1:3500/todos");

  if(!res.ok) undefined

  const data: Todo[] = await res.json();

  return data;
}

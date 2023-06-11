"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Todo(todo: Todo) {
  const router = useRouter();

  const handleChange = async () => {
    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
    });

    await res.json();

    router.refresh();
  };

  const handleDelete = async () => {
    const { id } = todo;

    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    await res.json();

    router.refresh();
  };

  return (
    <>
      <article className="flex gap-2 justify-center py-2">
        <div className="flex justify-between w-1/2 items-center border border-blue-500">
          <label htmlFor="" className="text-xl">
            <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
          </label>

          <div className="flex items-center">
            <input
              className="min-w-[2rem] min-h-[2rem]"
              type="checkbox"
              checked={todo.completed}
              onChange={handleChange}
            />

            <button
              className="text-white bg-red-700 uppercase text-sm px-2 py-1 rounded-md"
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Todo;

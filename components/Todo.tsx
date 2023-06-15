"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Todo(todo: Todo) {
  const router = useRouter();

  const handleChange = async () => {
    try {
      await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...todo,
          completed: !todo.completed,
        }),
      });
    } catch (err) {
      console.error(err);
    }

    router.refresh();
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: todo.id,
        }),
      });
    } catch (err) {
      console.error(err);
    }

    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <article className="w-80 flex items-center justify-between my-2">
        <label className="mr-2 text-lg hover:underline" htmlFor="">
          <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
        </label>

        <div className="flex items-center gap-3">
          <input
            className="w-6 h-6"
            type="checkbox"
            checked={todo.completed}
            onChange={handleChange}
          />
          <button
            className="bg-red-600 text-white px-2 py-1 lowercase"
            onClick={handleDelete}
          >
            Del
          </button>
        </div>
      </article>
    </div>
  );
}

export default Todo;

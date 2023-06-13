"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

function Todo(todo: Todo) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = async () => {
    const { id } = todo;

    await fetch(`http://127.0.0.1:3500/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
    });

    router.refresh();
  };

  const handleDelete = async () => {
    const { id } = todo;

    await fetch(`http://127.0.0.1:3500/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <article className="flex justify-center my-2">
      <div className="flex items-center justify-between w-1/2">
        <label
          className="text-xl hover:underline"
          htmlFor=""
          style={{ color: isPending ? "red" : "green" }}
        >
          <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
        </label>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-6 h-6"
            checked={todo.completed}
            onChange={handleChange}
          />
          <button
            onClick={handleDelete}
            className="uppercase bg-black px-2 py-1 text-white rounded"
          >
            DEL
          </button>
        </div>
      </div>
    </article>
  );
}

export default Todo;

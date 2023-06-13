"use client";

import { useRouter } from "next/navigation";

function Todo(todo: Todo) {
  const router = useRouter();

  const handleDelete = async () => {
    const { id } = todo;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: todo.id }),
    });

    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <article className="flex justify-between items-center my-2 w-80">
        <label htmlFor="">{todo.title}</label>

        <div className="flex items-center gap-2">
          <input className="w-6 h-6" type="checkbox" />

          <button
            className="bg-red-600 text-white uppercase text-sm rounded px-2 py-1"
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

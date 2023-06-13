"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const initState: Partial<Todo> = {
  userId: 1,
  title: "",
};

function AddTodo() {
  const router = useRouter();
  const [todoData, setTodoData] = useState(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setTodoData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { userId, title } = todoData;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        title,
      }),
    });

    setTodoData((prevValue) => ({
      ...prevValue,
      title: "",
    }));

    router.refresh();
  };

  return (
    <form
      action=""
      className="flex justify-center items-center gap-4 py-4"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 border rounded outline-none focus:border-blue-500 border-gray-400"
        type="text"
        name="title"
        value={todoData.title}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white uppercase text-sm rounded px-2 py-1"
      >
        add
      </button>
    </form>
  );
}

export default AddTodo;

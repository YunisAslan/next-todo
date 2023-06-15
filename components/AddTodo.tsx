"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const initStates: Partial<Todo> = {
  userId: 1,
  title: "",
};

function AddTodo() {
  
  const router = useRouter()
  const [todoValues, setTodoValues] = useState(initStates);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setTodoValues((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { userId, title } = todoValues;

    try {
      await fetch("http://127.0.0.1:3500/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, title }),
      });
    } catch (err) {
      console.error(err);
    }

    setTodoValues((prev) => ({
      ...prev,
      title: "",
    }));

    router.refresh()
  };

  return (
    <form
      className="flex items-center justify-center gap-3 py-10"
      action=""
      onSubmit={handleSubmit}
    >
      <input
        className="rounded border border-gray-400 focus:border-blue-500 px-2 py-1 outline-none"
        type="text"
        name="title"
        value={todoValues.title}
        onChange={handleChange}
      />

      <button className="text-white bg-blue-600 px-2 py-1 rounded">add</button>
    </form>
  );
}

export default AddTodo;

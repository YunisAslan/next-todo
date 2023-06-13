"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const initState: Partial<Todo> = {
  userId: 1,
  title: "",
};

function AddTodo() {
  
  const router = useRouter()
  const [data, setData] = useState(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { userId, title } = data;

    const res = await fetch("http://127.0.0.1:3500/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, title }),
    });

    await res.json();

    setData((prev) => ({
      ...prev,
      title: "",
    }));

    router.refresh()
  };

  return (
    <form className="flex justify-center items-center gap-3" action="" onSubmit={handleSubmit}>
      <input
        className="p-2 rounded outline-none focus:border-green-500 border border-gray-400"
        type="text"
        name="title"
        value={data.title}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="uppercase bg-green-500 px-2 py-1 text-white rounded"
      >
        add
      </button>
    </form>
  );
}

export default AddTodo;

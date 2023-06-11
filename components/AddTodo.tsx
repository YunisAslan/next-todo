"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

function AddTodo() {
  const initState: Partial<Todo> = {
    userId: 1,
    title: "",
  };

  const [data, setData] = useState(initState);
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { userId, title } = data;

    const res = await fetch("http://127.0.0.1:3500/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        title,
      }),
    });

    await res.json();

    setData((prevValue) => ({
      ...prevValue,
      title: "",
    }));

    router.refresh()
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setData((prevValue) => ({
      ...prevValue,
      [name]: e.target.value,
    }));
  };

  return (
    <form
      action=""
      className="flex gap-2 justify-center"
      onSubmit={handleSubmit}
    >
      <input
        className="p-1 border-gray-400 rounded-md focus:border-blue-500 border outline-none"
        type="text"
        name="title"
        value={data.title}
        onChange={handleChange}
      />

      <button className="text-white bg-blue-500 uppercase text-sm px-2 py-1 rounded-md">
        Add
      </button>
    </form>
  );
}

export default AddTodo;

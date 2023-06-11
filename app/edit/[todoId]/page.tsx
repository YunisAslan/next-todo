import Todo from "@/components/Todo";
import { fetchTodo } from "@/lib/fetchTodo";
import { notFound } from "next/navigation";

export const revalidate = 0;

type Props = {
  params: {
    todoId: string;
  };
};

export default async function OneTodo({ params: { todoId } }: Props) {
  const todo = await fetchTodo(todoId);

  if (!todo) notFound();
  console.log("todo", todo);
  

  return <Todo {...todo} />;
}

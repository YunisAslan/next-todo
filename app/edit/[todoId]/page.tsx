import Todo from "@/components/Todo";
import { getTodo } from "@/lib/getTodo";
import { notFound } from "next/navigation";

export const revalidate = 0;

type Props = {
  params: {
    todoId: string;
  };
};

async function TodoDetail({ params: { todoId } }: Props) {
  const todo = await getTodo(todoId);

  if (!todo?.id) notFound();

  return (
    <>
      <Todo {...todo} />
    </>
  );
}

export default TodoDetail;

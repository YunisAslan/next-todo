import Todo from "@/components/Todo";
import { getTodo } from "@/lib/getTodo";

type Props = {
  params: {
    todoId: string;
  };
};

async function TodoDetail({ params: { todoId } }: Props) {
    
  const todo = await getTodo(todoId);

  return <Todo {...todo} />;
}

export default TodoDetail;

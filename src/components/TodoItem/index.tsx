import { useContext, useState } from "react";
import Icon from "../Icon";
import { StyledTodoItem, TodoItemInput } from "./styles";
import type { Todo } from "../../models/todo";
import { ThemeContext } from "../../context/ThemeContext";

interface TodoItemProps {
  todo: Todo;
  handleTodo: (id: number) => void;
  handleTitleChange: (id: Todo["id"], title: string) => void;
}

export const TodoItem = ({
  todo,
  handleTodo,
  handleTitleChange,
}: TodoItemProps) => {
  const [isToggled, setIsToggled] = useState(false);
  const theme = useContext(ThemeContext)

  return (
    <StyledTodoItem theme={theme}>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsToggled((prev) => !prev);
          handleTodo(todo?.id);
        }}
      >
        <Icon
          name={
            isToggled || todo?.status === "completed" ? "filledOval" : "oval"
          }
        />
      </button>

      <TodoItemInput
        type="text"
        isToggled={isToggled || todo?.status === "completed"}
        value={todo?.title}
        onChange={(event) => handleTitleChange(todo?.id, event.target.value)}
        placeholder="Create a new todo"
      />
    </StyledTodoItem>
  );
};

import { useState } from "react";
import Icon from "../Icon";
import { StyledAddTodoItem, AddTodoItemInput } from "./styles";
import type { Todo } from "../../models/todo";

interface AddTodoItemProps {
  handleAddTodo: (title: string, status: Todo["status"]) => void;
}

export const AddTodoItem = ({ handleAddTodo }: AddTodoItemProps) => {
  const [title, setTitle] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    handleAddTodo(trimmedTitle, isToggled ? "completed" : "active");
    setTitle("");
  };

  return (
    <StyledAddTodoItem onSubmit={handleSubmit}>
      <button
        onClick={(event) => {
          event?.stopPropagation();
          setIsToggled((prev) => !prev);
        }}
        type="submit"
        aria-label="Add todo"
      >
        <Icon name={isToggled ? "filledOval" : "oval"} />
      </button>

      <AddTodoItemInput
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Create a new todo"
      />
    </StyledAddTodoItem>
  );
};

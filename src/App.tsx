import {
  AppContent,
  AppHeader,
  AppImage,
  AppImageContainer,
  AppShell,
  TodoItemList,
  TodoItemListContainer,
} from "./styles";
import bitmap from "./assets/images/bitmap.jpg";
import { useState } from "react";
import type { Todo } from "./models/todo";
import { TodoItem } from "./components/TodoItem";
import { Global } from "@emotion/react";
import { normalize } from "./styles/base/reset";
import { AddTodoItem } from "./components/AddTodoItem";
import Icon from "./components/Icon";
import { ThemeContext } from "./context/ThemeContext";
import type { ThemeType } from "./types/component";

const initialTodos: Todo[] = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    status: "completed",
  },
  {
    id: 2,
    title: "Complete online JavaScript course",
    status: "completed",
  },
  {
    id: 3,
    title: "Complete online JavaScript course",
    status: "completed",
  },
  {
    id: 4,
    title: "Complete online JavaScript course",
    status: "completed",
  },
  {
    id: 5,
    title: "Complete online JavaScript course",
    status: "completed",
  },
];
function App() {
  const [todos, setTodos] = useState<Todo[] | []>(initialTodos);
  const [theme, setTheme] = useState<ThemeType>("light")

  const handleTitleChange = (id: Todo["id"], title: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };

  const handleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: "active" } : todo,
      ),
    );
  };

  const handleAddTodo = (title: string, status: Todo["status"]) => {
    setTodos((prevTodos: Todo[]) => [
      ...prevTodos,
      {
        id: Date.now(),
        title,
        status,
      },
    ]);
  };

  const handleTheme = () => {
    setTheme((prevState) => {
      if(prevState === "light") return "dark"
      return "light"
    })
  }

  return (
    <ThemeContext value={theme}>
      <Global styles={normalize} />
      <AppShell theme={theme}>
        <AppImageContainer>
          <AppImage src={bitmap} />
        </AppImageContainer>
        <AppContent>
          <AppHeader>
            <Icon name="logo" />
            <button onClick={handleTheme}>
              <Icon name={theme === "light" ? "moon" : "sun"} />
            </button>
          </AppHeader>
          <TodoItemListContainer>
            <AddTodoItem handleAddTodo={handleAddTodo} />
            <TodoItemList>
              {todos?.map((todo) => {
                return (
                  <TodoItem
                    handleTitleChange={handleTitleChange}
                    key={todo?.id}
                    handleTodo={handleTodo}
                    todo={todo}
                  />
                );
              })}
            </TodoItemList>
          </TodoItemListContainer>
        </AppContent>
      </AppShell>
    </ThemeContext>
  );
}

export default App;

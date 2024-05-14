import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import "./todo.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    if (todo) {
      const newTodos = [
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const startEditTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditValue(todo.task);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const editTodo = (id) => {
    if (editValue) {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: editValue, isEditing: false } : todo
      );
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(inputValue);
        }}
        className="TodoForm"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
          placeholder="What is the task today?"
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
      {todos.map((todo) =>
        todo.isEditing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editTodo(todo.id);
            }}
            className="TodoForm"
          >
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="todo-input"
              placeholder="Update task"
            />
            <button type="submit" className="todo-btn">
              Update Task
            </button>
          </form>
        ) : (
          <div className="Todo" key={todo.id}>
            <p
              className={`${todo.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.task}
            </p>
            <div>
              <FontAwesomeIcon
                className="edit-icon"
                icon={faPenToSquare}
                onClick={() => startEditTodo(todo.id)}
              />
              <FontAwesomeIcon
                className="delete-icon"
                icon={faTrash}
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TodoApp;

import React, { useState } from "react";
import styles from "./planning.module.css";

const Planning = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Réunion avec l'équipe", completed: false },
    { id: 2, title: "Revue des documents juridiques", completed: false },
    { id: 3, title: "Appel client", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className={styles.planningContainer}>
      <h1>Planification</h1>
      <h2>Planifiez et suivez vos tâches</h2>

      <div className={styles.addTaskContainer}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Nouvelle tâche"
          className={styles.inputField}
        />
        <button onClick={handleAddTask} className={styles.addButton}>
          Ajouter
        </button>
      </div>

      <div className={styles.taskListContainer}>
        <h2>Liste des Tâches</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.taskItem} ${task.completed ? styles.completed : ""}`}
            onClick={() => handleToggleTask(task.id)}
          >
            <h3>{task.title}</h3>
            <p>Status: {task.completed ? "Complété" : "En cours"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planning;

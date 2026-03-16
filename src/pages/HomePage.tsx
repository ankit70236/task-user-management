import { useState, useEffect } from "react";
import TaskForm from "./taskForm";
import TaskItem from "../component/TaskItem";

const HomePage = () => {

  const [tasks, setTasks] = useState<any[]>([]);
  const [editTask, setEditTask] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  const userId = localStorage.getItem("userId");
  console.log("USER ID:", userId);
  const token = localStorage.getItem("token");

  const fetchTasks = async () => {

    if (!userId || !token) {
      console.error("User not logged in");
      return;
    }

    try {

      const res = await fetch(`http://localhost:8082/api/v1/users/${userId}/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (res.ok) {
        setTasks(data.data ?? []);
      } else {
        setTasks([]);
      }

    } catch (error) {
      console.error(error);
      setTasks([]);
    }

  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (

    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h1>Task Manager</h1>

      <button
        onClick={() => {
          setEditTask(null);
          setShowForm(!showForm);
        }}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Create Task
      </button>

      {showForm && (

        <TaskForm
          fetchTasks={fetchTasks}
          editTask={editTask}
          setShowForm={setShowForm}
          setEditTask={setEditTask}
        />

      )}

      <div style={{ marginTop: "20px" }}>

        {tasks.length === 0 ? (
          <p>No Tasks Found</p>
        ) : (

          tasks.map((task: any) => (
            <TaskItem
              key={task.id}
              task={task}
              fetchTasks={fetchTasks}
              setEditTask={setEditTask}
              setShowForm={setShowForm}
            />
          ))

        )}

      </div>

    </div>

  );

};

export default HomePage;
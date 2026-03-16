import { useEffect, useState } from "react";

const TaskForm = ({ fetchTasks, editTask, setShowForm, setEditTask }: any) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {

    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setStatus(editTask.status || "pending");
    }

  }, [editTask]);

  const saveTask = async () => {

    if (!token) {
      alert("Please login first");
      return;
    }

    try {

      let response;

      if (editTask) {

        response = await fetch(`http://localhost:8082/api/v1/tasks/${editTask.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            title,
            description,
            status
          })
        });

      } else {

        response = await fetch(`http://localhost:8082/api/v1/users/${userId}/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            title,
            description,
            status
          })
        });

      }

      if (!response.ok) {
        alert("Failed to save task");
        return;
      }

      await response.json();

      fetchTasks();

      setShowForm(false);
      setEditTask(null);

      setTitle("");
      setDescription("");
      setStatus("pending");

    } catch (err) {
      console.error(err);
    }

  };

  return (

    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "5px"
    }}>

      <h3>{editTask ? "Update Task" : "Create Task"}</h3>

      <input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button
        onClick={saveTask}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "4px"
        }}
      >
        {editTask ? "Update Task" : "Create Task"}
      </button>

    </div>

  );

};

export default TaskForm;
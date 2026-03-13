import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Registation";

export default function HomePage() {
  const [page, setPage] = useState("login")

  useEffect(() => {
    fetch("http://localhost:8082/health")
    
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching health status:", error);
      });
  }, []);

  return (
    <div>
      <h1>My Tasks</h1>
      <div>
        {page === "login" ? (
            <Login goRegister ={()=>setPage("register")}/>
            ):(
            <Register goLogin={()=>setPage("login")}/> )}
      </div>
    </div>
  );
}

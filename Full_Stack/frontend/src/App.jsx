import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((jokes, index) => (
        <div key={jokes.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App;

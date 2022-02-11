import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const name = "sagor";
  const id = "1000";

  // Query peraMeter
  /*  const handleValue = () => {
    fetch(`http://localhost:5000/user?id=${age}&name=${name}&class=${cls}`)
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }; */

  // Route peraMeters
  /*  const handleValue = () => {
    fetch(`http://localhost:5000/user/${id}/user/${name}`).then((res) => {
      console.log(res);
    });
  };
 */

  const handleValue = () => {
    fetch("http://localhost:5000/us", {
      headers: {
        "content-type": "application/json",
        authorization: "Bearer 123456677",
        name: "jaminur islam sagor",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  // console.log(user);
  return (
    <div className="App">
      <h1> My home page </h1>
      <h2> {user?.name} </h2>
      <h3> {user?.age} </h3>
      <h4> {user?.clas} </h4>
      <button onClick={handleValue}> Click Here </button>
    </div>
  );
}

export default App;

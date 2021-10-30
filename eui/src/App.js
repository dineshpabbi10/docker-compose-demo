import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/getlist")
      .then((data) => data.json())
      .then((response) => setData(response))
      .catch((err) => setData("Error"));
  }, []);

  const returnList = (data) => {
    return data.map((item) => {
      return (
        <div>
          {item.name} - {item.price}
        </div>
      );
    });
  };

  if (data === null) {
    return (
      <div className="App">
        <h2>Loading ...</h2>
      </div>
    );
  } else {
    return (
      <div className="App">{data === "Error" ? "Error" : returnList(data)}</div>
    );
  }
}

export default App;

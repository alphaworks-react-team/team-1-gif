import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setTrending(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {trending &&
        trending.map((gif, index) => (
          <div key={index}>
            <h5>{gif.title}</h5>

            <img src={gif.images.fixed_height.url} alt="" />
          </div>
        ))}
    </div>
  );
}

export default App;

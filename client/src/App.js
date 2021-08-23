import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Components
import Container from "./component/Container";

function App() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setTrending(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="glizzy-app">
      <Container>
        {trending &&
          trending.map((gif, index) => (
            <div key={index}>
              <h5>{gif.title}</h5>

              <img src={gif.images.original.url} alt="" />
            </div>
          ))}
      </Container>
    </div>
  );
}

export default App;

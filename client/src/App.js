import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//routes
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Container from "./component/Container";
import Search from "./component/Search";
import Nav from "./Styling/Nav";

//Styled Components
import { Card } from "./Styling/Card";
import RandomGif from "./component/RandomGif";

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [giph, setGiph] = useState(null);
  const [random, setRandom] = useState([]);

  //trending
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setTrending(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  //random
  useEffect(() => {
    axios
      .get(`/api/random`)
      .then((res) => setRandom(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    axios
      .get(`/api/search/?search=${search}`)
      .then((res) => setGiph(res.data.data))
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="glizzy-app">
      <Nav></Nav>

      <RandomGif random={random} />

      <Search onClick={onClick} onChange={onChange}></Search>
      {!giph ? (
        <Container>
          {trending &&
            trending.map((gif, index) => (
              <Card key={index}>
                <img src={gif.images.fixed_height_small.url} alt="" />
              </Card>
            ))}
        </Container>
      ) : (
        <Container>
          {giph &&
            giph.map((gif, index) => (
              <Card key={index}>
                <img src={gif.images.fixed_height.url} alt="" />
              </Card>
            ))}
        </Container>
      )}
    </div>
  );
}

export default App;

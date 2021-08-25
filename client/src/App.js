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
import CarouselTest from "./test/CarouselTest";

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [giph, setGiph] = useState(null);
  const [test, setTest] = useState([]);

  //trending
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setTrending(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get("/api/categories")
      .then((res) => setTest(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  //random
  // useEffect(() => {
  //   axios
  //     .get(`/api/random`)
  //     .then((res) => setRandom(res.data.data))
  //     .catch((err) => console.log(err));
  // }, []);

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

  console.log(trending);
  return (
    <div className="glizzy-app">
      <Nav></Nav>

      <Search onClick={onClick} onChange={onChange}></Search>
      {giph && (
        <CarouselTest>
          <h3 style={{ margin: "0", paddingLeft: "10px", color: "white" }}>
            You searched "{search}"
          </h3>
          <div>
            {giph &&
              giph.map((gif, index) => (
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px",
                  }}
                  key={index}
                >
                  <img src={gif.images.fixed_height.url} alt="" />
                </div>
              ))}
          </div>
        </CarouselTest>
      )}
      <CarouselTest title="Trending">
        <h3 style={{ margin: "0", paddingLeft: "10px", color: "white" }}>
          Trending
        </h3>
        <div>
          {trending &&
            trending.map((gif, index) => (
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                }}
                key={index}
              >
                <img src={gif.images.fixed_height.url} alt="" />
              </div>
            ))}
        </div>
      </CarouselTest>
      <CarouselTest>
        <h3 style={{ margin: "0", paddingLeft: "10px", color: "white" }}>
          Categories
        </h3>
        <div>
          {test &&
            test.map((gif, index) => (
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                }}
                key={index}
              >
                <h4 style={{ margin: 0 }}>{gif.name}</h4>
                <img src={gif.gif.images.fixed_height.url} alt="" />
              </div>
            ))}
        </div>
      </CarouselTest>
      {/* {!giph ? (
        <Container>
          {trending &&
            trending.map((gif, index) => (
              <Card key={index}>
                <img src={gif.images.fixed_height.url} alt="" />
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
      )} */}
    </div>
  );
}

export default App;

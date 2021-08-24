import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Components
import Container from "./component/Container";
import Search from "./component/Search";
import Nav from './Styling/Nav'

//Styled Components
import { Card } from "./Styling/Card";
import CarouselTest from "./test/CarouselTest";

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [giph, setGiph] = useState(null);
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setTrending(res.data.data))
      .catch((err) => console.log(err));
    // .get("/api/categories")
    // .then((res) => setTest(res.data.data))
    // .catch((err) => console.log(err));
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

  console.log(trending);
  return (
    <div className='glizzy-app'>
      <Nav></Nav>
      <Search onClick={onClick} onChange={onChange}></Search>
      <CarouselTest title="Trending">
        {trending &&
          trending.map((gif, index) => (
            <div
              style={{
                display: "inline-block",
                color: "white",
                textAlign: "center",
                padding: "14px",
                textDecoration: "none",
              }}
              key={index}
            >
              <img src={gif.images.fixed_height.url} alt="" />
            </div>
          ))}
      </CarouselTest>
      {!giph ? (
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
                <img src={gif.images.fixed_height.url} alt='' />
              </Card>
            ))}
        </Container>
      )}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Components
import Container from "./component/Container";
import Search from "./component/Search";
import Nav from './Styling/Nav'
// import Drop from './Styling/Drop'

//Styled Components
import { Card } from './Styling/Card';

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [giph, setGiph] = useState(null);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setTrending(res.data.data))
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

  console.log(trending)
  return (
    <div className='glizzy-app'>
      <Nav>
        {/* <Drop></Drop> */}
      </Nav>
      <Search onClick={onClick} onChange={onChange}></Search>
      {!giph ? (
        <Container>
          {trending &&
            trending.map((gif, index) => (
              <Card key={index}>
                <img src={gif.images.fixed_height.url} alt='' />
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

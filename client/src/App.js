import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router";

//routes
// import routes from './config/routes';

//Components
import Container from "./component/Container";
import Search from "./component/Search";
import Nav from "./Styling/Nav";
import Home from "./component/Home";
import TrendingPage from "./component/TrendingPage";

//Styled Components
import { Card } from "./Styling/Card";
import CarouselTest from "./test/CarouselTest";

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [giph, setGiph] = useState(null);
  const [categories, setCategories] = useState([]);

  //trending
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setTrending(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get("/api/categories")
      .then((res) => setCategories(res.data.data))
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
  };

  return (
    <div className="glizzy-app">
      <Nav />
      <Search onClick={onClick} onChange={onChange}></Search>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home giph={giph} />
          </Route>
          <Route path="/trending">
            <TrendingPage giph={giph} trending={trending} />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;

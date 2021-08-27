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
import Profile from "./component/Profile";

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [giph, setGiph] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [randomGiph, setRandomGiph] = useState();
  const [favoriteGifs, setFavoriteGifs] = useState([]);

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
    axios
      .get("/api/randomGiph")
      .then((res) => setRandomGiph(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  //favorites
  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites === null) {
      setFavoriteGifs([]);
      localStorage.setItem("favorites", JSON.stringify([]));
    } else {
      setFavoriteGifs(JSON.parse(favorites));
    }
  }, []);

  //delete
  // useEffect(() => {
  //   const deletes = localStorage.getItem("deletes");
  //   if (deletes === null) {
  //     setDeleteGifs([]);
  //     localStorage.setItem("deletes", JSON.stringify([]));
  //   } else {
  //     setDeleteGifs(JSON.parse(deletes));
  //   }
  // }, []);

  const onClick = (e) => {
    e.preventDefault();

    axios
      .get(`/api/search/?search=${search}`)
      .then((res) => {
        document.querySelector("#searchInput").value = "";
        setGiph(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const onCategoryClick = (e, value) => {
    e.preventDefault();
    axios
      .get(`/api/search/?search=${value}`)
      .then((res) => setCategory(res.data.data))
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const AddToFavoriteClick = (index) => {
    console.log(index);
    const arr = [...favoriteGifs];
    console.log(arr);
    arr.push(trending[index]);
    // arr.push(category[index]);
    localStorage.setItem("favorites", JSON.stringify(arr));
    setFavoriteGifs(arr);
  };

  const AddToFavoriteClickFromCategory = (index) => {
    console.log(index);
    const arr = [...favoriteGifs];
    console.log(arr);
    arr.push(category[index]);
    // arr.push(category[index]);
    localStorage.setItem("favorites", JSON.stringify(arr));
    setFavoriteGifs(arr);
  };

  const AddToFavoriteClickFromSearch = (index) => {
    console.log(index);
    const arr = [...favoriteGifs];
    console.log(arr);
    arr.push(giph[index]);
    // arr.push(category[index]);
    localStorage.setItem("favorites", JSON.stringify(arr));
    setFavoriteGifs(arr);
  };

  const DeleteFavoriteClicks = (index) => {
    console.log(index);
    const arr = [...favoriteGifs];
    arr.splice(index, 1);
    const storageArray = JSON.parse(localStorage.getItem("favorites"));
    storageArray.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(storageArray));
    setFavoriteGifs(arr);
  };

  //NEEDS TO RENDER THE GIPHS THAT ARENT DELETED

  return (
    <div className="glizzy-app">
      <Nav />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home
              giph={giph}
              onClick={onClick}
              onChange={onChange}
              randomGiph={randomGiph}
              AddToFavoriteClickFromSearch={AddToFavoriteClickFromSearch}
            >
              <Search onClick={onClick} onChange={onChange}></Search>
            </Home>
          </Route>
          <Route path="/trending">
            <TrendingPage
              giph={giph}
              trending={trending}
              categories={categories}
              search={search}
              category={category}
              onClick={onCategoryClick}
              AddToFavoriteClick={AddToFavoriteClick}
              AddToFavoriteClickFromCategory={AddToFavoriteClickFromCategory}
            />
          </Route>
          <Route path="/profile">
            <Profile
              favoriteGifs={favoriteGifs}
              DeleteFavoriteClicks={DeleteFavoriteClicks}
            />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;

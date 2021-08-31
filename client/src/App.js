import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router';

//routes
// import routes from './config/routes';

//Components
import Container from './component/Container';
import Search from './component/Search';
import Nav from './Styling/Nav';
import Home from './component/Home';
import TrendingPage from './component/TrendingPage';
import Profile from './component/Profile';
import Login from './component/Login';
import AuthModal from './Styling/AuthModal';

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState('');
  const [giph, setGiph] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [randomGiph, setRandomGiph] = useState();
  const [favoriteGifs, setFavoriteGifs] = useState([]);
  const [searchError, setSearchError] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);
  const [authErr, setAuthErr] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  //user auth
  const getUser = e => {
    setUser(e.target.value);
  };

  const getPassword = e => {
    setPassword(e.target.value);
  };

  const getAuth = e => {
    e.preventDefault();
    if (user !== 'Ari' && password !== 'ari') {
      setAuthErr(true);
    } else if (user === 'Ari' && password === 'ari') {
      setAuthErr(false);
      setAuth(true);
    }
  };

  const showErr = authErr => {
    if (authErr) {
      return <AuthModal setAuthErr={setAuthErr} />;
    }
    return null;
  };

  //trending
  useEffect(() => {
    axios
      .get('/api')
      .then(res => setTrending(res.data.data))
      .catch(err => console.log(err));
    axios
      .get('/api/categories')
      .then(res => setCategories(res.data.data))
      .catch(err => console.log(err));
    axios
      .get('/api/randomGiph')
      .then(res => setRandomGiph(res.data.data))
      .catch(err => console.log(err));
  }, []);

  //favorites
  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites === null) {
      setFavoriteGifs([]);
      localStorage.setItem('favorites', JSON.stringify([]));
    } else {
      setFavoriteGifs(JSON.parse(favorites));
    }
  }, []);

  //search
  const onClick = e => {
    e.preventDefault();
    let isValid = validate();
    if (isValid) {
      console.log('is valid');
    } else {
      setSearchError('');
    }
    axios
      .get(`/api/search/?search=${search}`)
      .then(res => {
        document.querySelector('#searchInput').value = '';
        setGiph(res.data.data);
      })
      .catch(err => console.log(err));

    setSearch('');
  };

  const validate = () => {
    let searchError = '';
    if (search === '') {
      searchError = 'YOLANDA';
      setSearchError(searchError);
    }
    if (!searchError) {
      return false;
    }
    return true;
  };

  const onCategoryClick = (e, value) => {
    e.preventDefault();
    axios
      .get(`/api/search/?search=${value}`)
      .then(res => setCategory(res.data.data))
      .catch(err => console.log(err));
  };

  const onChange = e => {
    setSearch(e.target.value);
  };

  //Add to Favorites
  const AddToFavoriteClick = index => {
    if (auth === false) {
      return setDisplayModal(true);
    }
    const arr = [...favoriteGifs];
    console.log(arr);
    arr.push(trending[index]);

    // arr.push(category[index]);
    localStorage.setItem('favorites', JSON.stringify(arr));
    setFavoriteGifs(arr);
  };

  const AddToFavoriteClickFromCategory = index => {
    console.log(index);
    const arr = [...favoriteGifs];
    console.log(arr);
    arr.push(category[index]);
    localStorage.setItem('favorites', JSON.stringify(arr));
    setFavoriteGifs(arr);
  };

  const AddToFavoriteClickFromSearch = index => {
    console.log(index);
    const arr = [...favoriteGifs];
    console.log(arr);
    arr.push(giph[index]);
    localStorage.setItem('favorites', JSON.stringify(arr));
    setFavoriteGifs(arr);
  };
  //Delete from favorites
  const DeleteFavoriteClicks = index => {
    console.log(index);
    const arr = [...favoriteGifs];
    arr.splice(index, 1);
    const storageArray = JSON.parse(localStorage.getItem('favorites'));
    storageArray.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(storageArray));
    setFavoriteGifs(arr);
  };

  //toggle Follow for profile follow button... ignore this
  // const handleFollowToggle = () =>{
  //  setToggleFollow(!toggleFollow)
  // }

  return (
    <div className='glizzy-app'>
      <Nav />
      <Container>
        <Switch>
          <Route exact path='/'>
            <Home
              giph={giph}
              onClick={onClick}
              onChange={onChange}
              randomGiph={randomGiph}
              AddToFavoriteClickFromSearch={AddToFavoriteClickFromSearch}>
              <Search onClick={onClick} onChange={onChange} required></Search>
              <p>{searchError}</p>
            </Home>
          </Route>
          <Route path='/trending'>
            <TrendingPage
              giph={giph}
              trending={trending}
              categories={categories}
              search={search}
              category={category}
              onClick={onCategoryClick}
              AddToFavoriteClick={AddToFavoriteClick}
              AddToFavoriteClickFromCategory={AddToFavoriteClickFromCategory}
              displayModal={displayModal}
              setDisplayModal={setDisplayModal}
            />
          </Route>

          <Route path='/profile'>
            {showErr(authErr)}

            {!auth ? (
              <Login
                user={user}
                getUser={getUser}
                password={password}
                getPassword={getPassword}
                auth={auth}
                getAuth={getAuth}
              />
            ) : (
              <Profile
                favoriteGifs={favoriteGifs}
                DeleteFavoriteClicks={DeleteFavoriteClicks}
                // handleFollowToggle={handleFollowToggle}
                // toggleFollow={toggleFollow}
              />
            )}
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;

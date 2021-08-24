import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Components
import Container from './component/Container';
import Search from './component/Search';

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState('');
  const [giph, setGiph] = useState(null);

  useEffect(() => {
    axios
      .get('/api')
      .then(res => setTrending(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const onClick = (e, search) => {
    e.preventDefault();
    axios
      .get(`/api/search/?q=cheese`)
      .then(res => setGiph(res.data.data))
      .catch(err => console.log(err));
  };

  const onChange = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className='glizzy-app'>
      <Search onClick={onClick} onChange={onChange}></Search>
      {!giph ? (
        <Container>
          {trending &&
            trending.map((gif, index) => (
              <div key={index}>
                <h5>{gif.title}</h5>
                <img src={gif.images.original.url} alt='' />
              </div>
            ))}
        </Container>
      ) : (
        <Container>
          {giph &&
            giph.map((gif, index) => (
              <div key={index}>
                <h5>{gif.title}</h5>
                <img src={gif.images.original.url} alt='' />
              </div>
            ))}
        </Container>
      )}
    </div>
  );
}

export default App;

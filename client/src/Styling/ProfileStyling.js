import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 8rem 0 8rem;
  margin-bottom: 5rem;
  align-items: center;
`;

export const  FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const  ProfilePic = styled.div`
  display: flex;
  width: 15rem;
  height: 15rem;
  border: none;
  border-radius: 30%;
  background-image: url('https://www.kindpng.com/picc/m/104-1046489_sadcat-meme-memes-sad-cat-crying-cat-meme.png');
  background-position: center;
  background-size: cover;
  margin: 1rem 0 1rem 0;
`;

export const  FollowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column wrap;
  border: 10px solid white;
  width: 100%;
  height: 7rem;
  /* transform: translate(11px, -11px); */
  margin: 3rem 0 3rem 0;
  font-family: 'Oswald', sans-serif;
`;


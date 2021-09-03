import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 8rem 0 8rem;
  margin-bottom: 5rem;
  align-items: center;
  
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

export const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 5rem;
  
`;

export const ProfilePic = styled.div`
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
color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column wrap;
  border: 6px solid black;
  border-radius: 10px;
  width: 110%;
  height: 7rem;
  margin: 3rem 0 3rem 0;
  font-family: 'Oswald', sans-serif;

  @media (max-width: 600px) {
    width: 90%;
    margin: 0;
    display: flex;
    align-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
    font-size: small;
    /* box-sizing:border-box; */
  }
`;


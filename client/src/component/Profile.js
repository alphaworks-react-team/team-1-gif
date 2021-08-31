import React from "react";
import styled from "styled-components";
import { Card } from "../Styling/Card";
import { BsTrash } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 8rem 0 8rem;
  margin-bottom: 5rem;
  align-items: center;
`;

const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 5rem;
`;

const ProfilePic = styled.div`
  display: flex;
  width: 15rem;
  height: 15rem;
  border: none;
  border-radius: 30%;
  background-image: url("https://www.kindpng.com/picc/m/104-1046489_sadcat-meme-memes-sad-cat-crying-cat-meme.png");
  background-position: center;
  background-size: cover;
  margin: 1rem 0 1rem 0;
`;

const FollowContainer = styled.div`
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

const Profile = ({
  favoriteGifs,
  DeleteFavoriteClicks,
  handleFollowToggle,
  toggleFollow,
}) => {
  return (
    <Container>
      <ProfilePic></ProfilePic>
      <FollowContainer>
        <h1>FOLLOWING</h1>
        <h1>4,830</h1>
        <h1>FOLLOWERS</h1>
        <h1>8.7M</h1>
        <h1>Cat Nip Is Life</h1>
      </FollowContainer>
      {/*<Follow onClick={handleFollowToggle}>{!toggleFollow ? 'FOLLOW' : 'UNFOLLOW'}</Follow>*/}
      <FavoritesContainer>
        {favoriteGifs &&
          favoriteGifs.map((gif, index) => (
            <Card key={index} onClick={() => DeleteFavoriteClicks(index)}>
              <img src={gif.images.fixed_height.url} alt="" />
              <BsTrash
                style={{
                  fill: "black",
                  transform: "translateX(-35px)",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                size="2em"
              />
            </Card>
          ))}
      </FavoritesContainer>
    </Container>
  );
};

export default Profile;

import React from "react";
import styled from "styled-components";
import { Card } from "../Styling/Card";
import { BsTrash } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 8rem 0 8rem;
  margin-bottom: 5rem;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url("https://www.kindpng.com/picc/m/104-1046489_sadcat-meme-memes-sad-cat-crying-cat-meme.png");
  background-position: center;
  background-size: cover;
  margin: 1rem 0 1rem 0;
`;

const Profile = ({ favoriteGifs, DeleteFavoriteClicks }) => {
  return (
    <Container>
      <ProfilePic></ProfilePic>
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

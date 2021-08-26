import React from "react";
import styled from "styled-components";

const Profile = () => {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color:lightblue;
    width: 100vw;
    height: 300%;
  `;

  const ProfilePic = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url("https://www.kindpng.com/picc/m/104-1046489_sadcat-meme-memes-sad-cat-crying-cat-meme.png");
    background-position: center;
    background-size: cover;
  margin-bottom: 30px;
  `;

  const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
    border: 2px solid red;
    width: 100%;
    height: 100%;
  `

  return (
    <div>
    <Container>
      <ProfilePic></ProfilePic>
      <FavoritesContainer>I am favorites container</FavoritesContainer>
      </Container>
    </div>
  );
};

export default Profile;

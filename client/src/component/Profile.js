import React from 'react';
import styled from 'styled-components';
import { Card } from '../Styling/Card';
import { BsTrash } from 'react-icons/bs';
import {Container, FavoritesContainer, ProfilePic, FollowContainer } from "../Styling/ProfileStyling"


const Profile = ({
  favoriteGifs,
  DeleteFavoriteClicks,
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
      <FavoritesContainer>
        {favoriteGifs &&
          favoriteGifs.map((gif, index) => (
            <Card key={index} onClick={() => DeleteFavoriteClicks(index)}>
              <img src={gif.images.fixed_height.url} alt='' />
              <BsTrash
                style={{
                  fill: 'black',
                  transform: 'translateX(-35px)',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                size='2em'
              />
            </Card>
          ))}
      </FavoritesContainer>
    </Container>
  );
};

export default Profile;

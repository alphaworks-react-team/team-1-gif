import React from "react";
import Clipboard from "./Clipboard";
import { Card } from "../Styling/Card";
import { BsTrash } from "react-icons/bs";
import { HeartIcon } from "../Styling/TrendingStyles"
import {
  Container,
  FavoritesContainer,
  ProfilePic,
  FollowContainer,
} from "../Styling/ProfileStyling";


const Profile = ({ favoriteGifs, DeleteFavoriteClicks }) => {
  return (
    <Container>
      <ProfilePic></ProfilePic>
      <FollowContainer>
        <h1>FOLLOWING</h1>
        <h1>4,830</h1>
        <h1>FOLLOWERS</h1>
        <h1>8.7M</h1>
      </FollowContainer>
      <FavoritesContainer>
        {favoriteGifs &&
          favoriteGifs.map((gif, index) => (
            <Card key={index}>
              <Clipboard giph={favoriteGifs} index={index} />
              <img
                src={gif.images.fixed_height.url}
                alt=''
              />
              <HeartIcon>
                <BsTrash
                  onClick={e => {
                    DeleteFavoriteClicks(index);
                  }}
                  size='2em'
                />
              </HeartIcon>
            </Card>
          ))}
      </FavoritesContainer>
    </Container>
  );
};

export default Profile;

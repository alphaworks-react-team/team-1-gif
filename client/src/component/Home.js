import React from 'react';
import Clipboard from '../component/Clipboard';
import { Card } from '../Styling/Card';
import { RiHeartLine } from 'react-icons/ri';
import { Container, Text, RandomGiph } from '../Styling/HomeStyles';
import {
  ModalBackground,
  Modal,
  CancelBox,
  CancelIcon,
  LinkBox,
  LinkTag,
  HeartIcon,
} from '../Styling/TrendingStyles';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Home = ({
  giph,
  randomGiph,
  AddToFavoriteClickFromSearch,
  children,
  error,
  displayModal,
  setDisplayModal,
}) => {
  return (
    <Container>
      {displayModal ? (
        <ModalBackground>
          <Modal>
            <CancelBox>
              <CancelIcon onClick={() => setDisplayModal(false)}>
                <MdCancel />
              </CancelIcon>
            </CancelBox>
            <LinkBox>
              <Link
                to={'/profile'}
                onClick={() => setDisplayModal(false)}
                style={{ textDecoration: 'none' }}>
                <LinkTag>Log-in to like giphs</LinkTag>
              </Link>
            </LinkBox>
          </Modal>
        </ModalBackground>
      ) : null}
      {children}
      {!giph ? (
        <RandomGiph>
          <Text>Random Gliphy Yo!</Text>
          <img src={randomGiph?.images.original.url} alt='' />
        </RandomGiph>
      ) : (
        giph.map((gif, index) => (
          <Card onClick={() => AddToFavoriteClickFromSearch(index)} key={index}>
            <Clipboard giph={giph} index={index} />
            <img src={gif.images.fixed_height.url} alt='' />
            <HeartIcon>
              <RiHeartLine
                onClick={e => {
                  e.target.style.color = '#ff67e7';
                }}
                size='2em'
              />
            </HeartIcon>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Home;

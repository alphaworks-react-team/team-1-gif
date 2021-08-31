import React from 'react';
import Container from './Container';
import CarouselTest from '../test/CarouselTest';
import { RiHeartLine } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Modal = styled.div`
  height: 300px;
  width: 400px;
  background: black;
  color: white;

  z-index: 1;
  position: absolute;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-content: center;

  margin-top: 5rem;
`;

const CancelBox = styled.div`
  height: 30px;
  width: 400px;
  font-size: 2rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 1rem;
  margin-left: -1rem;
`;

const CancelIcon = styled.div`
  height: 30px;
  width: 30px;

  cursor: pointer;

  :hover {
    color: red;
  }
`;

const LinkBox = styled.div`
  height: 270px;
  width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

`;

const LinkTag = styled.div`
  font-size: 35px;
  color: white;

  :hover {
  color: red;
  }
`;

const TrendingPage = ({
  trending,
  categories,
  onClick,
  category,
  AddToFavoriteClick,
  AddToFavoriteClickFromCategory,
  displayModal,
  setDisplayModal,
}) => {
  return (
    <Container>
      {displayModal ? (
        <Modal>
          <CancelBox>
            <CancelIcon onClick={() => setDisplayModal(false)}>
              <MdCancel />
            </CancelIcon>
          </CancelBox>
          <LinkBox>
            <Link to={'/profile'} onClick={() => setDisplayModal(false)} style={{ textDecoration: 'none' }}>
              <LinkTag>Log-in to like giphs</LinkTag>
            </Link>
          </LinkBox>
        </Modal>
      ) : null}
      <CarouselTest title='Trending'>
        <h3 style={{ margin: '0', paddingLeft: '10px', color: 'white' }}>
          Trending
        </h3>
        <div>
          {trending &&
            trending.map((gif, index) => (
              <div
                style={{
                  display: 'inline-block',
                  padding: '10px',
                }}
                key={index}
                onClick={() => AddToFavoriteClick(index)}>
                <img src={gif.images.fixed_height.url} alt='' />
                <RiHeartLine
                  style={{
                    fill: 'red',
                    transform: 'translateX(-35px)',
                  }}
                  size='2em'
                />
              </div>
            ))}
        </div>
      </CarouselTest>
      <CarouselTest>
        <h3 style={{ margin: '0', paddingLeft: '10px', color: 'white' }}>
          Categories
        </h3>
        <div>
          {categories &&
            categories.map((gif, index) => (
              <div
                onClick={e => onClick(e, gif.name)}
                style={{
                  display: 'inline-block',
                  padding: '10px',
                }}
                key={index}>
                <h4 style={{ margin: 0 }}>{gif.name}</h4>
                <img src={gif.gif.images.fixed_height.url} alt='' />
              </div>
            ))}
        </div>
      </CarouselTest>
      {category && (
        <CarouselTest>
          <div>
            {category &&
              category.map((gif, index) => (
                <div
                  onClick={e => AddToFavoriteClickFromCategory(index)}
                  style={{
                    display: 'inline-block',
                    padding: '10px',
                  }}
                  key={index}>
                  <h4 style={{ margin: 0 }}>{}</h4>
                  <img src={gif.images.fixed_height.url} alt='' />
                  <RiHeartLine
                    style={{
                      fill: 'red',
                      transform: 'translateX(-35px)',
                    }}
                    size='2em'
                  />
                </div>
              ))}
          </div>
        </CarouselTest>
      )}
      {/* {!giph ? (
          <Container>
            {trending &&
              trending.map((gif, index) => (
                <Card key={index}>
                  <img src={gif.images.fixed_height.url} alt="" />
                </Card>
              ))}
          </Container>
        ) : (
          <Container>
            {giph &&
              giph.map((gif, index) => (
                <Card key={index}>
                  <img src={gif.images.fixed_height.url} alt="" />
                </Card>
              ))}
          </Container>
        )} */}
    </Container>
  );
};

export default TrendingPage;

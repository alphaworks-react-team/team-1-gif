import React from 'react'
import Container from './Container';
import { Card } from '../Styling/Card';

const TrendingPage = ({trending}) => {
  return (
    <div>
      <Container>
        {trending &&
          trending.map((gif, index) => (
            <Card key={index}>
              <img src={gif.images.fixed_height.url} alt=""/>
            </Card>
          ))}
      </Container>
    </div>
  )
}

export default TrendingPage;

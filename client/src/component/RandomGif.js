import React from "react";

const RandomGif = (props) => {
  console.log(props.random.images.fixed_hight) 
  return <img src={props} alt=""></img>;
};

export default RandomGif;

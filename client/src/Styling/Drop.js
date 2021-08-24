import React, { Component } from 'react';
import styled from 'styled-components';
import { GrTextAlignCenter } from 'react-icons/gr';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  background-color: black;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  color: white;
  text-decoration: none;
  font-size: 2rem;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

class Drop extends Component {
  handleClick = action => {
    if (!action) return;
    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
      <StyledUl>
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick('DropDown')}>
            <GrTextAlignCenter />
          </Dropbtn>
          <DropDownContent>
            {' '}
            <SubA onClick={() => this.handleClick('Link1')}>Home</SubA>
            <SubA onClick={() => this.handleClick('Link2')}>Random Giphy</SubA>
            <SubA onClick={() => this.handleClick('Link3')}>Profile</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
  };
}

export default Drop;

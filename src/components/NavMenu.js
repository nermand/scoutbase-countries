import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import icon from '../icon_small.png';

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  height: 30px;
  margin-right: 20px;
`;

const Links = styled.li`
  width: 100px;
  border: 1px black solid;
  border-radius: 3px;
  padding: 3px;
  text-align: center;
  margin-right: 5px;

  &:hover {
    background-color: black;
  }
`;

const NavMenu = props => {
  return (
    <nav>
      <Container>
        <li>
          <Icon src={icon} alt="icon" />
        </li>

        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            backgroundColor: 'black',
          }}
        >
          <Links>Home</Links>
        </NavLink>

        <NavLink
          exact
          to="/countries/"
          activeStyle={{
            fontWeight: 'bold',
            backgroundColor: 'black',
          }}
        >
          <Links>Country List</Links>
        </NavLink>
      </Container>
    </nav>
  );
};

export default NavMenu;

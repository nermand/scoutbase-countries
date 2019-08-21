import React from 'react';
import { Link } from 'react-router-dom';
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
`;

const NavMenu = props => {
  return (
    <nav>
      <Container>
        <li>
          <Icon src={icon} alt="icon" />
        </li>
        <Links>
          <Link to="/">Home</Link>
        </Links>
        <Links>
          <Link to="/countries/">Country List</Link>
        </Links>
      </Container>
    </nav>
  );
};

export default NavMenu;

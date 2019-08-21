import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Home = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Title>Browsable Countries List</Title>
    </Container>
  );
};

export default Home;

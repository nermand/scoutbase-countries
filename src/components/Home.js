import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #b5a49d;
  padding: 10px;
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

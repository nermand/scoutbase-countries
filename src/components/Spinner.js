import React from 'react';
import { default as ReactSpinner } from 'react-spinner-material';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Spinner = () => {
  return (
    <Wrapper>
      <ReactSpinner size={120} spinnerColor={'#b5a49d'} />
    </Wrapper>
  );
};

export default Spinner;

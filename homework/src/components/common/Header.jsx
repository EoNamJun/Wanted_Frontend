import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
  border-bottom: 1px solid #d3d3d3;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Angular / Angular-cli</Title>
  </HeaderContainer>
);

export default Header;
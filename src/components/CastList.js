import React from 'react';
import styled from 'styled-components';

const ActorsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 0;
  
`;

const CastsList = ({ children }) => {
  return <ActorsList>{children}</ActorsList>;
};

export default CastsList;

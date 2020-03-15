import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: center;

  &:hover {
    /* opacity: .3; */
    transition: transform 0.5s;
    -webkit-transition: transform 0.5s;
  }
`;

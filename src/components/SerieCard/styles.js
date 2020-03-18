import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 9.9rem;
  max-width: 42.8em;
  background-color: #0505057a;
  border-radius: 5px;
  margin: 80px 10px 10px 10px;
  flex: auto;
  -webkit-transition: -webkit-transform 0.3s;
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
  -webkit-transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 13.9rem;
    width: 14.8em;
    border-radius: 5px;
    margin: -30px 0 0 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    padding: 20px;
    font-weight: bold;
    font-size: 15px;

    span {
      display: flex;
      margin-bottom: 10px;
      justify-content: left;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

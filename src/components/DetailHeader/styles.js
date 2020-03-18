import styled from 'styled-components';
import backGroundHeader from '../../assets/images/marvels_background.jpeg';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background-color: #fff;
  color: #191920;

  header {
    height: 170px;
    background-image: url(${backGroundHeader});
  }

  div:nth-child(2) {
    padding: 20px;
    display: flex;
    justify-content: space-between;

    aside {
      display: flex;
      flex-direction: column;
      flex: auto !important;
      margin-left: 10px;
      font-size: large;

      h1 {
        font-weight: bold;
      }

      span:nth-child(2) {
        font-weight: bold;

        svg {
          color: red;
          margin-right: 5px;
        }
      }
    }

     svg:nth-child(3) {
        background-color: #d5171c;
        color: #fff;
        border-radius: 50%;
        padding: 5px;
        margin-right: 40px;
        border: 10px solid #191920;
        transition: 0.4s;

        &:hover {
          border: none;
        }
      }

      div img {
        height: 13.9rem;
        width: 15.8em;
        margin-top: -100px;
        border: 2px solid #fff;
      }
  }
`;

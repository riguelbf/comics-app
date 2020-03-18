import styled from 'styled-components';

export const Container = styled.div`
  height: 20rem;
  width: 20em;
  cursor: pointer;
  border: solid 1px #fff;
  margin: 15px;
  border-radius: 5px;
  transition: transform 0.3s;
  -webkit-transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    @include responsive(tab_port) {
      transform: scale(1.15);
    }
  }

aside {
      position: absolute;
      width: 100%;
      padding: 10px;
      color: #fff;
      font-size: 1.4em;
      line-height: 1.6em;
      background-color: #d5171c;
      width: 15.1em;
      margin-left:-17px;
      margin-top: -94px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;

      &:before {
        content: ' ';
        position: absolute;
        left: 0;
        top: -16px;
        width: 0;
        border: 8px solid;
        border-right-color: #fff;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;

        border-top-color: transparent;
        border-right-color: #9a0a0e;
        border-bottom-color: #9a0a0e;
        border-left-color: transparent;
      }

      span, strong {
        display: flex;
        align-items: center;
        font-weight: 400;
        display: block;
        font-size: 0.8em;

        svg {
          margin-right: 5px;
        }
      }
    }
`;

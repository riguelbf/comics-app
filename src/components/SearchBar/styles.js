import styled from 'styled-components';

export const Container = styled.div`
  /* transform:  translate(-50%,150%); */
  background: #191920f0;
  height: 60px;
  border-radius: 40px;
  left: 30px;
  margin-top: -16px;

&:hover > input {
    width: 240px;
    padding: 7px 0 0 15px;
}

&:hover > button {
  background: #d5171c;
  border: none;
  color : #fff;
  transition: 0.4s;
}

button {
    color: white;
    float: right;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #d5171c;
    border: 10px solid #191920;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}

input {
    border:none;
    background: none;
    outline:none;
    float:left;
    padding: 7px 0 0 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
/* width: 240px; */
}

@media screen and (max-width: 620px) {
  &:hover > input {
      width: 150px;
      padding: 0 6px;
  }
}
`;



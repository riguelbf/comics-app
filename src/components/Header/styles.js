import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #191920e3;
    z-index:99;

    header {
        background-color: #fff;
        padding: 10px;
        display: flex;
        height: 45px;
        margin-top: 30px;
        margin-bottom: 40px;
        justify-content: space-between;
    }

    img {
      border-radius: 50%;
      height: 115px;
      background-color: #191920;
      margin-top: -37px;
    }
`;

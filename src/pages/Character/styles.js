import styled from 'styled-components';

export const Wrapper = styled.div`

  position: relative;
  max-width: 40rem;
  margin: 22rem auto;
  background: #fff;
  width: 100%;
  border-radius: 5px;

  form {
    padding: 20px 30px 20px 30px;
  }

  header {
    display:flex;
    justify-content: center;

    div:nth-child(1) div img {
      height: 13.9rem;
      width: 13.8em;
      border: 2px solid #fff;
      margin-top: -200px;
      box-shadow: 0 8px 10px 1px rgba(25, 25, 32, 1), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }
  }

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* box-shadow: 0 8px 10px 1px rgba(215, 24, 28, 1), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); */
  -webkit-transform: scale(0.98);
          transform: scale(0.98);
  -webkit-transition: -webkit-transform 0.28s ease-in-out;
  transition: -webkit-transform 0.28s ease-in-out;
  transition: transform 0.28s ease-in-out;
  transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;
  /* z-index: -1; */
}

&:hover::before {
  -webkit-transform: scale(1);
          transform: scale(1);
}

.button-container {
  text-align: center;
}

.button {
  position: relative;
  background: #d9181c;
  border: 1px solid currentColor;
  font-size: 1.1rem;
  color: #4f93ce;
  margin: 3rem 0;
  padding: 0.75rem 3rem;
  cursor: pointer;
  -webkit-transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
  transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.button span {
  color: #fff;
  position: relative;
  /* z-index: 1; */
}

.button::before {
  content: '';
  position: absolute;
  background: #071017;
  border: 50vh solid #1d4567;
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  display: block;
  top: 50%;
  left: 50%;
  /* z-index: 0; */
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) scale(0);
          transform: translate(-50%, -50%) scale(0);
}

.button:hover {
  color: ##d9181c;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
}

.button:active::before, .button:focus::before {
  -webkit-transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
  transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
  transition: transform 1.12s ease, opacity 0.28s ease 0.364s;
  transition: transform 1.12s ease, opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
  -webkit-transform: translate(-50%, -50%) scale(1);
          transform: translate(-50%, -50%) scale(1);
  opacity: 0;
}

.button:focus {
  outline: none;
}
`;

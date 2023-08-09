import { styled } from 'styled-components';

export const ContentDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(131, 58, 180);
  background: ${(props) =>
    props.isDarkMode
      ? 'linear-gradient(210deg, rgb(44 19 61) 0%, rgb(87 12 88) 50%, rgb(107 74 27) 100%)'
      : 'linear-gradient(25deg, rgba(131, 58, 180, 1) 0%, rgba(250, 29, 253, 1) 50%, rgba(252, 176, 69, 1) 100%)'};

  h1 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin: 20px;
  }
`;

export const ToggleBtn = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
  font-size: 40px;
  color: #fff;
`;

export const ToDo = styled.div`
  width: 90vw;
  max-width: 400px;
  min-width: 250px;
  background: #90ddff70;
  border-radius: 10px;
  border: 2px solid #fff;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 3px solid #fff;

  svg {
    font-size: 35px;
    min-height: 35.2px;
    min-width: 35px;
    padding: 5px;
    background: #fff;
    color: ${(props) => (props.isDarkMode ? '#3e006f' : '#8e00ff')};
    border-radius: 10px 0 0 10px;
    margin-right: -1px;
  }

  input {
    padding: 10px;
    min-height: 35px;
    font-size: clamp(10px, 4vw, 13px);
    outline: none;
    border: none;
    flex: 1;
    border-radius: 0 10px 10px 0;
  }

  button {
    padding: 10px;
    margin-left: 10px;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    background-color: ${(props) => (props.isDarkMode ? '#3e006f' : '#8e00ff')};
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  button:hover {
    background-color: ${(props) => (props.isDarkMode ? '#130121' : '#6400b3')};
  }
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #fff;

  .completed {
    font-size: 30px;
    cursor: pointer;
    transition: 0.4s;
  }
  .pending {
    font-size: 28px;
    margin-left: 1px;
    cursor: pointer;
    transition: 0.4s;
  }

  .completed:active,
  .pending:active {
    color: #4158c2;
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  p {
    text-decoration: ${(props) => props.lined};
    color: ${(props) => props.color};
  }

  .deleteBtn {
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    min-height: 20px;
    min-width: 20px;
  }

  .deleteBtn:hover {
    color: #f93d3d;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  border-top: 3px solid #fff;
  flex-wrap: wrap;
  gap: 5px;

  p {
    font-size: 10px;
    color: #fff;
    font-weight: 300;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    transition: 0.4s ease-in-out;
  }

  p:nth-child(4):hover {
    background: ${(props) => (props.isDarkMode ? '#5a0f94' : '#8e00ff')};
  }

  p:nth-child(5):hover {
    background: ${(props) => (props.isDarkMode ? '#941c1c' : '#f93d3d')};
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    color: ${(props) => (props.isDarkMode ? '#3e006f' : '#8e00ff')};
    color: #fff;
    font-weight: 700;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }

  button.active {
    color: ${(props) => (props.isDarkMode ? '#5a0f94' : '#8e00ff')};
  }

  button.active:hover {
    background-color: #fff;
  }
  button:hover {
    background: ${(props) => (props.isDarkMode ? '#5a0f94' : '#8e00ff')};
  }
`;

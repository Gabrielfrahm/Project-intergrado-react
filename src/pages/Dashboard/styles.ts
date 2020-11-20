import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    margin: 20px 0;
    width: 500px;
    text-align: center;
  }
  h1 {
    margin-bottom: 24px;
    font-size: 24px;
  }

  input {
    background: #dcd0c0;
    border-radius: 10px;
    padding: 8px;
    width: 100%;

    border: 2px solid #dcd0c0;
    color: #666360;

    display: flex;
    align-items: center;

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: #c0b283;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #f4f4f4;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#c0b283')};
    }
  }
  a {
    color: #c0b283;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2;

    &:hover {
      color: ${shade(0.2, '#c0b283')};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  background: #373737;
  color: #c0b283;
  height: 36px;
  flex: 1;
  justify-content: space-between;

  ul {
    display: flex;

    /* background: red; */

    align-items: center;
    p {
      display: inline;
      margin-left: 8px;
      color: #c0b283;
      font-size: 18px;
      font-weight: 500;
    }

    & + ul {
      margin-right: 16px;
    }
  }

  li {
    /* background: blue; */
    display: inline;

    list-style: none;
    margin-left: 16px;

    a {
      font-weight: 300;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: ${shade(0.2, '#373737')};
      }
    }
  }
`;

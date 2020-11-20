import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import Img_Fundo from '../../assets/SignIn-img.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-75px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
    }
    input {
      background: #dcd0c0;
      border-radius: 10px;
      padding: 16px;
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
  }
`;

export const BackgroundIMG = styled.div`
  flex: 1;
  background: url(${Img_Fundo}) no-repeat center;
  /* background-size: cover; */
`;

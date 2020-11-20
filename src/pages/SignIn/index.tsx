import React from 'react';
import { Link } from 'react-router-dom';
import { BsTools } from 'react-icons/bs';
import {
  Container,
  Content,
  BackgroundIMG,
  AnimationContainer,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h1>Tool Control</h1>
          <BsTools size={55} />
          <form action="/dashboard">
            <h1>Faça seu login</h1>
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <button type="submit">Entrar</button>
            <Link to="/">Esqueci minha senha</Link>
          </form>
        </AnimationContainer>
      </Content>
      <BackgroundIMG />
    </Container>
  );
};

export default SignIn;

import React from 'react';
import { BsTools } from 'react-icons/bs';
import { Container, Content, Nav } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Nav>
        <ul>
          <p>Cadastro :</p>
          <li>
            <a href="/">Clientes</a>
          </li>
          <li>
            <a href="/">Item</a>
          </li>
          <li>
            <a href="/">Fornecedores</a>
          </li>
          <li>
            <a href="/">Usuário</a>
          </li>
        </ul>
        <ul>
          <p>Serviços :</p>
          <li>
            <a href="/">Vendas</a>
          </li>
          <li>
            <a href="/">Agenda</a>
          </li>
          <li>
            <a href="/">Relatório</a>
          </li>
          <li>
            <a href="/">Funcionários</a>
          </li>
        </ul>
      </Nav>
      <Content>
        <form action="/ListItem">
          <h1>Cadastro de Item</h1>
          <BsTools size={20} style={{ marginBottom: 10 }} />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Marca" />
          <input type="text" placeholder="Modelo" />
          <input type="text" placeholder="Quantidade" />
          <input type="text" placeholder="Custo Unitário" />
          <input type="text" placeholder="Prazo de validade" />
          <input type="text" placeholder="Informação do fornecedor" />
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Dashboard;

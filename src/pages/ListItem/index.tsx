import React from 'react';
import { Container, Content, Nav } from './styles';

const ListItem: React.FC = () => {
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
        {/* <h1>Listagem de itens</h1> */}
        <div>
          <img
            src="https://a-static.mlcdn.com.br/210x210/pneu-aro-14-firestone-175-70r14-84t-f-600/magazineluiza/217920400/699857500070025af0fa06347a0638b7.jpg"
            alt=""
          />
          <p>
            <strong>categoria:</strong> Acessório
          </p>
          <p>
            <strong>modelo: </strong>X
          </p>
          <p>
            <strong>categoria:</strong> Pneu
          </p>
          <p>
            <strong>prazo de validade:</strong> 2 anos
          </p>
          <p>
            <strong>quantidade:</strong> 20
          </p>
          <p>
            <strong>custo:</strong> R$ 120,00
          </p>
          <p>
            <strong>descrição:</strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div>
          <img
            src="https://images-shoptime.b2w.io/produtos/01/00/img/35866/8/35866837_1GG.jpg"
            alt=""
          />
          <p>
            <strong>categoria:</strong> Acessório
          </p>
          <p>
            <strong>modelo: </strong>X
          </p>
          <p>
            <strong>categoria:</strong> Escapamento
          </p>
          <p>
            <strong>prazo de validade:</strong> 4 anos
          </p>
          <p>
            <strong>quantidade:</strong> 40
          </p>
          <p>
            <strong>custo:</strong> R$ 180,00
          </p>
          <p>
            <strong>descrição:</strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div>
          <img
            src="https://rs1.vteximg.com.br/arquivos/ids/235758-750-750/bloggif_5b780b3bc3a0f--1-.jpg?v=636701800851200000"
            alt=""
          />
          <p>
            <strong>categoria:</strong> Acessório
          </p>
          <p>
            <strong>modelo: </strong>X
          </p>
          <p>
            <strong>categoria:</strong> capacete
          </p>
          <p>
            <strong>prazo de validade:</strong> 1 anos
          </p>
          <p>
            <strong>quantidade:</strong> 44
          </p>
          <p>
            <strong>custo:</strong> R$ 180,00
          </p>
          <p>
            <strong>descrição:</strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/5Lf0LE7Fp_-CkzfltkCyO_Qo9N2P7i772HRDHZLDFC-9mzJpt4jyMHF06cNcp8rc-lwK_HU4redU3MyggvwizXXgx_vZUZwZMoa-tj7fSUh5NaxwpS90Das59yxG1zTZv42qTnoh9Q"
            alt=""
          />
          <p>
            <strong>categoria:</strong> Acessório
          </p>
          <p>
            <strong>modelo: </strong>X
          </p>
          <p>
            <strong>categoria:</strong> Vidro traseiro
          </p>
          <p>
            <strong>prazo de validade:</strong> 1 anos
          </p>
          <p>
            <strong>quantidade:</strong> 4
          </p>
          <p>
            <strong>custo:</strong> R$ 200,00
          </p>
          <p>
            <strong>descrição:</strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default ListItem;

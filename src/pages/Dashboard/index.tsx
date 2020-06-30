import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/25440346?s=460&u=3d1735d3e458b2efe84e33cfa799cca9912734f0&v=4"
            alt="Guilherme Novelleto"
          />
          <div>
            <strong>novelleto/GoStack</strong>
            <p>Bla bla bla</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

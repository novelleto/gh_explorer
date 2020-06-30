import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  max-width: 500px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 8px 0px 0px 8px;
    color: #3a3a3a;

    &::placeholder {
      color: #d9d9d9;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #a7e66e;
    border-radius: 0px 8px 8px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.22s;

    &:hover {
      background: ${shade(0.1, '#a7e66e')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #e1e8ed;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(8px);
    }

    & + a {
      margin-top: 16px;
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #f3952f;
  }
`;

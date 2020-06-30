import { createGlobalStyle } from 'styled-components';

import githubBg from '../assets/github-bg.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    margin-top: 10px;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #0e6ebe url(${githubBg}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto Slab, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px, 20px;
  }

  button {
    cursor: pointer;
  }
`;

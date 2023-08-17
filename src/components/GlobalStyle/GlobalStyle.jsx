import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import bg from 'images/bg.png';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

  }
  body {
    margin: ${p => p.theme.space[0]}px;
    font-family: ${p => p.theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.body};
    background-image: url(${bg});
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: ${p => p.theme.space[0]}px;
  }
    a {
    text-decoration: none;
    color: inherit;
  }
  ul {
      list-style: none;
      padding: ${p => p.theme.space[0]}px;
      margin: 0;
  }
  img {
      display: block;
      max-width: 100%;
      height: auto;
  }


`;

export default GlobalStyle;

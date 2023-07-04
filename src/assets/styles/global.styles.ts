import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme.styles';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:  ${baseTheme.colors.font};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  ul{
    margin: 0;
    padding-left: 0;
  }
  li {
  list-style-type:  none;
}
`;

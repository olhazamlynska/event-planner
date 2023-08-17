import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import LangProvider from 'components/context/LangProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/event-planner">
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

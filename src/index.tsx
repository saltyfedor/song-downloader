import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './Styles/styles';
import { Provider } from 'react-redux';
import { store } from './State/store';
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={mainTheme}>
          <Provider store={store}>
            <App />
          </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { 
  MuiThemeProvider, 
  CssBaseline,
  jssPreset,
  CssBaseLine 
} from "@material-ui/core";
import { create } from "jss"
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware} from "connected-react-router";
import styled from "styled-components";

export const MainStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  margin:0;
  padding:0;
`

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MainStyled>
        <Router history={history}/>
      </MainStyled>
    </MuiThemeProvider>
  </Provider>
);

export default App;
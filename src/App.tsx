import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useMiddleware from 'react-usemiddleware';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { Action } from './actions';
import Auth from './Auth';
import Home from './Home';
import { defaultState, reducer, State } from './reducer';

const logger = createLogger();
const middlewares = [thunk, logger];

export type Context = [State, React.Dispatch<Action>];
export const defaultContext: Context = [defaultState, (a: Action) => null];
export const AppCtx = createContext(defaultContext);

const App = () => {
  const context = useMiddleware(reducer, defaultState, middlewares);
  return (
    <AppCtx.Provider value={context} >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth/callback" component={Auth} />
        </Switch>
      </Router>
    </AppCtx.Provider>
  );
};

export default App;

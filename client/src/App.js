import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loader } from './components';
import AppRoutes from "./modules/AppRoutes";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            {AppRoutes.map(
              ({path, exact, component: Component}, index) => (
                <Route
                  key={index}
                  path={path}
                  exact={exact}
                  render={props => (
                      <Component {...props} />
                  )}
                ></Route>
              )
            )}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';

class RouterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          {
            this.state.routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.component}
                // render={
                //   props => (
                //     <route.component {...props} routes={route.routes} /> // pass the sub-routes down to keep nesting
                //   )
                // }
              />
            ))
          }
        </Switch>
      </Router>
    );
  }
}

export default RouterView;

import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from './routes';
import { fallbackRoute, renderRoute } from './RoutingService';
import ForemanSwitch from './ForemanSwitcher';

const AppSwitcher = () => (
  <ForemanSwitch>
    {routes.map(({ render, path, ...routeProps }) => (
      <Route
        path={path}
        key={path}
        {...routeProps}
        render={renderProps => renderRoute(render, renderProps)}
      />
    ))}
    <Route
      render={child => renderRoute(null, child, fallbackRoute)}
      key="default-route"
    />
  </ForemanSwitch>
);

export default AppSwitcher;

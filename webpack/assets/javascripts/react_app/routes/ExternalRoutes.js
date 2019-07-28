import { Route } from 'react-router-dom';
import React from 'react';
import { addGlobalFill } from '../components/common/Fill/GlobalFill';
import { renderRoute } from './RoutingService';

/**
 * Adds a plugin's routes into core
 * @param  {String} id  plugin's id - can be its name
 * @param  {Array}   routes an array that contains a plugin's routes
 */
export const registerRoutes = (id, routes) =>
  routes.map(({ render, path, beforeRendering = null, ...routeProps }, index) =>
    addGlobalFill(
      'routes',
      `${id}-${index}`,
      <Route
        path={path}
        key={path}
        {...routeProps}
        render={renderProps =>
          renderRoute(render, renderProps, beforeRendering)
        }
      />
    )
  );

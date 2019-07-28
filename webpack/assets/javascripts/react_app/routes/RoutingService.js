import { visit } from '../../foreman_navigation';

let currentPath = window.location.href;

/**
 * a Helper function for rendering a route
 * @param {Function} renderFn - a component's rendering function
 * @param {Object} props - routing props
 * @param {Function} beforeRenderingCallback - a callback to run before the rendering, if it returns false the rendering will terminate
 */
export const renderRoute = (
  renderFn,
  props,
  beforeRenderingCallback = () => true
) => {
  const {
    location,
    location: { pathname, search },
  } = props;
  if (!beforeRenderingCallback(location)) return null;
  removeRailsContent();
  location && updatePath(`${pathname}${search}`);
  return renderFn(props);
};

export const fallbackRoute = () => {
  const nextPath = window.location.href;
  if (currentPath !== nextPath) {
    updatePath(nextPath);
    return visit(nextPath);
  }
  return null;
};

const updatePath = newPath => {
  if (newPath) currentPath = newPath;
};

const removeRailsContent = () => {
  const railsContainer = document.getElementById('rails-app-content');
  if (railsContainer) railsContainer.remove();
};

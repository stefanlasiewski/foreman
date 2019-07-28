import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectComponentByWeight } from '../components/common/Slot/SlotSelectors';

export const ForemanSwitcher = ({ children, externalRoutes }) => {
  if (Object.keys(externalRoutes).length) {
    return <Switch>{externalRoutes.concat(children)}</Switch>;
  }
  return <Switch>{children}</Switch>;
};

// map state to props
const mapStateToProps = state => ({
  externalRoutes: selectComponentByWeight('routes'),
});

// export connected component
export default connect(mapStateToProps)(ForemanSwitcher);

ForemanSwitcher.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  externalRoutes: PropTypes.arrayOf(PropTypes.node),
};

ForemanSwitcher.defaultProps = {
  externalRoutes: [],
};

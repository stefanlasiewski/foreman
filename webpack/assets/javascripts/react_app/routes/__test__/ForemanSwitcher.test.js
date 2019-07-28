import React from 'react';
import { Route } from 'react-router-dom';
import { testComponentSnapshotsWithFixtures } from '@theforeman/test';
import { ForemanSwitcher } from '../ForemanSwitcher';

const children = {
  children: [<Route key="1" path="/path1" />, <Route key="2" path="path2" />],
};

const externalRoutes = [<Route key="3" path="/externalPath" />];

const fixtures = {
  'renders ForemanSwitcher with no external routes': {
    ...children,
  },
  'renders ForemanSwitcher with external routes': {
    ...children,
    externalRoutes,
  },
};
describe('ForemanSwitcher', () => {
  describe('rendering', () => {
    testComponentSnapshotsWithFixtures(ForemanSwitcher, fixtures);
  });
});

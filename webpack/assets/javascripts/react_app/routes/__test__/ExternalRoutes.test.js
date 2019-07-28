import { registerRoutes } from '../ExternalRoutes';
import store from '../../redux';

jest.unmock('../../redux');

const routes = [
  { path: 'path1', render: jest.fn() },
  { path: 'path12', render: jest.fn() },
];

describe('ExternalRoutes', () => {
  describe('rendering', () => {
    it('Addomg global routes', () => {
      registerRoutes('some-id', routes);
      expect(store.getState().extendable).toMatchSnapshot();
    });
  });
});

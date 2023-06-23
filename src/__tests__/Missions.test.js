import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Missions from '../components/missions/Missions';

it('Renders Missions', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/missions" element={<Missions />} />
          </Routes>
        </Router>
      </Provider>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Rockets from '../components/rockets/Rockets';

it('Renders Rockets', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Rockets />} />
          </Routes>
        </Router>
      </Provider>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

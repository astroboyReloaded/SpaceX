import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import MyProfile from '../components/myProfile/MyProfile';

it('renders My Profile', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/profile" element={<MyProfile />} />
          </Routes>
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

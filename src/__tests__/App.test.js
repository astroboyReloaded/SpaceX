import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/Store';
import App from '../App';

it('Renders App', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={Store}>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </Provider>
      </Router>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';

it('Renders Nav', () => {
  const tree = renderer
    .create(
      <Router>
        <Routes>
          <Route path="*" element={<Nav />} />
        </Routes>
      </Router>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

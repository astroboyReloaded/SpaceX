import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import MyProfile from './components/myProfile/MyProfile';
import Missions from './components/Missions';

const App = () => (
  <Routes>
    <Route path="/" element={<Nav />}>
      <Route index element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Route>
  </Routes>
);

export default App;

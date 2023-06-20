import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

const App = () => (
  <Routes>
    <Route path="/" element={<Nav />}>
      <Route index  element={<h1>Rockets</h1>}/>
      <Route path="/missions" element={<h1>Missions</h1>}/>
      <Route path="/profile" element={<h1>My Profile</h1>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Route>
  </Routes>
);

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<nav>Navbar</nav>}>
      <Route index  element={<h1>Rockets</h1>}/>
      <Route path="/missions" element={<h1>Missions</h1>}/>
      <Route path="/profile" element={<h1>My Profile</h1>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Route>
  </Routes>
);

export default App;

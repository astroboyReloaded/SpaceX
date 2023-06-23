import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../images/logo.png';

const routes = [
  {
    label: 'Rockets',
    route: '/',
  },
  {
    label: 'Missions',
    route: '/missions',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
];

const Nav = () => (
  <>
    <header className="mainHeader">
      <img className="appLogo" src={Logo} alt="App logo" />
      <h1 className="appTitle">Space Traveer&apos;s Hub</h1>
      <nav className="navBar">
        <ul className="navList">
          {routes.map((route) => (
            <li className="navListItem" key={route.route}>
              <NavLink to={route.route}>{route.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Nav;

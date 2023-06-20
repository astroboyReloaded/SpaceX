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
    <header>
      <img src={Logo} />
      <h1>Space Traveer's Hub</h1>
      <nav>
        <ul>
          {routes.map((route) => (
            <li>
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

export default Nav
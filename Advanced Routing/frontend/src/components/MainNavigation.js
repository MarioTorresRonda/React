import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {

  function setActiveClasses(isActive) {
    return isActive ? classes.active : undefined
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink 
              to=""
              className={({isActive}) => setActiveClasses(isActive)   } 
            > Home </NavLink>
          </li>
          <li>
            <NavLink 
            to="events"
            className={({isActive}) => setActiveClasses(isActive)   } 
            > Events </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function setActiveClasses(isActive) {
  return isActive ? classes.active : undefined
}

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink 
            to="."
            className={({isActive}) => setActiveClasses(isActive)   } 
            end
            >All Events</NavLink>
          </li>
          <li>
            <NavLink 
            to="new"
            className={({isActive}) => setActiveClasses(isActive)   } 
            >New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

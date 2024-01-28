import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function setActiveClasses(isActive) {
    return isActive ? classes.active : undefined
}

function MainNavigation() {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li class>
                    <NavLink 
                    to="/"   
                    className={({isActive}) => setActiveClasses(isActive)   } 
                > 
                Home
                </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/products"
                    className={({isActive}) => setActiveClasses(isActive) } > Products </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;
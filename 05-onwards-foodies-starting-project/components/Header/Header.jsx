import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./header.module.css"
import Image from "next/image";
import HeaderBackground from "./Background/HeaderBackground";
import NavLink from "./NavLink/NavLink";

export default function Header() {

    return <>
    <HeaderBackground />
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={logoImg} alt="header logo" priority/>
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink path="/meals" > Browse Meals </NavLink>
                </li>
                <li>
                    <NavLink path="/community" > Foodies Community </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
}
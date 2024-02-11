"use client";

import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css"
import Link from "next/link";

export default function NavLink({ path, children }) {
	const actualPath = usePathname();
	let navClass = classes.link;
	if ( actualPath.startsWith(path) ) {
		navClass += " " + classes.active;
	}
	return (
		<Link
			href={path}
			className={navClass}
		>
			{children}
		</Link>
	);
}

import MealsGrid from "@/components/Meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, creates{" "}
					<span className={classes.highlight}> by you </span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself, it is easy and fun!
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share"> Share your favorite recipe </Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}> Feching meals... </p>} >
					<Meals />
				</Suspense>
			</main>
		</>
	);
}

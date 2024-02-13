"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isFieldNil(field) {
	return !field && field.trim() === "";
}

export async function shareMeal( prevState, formData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	const invalidForm =
		isFieldNil(meal.title) ||
		isFieldNil(meal.summary) ||
		isFieldNil(meal.instructions) ||
		isFieldNil(meal.creator) ||
		isFieldNil(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		!meal.image ||
		meal.image.size === 0;

	if (invalidForm) {
		return {
			message: "Invalid input.",
		};
	}

	await saveMeal(meal);
	revalidatePath("/meals");
	redirect("/meals");
}

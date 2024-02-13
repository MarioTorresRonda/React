import fs from "node:fs";

import sql from "better-sqlite3";
const db = sql("meals.db");
import slugify from "slugify";
import xss from "xss";

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals where slug = ?").get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${extension}`;

	const publicFolder = "public";
	const fileRoute = `images/${fileName}`;

	const stream = fs.createWriteStream(`${publicFolder}/${fileRoute}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("Saving image failed!");
		}

		meal.image = `/${fileRoute}`;

		db.prepare(`
            INSERT INTO meals
            ( title, summary, instructions, creator, creator_email, image, slug )
            VALUES (          
                @title,
                @summary,
                @instructions,
                @creator,
                @creator_email ,
                @image,
                @slug
            )
        `).run(meal);
	});
}

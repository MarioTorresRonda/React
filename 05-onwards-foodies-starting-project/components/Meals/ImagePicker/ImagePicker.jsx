"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState();

	const imagePicker = useRef();

	function handleClickPickImage() {
		imagePicker.current.click();
	}

	function handleChangePickImage(event) {
		const file = event.target.files[0];
		if (!file) {
			return;
			setPickedImage(null);
		}

		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}> {label} </label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p> No image picked yet.</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt="the image selected by the user"
							fill
						/>
					)}
				</div>
				<input
					ref={imagePicker}
					className={classes.input}
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					onChange={handleChangePickImage}
                    required
				/>
			</div>
			<button
				className={classes.button}
				type="button"
				onClick={handleClickPickImage}
			>
				{" "}
				Pick an Image{" "}
			</button>
		</div>
	);
}

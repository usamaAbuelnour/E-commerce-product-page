import classes from "./SlideShow.scss";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import thumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/image-product-4-thumbnail.jpg";
import IconPrevious from "../UI/SVGs/IconPrevious/IconPrevious";
import IconNext from "../UI/SVGs/IconNext/IconNext";
import { useEffect, useState } from "react";

export default function SlideShow({
	clicked,
	lightBox,
	openLightBox,
	currentImage,
	setCurrentImage,
}: {
	clicked?: () => void;
	lightBox?: boolean;
	openLightBox?: () => void;
	currentImage: number;
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {

	const gallery = [product1, product2, product3, product4];
	const [thumbnails, setThumbnails] = useState([
		{
			value: thumbnail1,
			isActive: false,
		},
		{
			value: thumbnail2,
			isActive: false,
		},
		{
			value: thumbnail3,
			isActive: false,
		},
		{
			value: thumbnail4,
			isActive: false,
		},
	]);

	useEffect(() => {
		const thumbnailsClone = JSON.parse(JSON.stringify(thumbnails));
		thumbnailsClone.map(
			(thumbnail: { value: string; isActive: boolean }) =>
				(thumbnail.isActive = false)
		);

		switch (currentImage) {
			case 0:
				thumbnailsClone[currentImage].isActive = true;
				break;
			case 1:
				thumbnailsClone[currentImage].isActive = true;
				break;
			case 2:
				thumbnailsClone[currentImage].isActive = true;
				break;
			case 3:
				thumbnailsClone[currentImage].isActive = true;
				break;
		}

		setThumbnails(thumbnailsClone);
	}, [currentImage]);

	const previousImgae = (): void => {
		if (!currentImage) setCurrentImage(gallery.length - 1);
		else setCurrentImage((prev) => prev - 1);
	};

	const nextImage = (): void => {
		if (currentImage === gallery.length - 1) setCurrentImage(0);
		else setCurrentImage((prev) => prev + 1);
	};

	const selectImage = (thumbnail: string): void => {
		switch (thumbnail) {
			case thumbnail1:
				setCurrentImage(0);
				break;
			case thumbnail2:
				setCurrentImage(1);
				break;
			case thumbnail3:
				setCurrentImage(2);
				break;
			case thumbnail4:
				setCurrentImage(3);
				break;
		}
	};

	const styles = [classes.slideShow];
	if (lightBox) styles.push(classes.lightBox);

	return (
		<div className={styles.join(" ")} onClick={clicked}>
			<img
				onClick={openLightBox}
				className={classes.preview}
				src={gallery[currentImage]}
			/>

			<div className={classes.controllers}>
				<div className={classes.iconPrevious} onClick={previousImgae}>
					<IconPrevious />
				</div>
				<div className={classes.iconNext} onClick={nextImage}>
					<IconNext />
				</div>
			</div>
			<div className={classes.thumbnails}>
				{thumbnails.map((thumbnail) => (
					<div
						key={Math.random()}
						className={[
							classes.thumbnail,
							thumbnail.isActive ? classes.active : null,
						].join(" ")}
						onClick={() => selectImage(thumbnail.value)}
					>
						<img src={thumbnail.value} />
					</div>
				))}
			</div>
		</div>
	);
}

import SlideShow from "../../SlideShow/SlideShow";
import IconClose from "../SVGs/IconClose/IconClose";
import classes from "./LightBox.scss";

export default function LightBox({
	closeLightBox,
    lightBoxIsVisible,
	currentImage,
	setCurrentImage,
}: {
	closeLightBox: () => void;
    lightBoxIsVisible: boolean,
	currentImage: number;
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
    const styles = [classes.lightBox];
    if(!lightBoxIsVisible) styles.push(classes.close);
	return (
		<div className={styles.join(' ')}>
			<div className={classes.iconClose}>
				<IconClose clicked={closeLightBox} />
			</div>
			<SlideShow lightBox currentImage={currentImage} setCurrentImage={setCurrentImage} />
		</div>
	);
}

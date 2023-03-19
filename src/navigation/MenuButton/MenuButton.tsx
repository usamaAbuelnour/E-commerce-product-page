import classes from "./MenuButton.scss";
import iconMenu from "../../assets/icon-menu.svg";

export default function MenuButton({
	clicked,
}: {
	clicked: () => void;
}): JSX.Element {
	return (
		<div className={classes.menuButton}>
			<img src={iconMenu} onClick={clicked}/>
		</div>
	);
}

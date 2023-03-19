import IconClose from "../../UI/SVGs/IconClose/IconClose";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.scss";

interface SideDrawerProps {
	sideDrawerIsVisible: boolean;
	closeSideDrawer: () => void;
}

export default function SideDrawer({
	sideDrawerIsVisible,
	closeSideDrawer,
}: SideDrawerProps): JSX.Element {

  const styles = [classes.sideDrawer];

  if(sideDrawerIsVisible) styles.push(classes.open);

	return (
		<div className={styles.join(' ')}>
			<IconClose clicked={closeSideDrawer} />
			<NavItems />
		</div>
	);
}

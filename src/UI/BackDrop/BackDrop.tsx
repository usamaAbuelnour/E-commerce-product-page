import classes from "./BackDrop.scss";

interface BackDropProps {
	sideDrawerIsVisible: boolean;
	closeSideDrawer: () => void;
  lightBoxIsVisible: boolean;
}

export default function BackDrop({
	sideDrawerIsVisible,
	closeSideDrawer,
  lightBoxIsVisible
}: BackDropProps): JSX.Element {
  
  const styles = [classes.backDrop];

  if(sideDrawerIsVisible) styles.push(classes.open)
  if(lightBoxIsVisible) styles.push(classes.open)

	return <div className={styles.join(' ')} onClick={closeSideDrawer}></div>;
}

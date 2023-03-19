import { ReactNode } from "react";
import classes from "./Button.scss";

export default function Button({
	children,
	clicked,
}: {
	children: ReactNode;
	clicked?: () => void;
}): JSX.Element {
	return (
		<div className={classes.button} onClick={clicked}>
			{children}
		</div>
	);
}

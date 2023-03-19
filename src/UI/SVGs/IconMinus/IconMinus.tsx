import classes from "./IconMinus.scss";

const IconMinus = ({
	clicked,
	count,
}: {
	clicked: () => void;
	count: number;
}) => {
	const styles = [classes.iconMinus];
	if (!count) styles.push(classes.disabled);
	return (
		<svg
			width="12"
			height="4"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={styles.join(" ")}
			onClick={clicked}
		>
			<defs>
				<path
					d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
					id="a"
				/>
			</defs>
			<use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
		</svg>
	);
};

export default IconMinus;

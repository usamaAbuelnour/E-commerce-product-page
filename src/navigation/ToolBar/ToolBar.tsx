import IconCart from "../../UI/SVGs/IconCart/IconCart";
import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import classes from "./ToolBar.scss";
import iconAvatar from "../../assets/image-avatar.png";
import NavItems from "../NavItems/NavItems";

interface ToolBarProps {
	openSideDrawer: () => void;
	openCart: () => void;
	cartItemsCount: number;
}

export default function ToolBar(props: ToolBarProps): JSX.Element {
	return (
		<div className={classes.toolBar}>
			<MenuButton clicked={props.openSideDrawer} />
			<Logo />
			<div className={[classes.nav, classes.hide].join(" ")}>
				<NavItems />
			</div>
			<div className={classes.rightIcons}>
				<IconCart
					clicked={props.openCart}
					cartItemsCount={props.cartItemsCount}
					toolbar
				/>
				<div className={classes.avatar}>
					<img src={iconAvatar} />
				</div>
			</div>
		</div>
	);
}

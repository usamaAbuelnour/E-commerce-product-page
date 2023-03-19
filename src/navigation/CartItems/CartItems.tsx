import classes from "./CartItems.scss";
import itemImage from "../../assets/image-product-1-thumbnail.jpg";
import Button from "../../UI/Button/Button";
import IconDelete from "../../UI/SVGs/IconDelete/IconDelete";
import IconClose from "../../UI/SVGs/IconClose/IconClose";

export default function CartItems({
	cartItemsCount,
	cartIsVisible,
	closeCart,
	clearCart,
}: {
	cartItemsCount: number;
	cartIsVisible: boolean;
	closeCart: () => void;
	clearCart: () => void;
}) {
	const styles = [classes.cartItems];
	if (cartIsVisible) styles.push(classes.open);

	return (
		<div className={styles.join(" ")}>
			<h4 className={classes.heading}>
				Cart
				<IconClose
					clicked={closeCart}
				/></h4>
			<hr />

			<div className={classes.cartBody}>
				{cartItemsCount ? (
					<>
						<div className={classes.upperSection}>
							<div className={classes.itemImage}>
								<img src={itemImage} />
							</div>
							<p className={classes.itemDescription}>
								<span>Fall Limited Edition Sneakers</span>
								<span>
									$125.00 x {cartItemsCount}&nbsp;&nbsp;
									<strong style={{ color: "var(--very-dark-blue)" }}>
										${125 * cartItemsCount}.00
									</strong>
								</span>
							</p>
							<IconDelete clicked={clearCart} />
						</div>
						<Button clicked={closeCart}>Checkout</Button>
					</>
				) : (
					<p className={classes.emptyCart}>Your Cart is empty</p>
				)}
			</div>
		</div>
	);
}

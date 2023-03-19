import IconMinus from "../UI/SVGs/IconMinus/IconMinus";
import IconPlus from "../UI/SVGs/IconPlus/IconPlus";
import classes from "./ProductBody.scss";
import Button from "../UI/Button/Button";
import IconCart from "../UI/SVGs/IconCart/IconCart";

interface ProductBodyProps {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	addToCart: () => void;
}

export default function ProductBody({
	count,
	setCount,
	addToCart,
}: ProductBodyProps): JSX.Element {
	const add = (): void => setCount((prev) => prev + 1);
	const minus = (): void => setCount((prev) => prev - 1);
	return (
		<div className={classes.productBody}>
            <div className={classes.container}>
			<p className={classes.company}>SNEAKER COMPANY</p>

			<h1 className={classes.heading}>Fall Limited Edition Sneakers</h1>

			<p className={classes.description}>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they'll withstand everything the
				weather can offer.
			</p>

			<div className={classes.priceSet}>
				<h1 className={classes.priceAfter}>$125.00</h1>
				<span className={classes.discount}>50%</span>
				<del className={classes.priceBefore}>$250.00</del>
			</div>

			<div className={classes.footer}>
				<div className={classes.controllers}>
					<IconMinus clicked={minus} count={count} />
					<span style={{ fontWeight: "bold" }}>{count}</span>
					<IconPlus clicked={add} />
				</div>

				<Button clicked={addToCart}>
					<IconCart fill="white" />
					Add to cart
				</Button>
			</div>
            </div>
		</div>
	);
}

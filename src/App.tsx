import { useState } from "react";
import classes from "./App.scss";
import CartItems from "./navigation/CartItems/CartItems";
import SideDrawer from "./navigation/SideDrawer/SideDrawer";
import ToolBar from "./navigation/ToolBar/ToolBar";
import ProductBody from "./ProductBody/ProductBody";
import SlideShow from "./SlideShow/SlideShow";
import BackDrop from "./UI/BackDrop/BackDrop";
import LightBox from "./UI/LightBox/LightBox";

export default function App() {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const openSideDrawer = (): void => setSideDrawerIsVisible(true);
	const closeSideDrawer = (): void => setSideDrawerIsVisible(false);

	const [cartIsVisible, setCartIsVisible] = useState(false);
	const openCart = (): void => setCartIsVisible(true);
	const closeCart = (): void => setCartIsVisible(false);

	const [lightBoxIsVisible, setLightBoxIsVisible] = useState(false);
	const openLightBox = (): void => setLightBoxIsVisible(true);
	const closeLightBox = (): void => setLightBoxIsVisible(false);

	const [count, setCount] = useState(0);

	const [cartItemsCount, setCartItemsCount] = useState(0);
	const addToCart = (): void => setCartItemsCount(count);
	const clearCart = (): void => setCartItemsCount(0);

	const [currentImage, setCurrentImage] = useState(0);

	return (
		<div className={classes.app}>
			<SideDrawer
				sideDrawerIsVisible={sideDrawerIsVisible}
				closeSideDrawer={closeSideDrawer}
			/>

			<BackDrop
				sideDrawerIsVisible={sideDrawerIsVisible}
				closeSideDrawer={closeSideDrawer}
				lightBoxIsVisible={lightBoxIsVisible}
			/>

			<div className={classes.hide}>
				<SlideShow currentImage={currentImage} setCurrentImage={setCurrentImage} />
			</div>

			<CartItems
				cartItemsCount={cartItemsCount}
				cartIsVisible={cartIsVisible}
				closeCart={closeCart}
				clearCart={clearCart}
			/>

			<LightBox
				closeLightBox={closeLightBox}
				lightBoxIsVisible={lightBoxIsVisible}
				currentImage={currentImage} setCurrentImage={setCurrentImage}
			/>

			<div className={classes.container}>
				<ToolBar
					openSideDrawer={openSideDrawer}
					openCart={openCart}
					cartItemsCount={cartItemsCount}
				/>

				<div className={classes.wrapper}>
					<div className={classes.hidee}>
						<SlideShow openLightBox={openLightBox} 
						currentImage={currentImage} setCurrentImage={setCurrentImage}/>
					</div>

					<ProductBody
						count={count}
						setCount={setCount}
						addToCart={addToCart}
					/>
				</div>
			</div>
		</div>
	);
}

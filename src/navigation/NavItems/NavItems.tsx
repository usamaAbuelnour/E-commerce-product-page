import classes from './NavItems.scss';

export default function NavItems(): JSX.Element {
  return (
    <div className={classes.navItems}>
      <div>Collections</div>
      <div>Men</div>
      <div>Women</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  )
}

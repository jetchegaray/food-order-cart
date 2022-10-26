import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
// it will manage the toolbar and the image of the header, but a split you could also make. two compontnet instead of one

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table with food" />
      </div>
    </Fragment>
  );
};

export default Header;

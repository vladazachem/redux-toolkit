import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart_slice";
import classes from "./CartItem.module.css";

const CartItem = ({ id, title, quantity, totalPrice, price }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice ? totalPrice.toFixed(2) : "0.00"}{" "}
          <span className={classes.itemprice}>
            (${price ? price.toFixed(2) : "0.00"}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

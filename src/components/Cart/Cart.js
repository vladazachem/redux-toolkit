import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cartItems = useSelector(state => state.cart.items);

  if (!cartIsVisible) {
    return null;
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem 
          key={item.id}
          id={item.id}
          title={item.title}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
          price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

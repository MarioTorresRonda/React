import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'

const Cart = (props) => {


  const items = useSelector( (state) => state.cart.items );
  const shown = useSelector( (state) => state.cart.shown )

  return (
    <>
    { shown && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          { Object.values(items).map( (item) => 
            <CartItem item={ {...item} } />
          ) }
        </ul>
      </Card> )
    }
    </>
  );
};

export default Cart;

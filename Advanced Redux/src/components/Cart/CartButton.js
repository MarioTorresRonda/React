import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { UIActions } from '../../store/ui';

const CartButton = (props) => {

  const items = useSelector( (state) => state.cart.items );
  const dispatch = useDispatch();

  function handleToggleCart() {
    dispatch( UIActions.toggleShow() );
  }

  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{Object.values(items).length}</span>
    </button>
  );
};

export default CartButton;

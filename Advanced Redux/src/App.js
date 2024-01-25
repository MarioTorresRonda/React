import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.UI.notification)

  useEffect(() => {
    dispatch( fetchCartData() )
  }, [dispatch])

  useEffect(() => {
    //const fetchData = async () => {

      // dispatch(
      //   UIActions.showNotification({
      //     status: 'pending',
      //     title: 'loading',
      //     message: 'the resource is loading'
      //   })
      // )

      // const response = await fetch('https://react-94ae3-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      //   method: 'PUT',
      //   body: JSON.stringify(cart)
      // })

      // if (!response.ok) {
      //   throw new Error('');
      // }

      // dispatch(
      //   UIActions.showNotification({
      //     status: 'success',
      //     title: 'Success!',
      //     message: 'Sent cart data successfully'
      //   })
      // )
    //};

    if ( isInitial ) {
      isInitial = false;
      return;
    }

    if ( cart.changed ) {
      dispatch( sendCartData(cart) )
    }

    // fetchData().catch(error => {
    //   dispatch(
    //     UIActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sent cart data failed'
    //     })
    //   )
    // });
  }, [cart, dispatch])

return (
  <>
    { notification && <Notification 
      status={notification.status} 
      title={notification.title} 
      message={notification.message} /> 
    }
    <Layout>
      <Cart />
      <Products />
    </Layout>
  </>
); }

export default App;

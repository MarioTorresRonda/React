import { UIActions } from './ui';
import { cartActions } from './cart';

export const fetchCartData = () => {
    return async (dispatch) => {

        dispatch(
            UIActions.showNotification({
              status: 'pending',
              title: 'loading',
              message: 'the resource is loading'
            })
        );

        const fetchData = async () => {
            const response = await fetch('https://react-94ae3-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            
            if ( !response.ok ) {
                throw new Error('could not fetch cart data!')
            }
            
            const data = await response.json();

            return data;
        }

        try{
            const cartData = await fetchData()
            dispatch( cartActions.replaceCart( cartData ) )

            dispatch(
                UIActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'load cart data successfully'
                })
            )

        }catch{
            dispatch(
                UIActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'load cart data failed'
                })
            )
        }
    }
}

export const sendCartData = ( cartData ) => {
    return async (dispatch) => {
        dispatch(
            UIActions.showNotification({
              status: 'pending',
              title: 'loading',
              message: 'the resource is loading'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://react-94ae3-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartData)
            })
    
            if (!response.ok) {
                throw new Error('');
            }
    
            dispatch(
                UIActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'Sent cart data successfully'
                })
            )
        }

        sendRequest().catch(error => {
            dispatch(
              UIActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sent cart data failed'
              })
            )
        })

        
    }
};
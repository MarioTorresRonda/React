import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux'

const Products = (props) => {

  
  const items = useSelector( (state) => state.cart.items );

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test 1'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Test 2'
          price={8}
          description='This is a second product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;

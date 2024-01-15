import { useEffect, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { fetchMeals } from "./http";
import { useFetch } from './hooks/useFetch.js';
import CartContextProvider from "./store/cart-context.jsx";


function App() {

  const {
    isFetching, 
    fetchedData : meals,
    error,
    setFetchedData : setMeals
  } = useFetch( fetchMeals, [] );

  return (
    <CartContextProvider>
      <Header />
      <Meals meals={meals} />
    </CartContextProvider>
  );
}

export default App;

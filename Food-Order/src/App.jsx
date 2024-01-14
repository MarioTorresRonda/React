import { useEffect, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { fetchMeals } from "./http";
import { useFetch } from './hooks/useFetch.js';


function App() {

  const {
    isFetching, 
    fetchedData : meals,
    error,
    setFetchedData : setMeals
  } = useFetch( fetchMeals, [] );

  return (
    <>
      <Header />
      <Meals meals={meals} />
    </>
  );
}

export default App;

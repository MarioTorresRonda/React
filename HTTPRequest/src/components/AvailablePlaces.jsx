import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvaliblePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [ isFetching, setIsFetching ] = useState(false);
  const [ avaliblePlaces, setAvaliblePlaces ] = useState([])
  const [ error, setError ] = useState()

  useEffect( () => {
    async function fetchPlaces() {

      setIsFetching(true);

      try {
        
        const places = await fetchAvaliblePlaces();

        navigator.geolocation.getCurrentPosition( (position) => {
          const sortedPlaces = sortPlacesByDistance( 
            places, 
            position.coords.latitude,
            position.coords.altitude
          )
          setAvaliblePlaces( sortedPlaces );
          setIsFetching(false);
        } );

        
      } catch (error) {
        setError({ message: error.message || 'Could ot fetch places, please try again later' } );
        setIsFetching(false);
      }

    }
    fetchPlaces();
  }, [] )

if ( error ) {
  return <Error title="An error ocurred!" message={error.message} />
}

  return (
    <Places
      title="Available Places"
      places={avaliblePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

import { useSelector} from 'react-redux';
import { Fragment } from 'react';
import Counter from './components/Counter.js';
import Header from './components/Header.js';
import Auth from './components/Auth.js';
import UserProfile from './components/UserProfile.js';

function App() {
  const isAuth = useSelector( (state) => state.auth.isAuth );

  return (
    <Fragment>
      <Header/>
      { isAuth && <UserProfile/> }
      { !isAuth && <Auth/> }
      <Counter />
    </Fragment>
  );
}

export default App;

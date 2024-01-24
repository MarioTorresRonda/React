import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {

  const userName = useSelector( (state) => state.auth.userName );

  return (
    <main className={classes.profile}>
      <h2> {userName } </h2>
    </main>
  );
};

export default UserProfile;

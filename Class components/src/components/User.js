
import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {

  componentWillUnmount() {
    console.log( this.props.name + " Unmounted" )
  }


  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;

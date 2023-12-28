import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary.js'

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }

  componentDidUpdate( prevProps, prevState ) {
    if ( prevState.searchTerm !==  this.state.searchTerm ) {
      this.setState({filteredUsers :  this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) })
    }
  }

  componentDidMount() {
    this.setState( { filteredUsers : this.context.users } );
  }

  searchChangeHandler(event) {
    this.setState({searchTerm : event.target.value})
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
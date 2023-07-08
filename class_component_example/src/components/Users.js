import {Component } from 'react';
import User from './User';
import classes from './Users.module.css';

class Users extends Component{

    constructor(){
      super();
      this.state = {
        showUsers : false
      }
    }

  toggleUsersHandler = ()=>{
    this.setState(currentState => {
      return {showUsers : !currentState.showUsers};
    })
  }

  componentDidUpdate(){
    if(this.props.users.length===0){
      console.log("users length is 0");
      throw new Error("No users passed!");
    }
  }

  render(){

    const usersList = (
      <ul>
        {
        this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }

}

export default Users;

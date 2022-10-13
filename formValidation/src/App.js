import React, {useState} from 'react';
import Adduser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const[usersList, setUsersList] =useState([]);
  const addUserHandler = (userName, userAge) =>{
    setUsersList(
      (prevUsersList)=>{
        return [...prevUsersList,{name: userName, age: userAge, id: Math.random().toString()}];
      }
    );
  };
  return (
    <div>
      <Adduser onAddUser={addUserHandler}></Adduser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;

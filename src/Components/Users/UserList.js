import React from 'react';
//import AddUser from './Components/Users/AddUser';
import Card from '../UI/Card';


const UserList=(props) =>{
    console.log(props.UsersTab)
  return (
    <Card>
        <ul>
            {
                props.UsersTab.map(user=>( <li key={user.id}> {user.name} {user.age} years old</li>
                    ))
            }
           
        </ul>
    </Card>

  );
}

export default UserList;

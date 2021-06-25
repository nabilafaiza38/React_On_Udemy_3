
import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
function App() {

const [Users, setUsers] = useState([]);

  return (
    <div>
      <AddUser UsersTab={Users} setUsers={setUsers}/>
      <UserList UsersTab={Users} />
    </div>

  );
}

export default App;

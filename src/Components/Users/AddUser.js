import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import MyButton from '../UI/Button'
import Modal from '../UI/Modal'
import {useState} from  'react' 

const  AddUser=(props) =>{

  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [ErrorMsg, setErrorMsg] = useState('')
  const onNameChangeHandler=(event)=>{
    setName(event.target.value)
  }
  const onAgeChangeHandler=(event)=>{
    setAge(event.target.value)
  }

  const onClickAddHandle=(event)=>{
    
   
        event.preventDefault();
        if((Name.trim().length===0)||(Age.trim().length===0)){
          setErrorMsg("The input is empty");
          console.log(ErrorMsg)
         
          return;
        }
        if(+Age<1){
          setErrorMsg("invalid age");
         
          return;
        }
        
        props.setUsers([{id: Math.random().toString(),
        name:Name,age:+Age}, ...props.UsersTab])
        setName('');
        setAge('');
        setErrorMsg('');
    };
    const errorHandler=()=>{
      setErrorMsg('');
    }

  return (
    <div >
     {ErrorMsg && <Modal title="Oups ! an error occured" message={ErrorMsg} onConfirme={errorHandler}></Modal>} 
   
      <Card className={classes.input}>
      <form onSubmit={onClickAddHandle}>
          <label htmlFor="name">Name:</label>
          <input onChange={onNameChangeHandler} type="text" id="name" value={Name}></input>
          <label htmlFor="age">Age:</label>
          <input onChange={onAgeChangeHandler} type="number" id="age" value={Age}></input>
          <MyButton  type="submit" >Add User</MyButton>
          
      </form>
    </Card>
    </div>
    );
}

export default AddUser;

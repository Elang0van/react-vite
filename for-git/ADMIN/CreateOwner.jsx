import InputTag from "../tags/inputTag";
import {useContext, useState } from "react";
import { AppContext } from "../App";



  function CreateOwner(){

    const{createUser}=useContext(AppContext)
      const initialState={
        username:"",
        password:"",
        email:""
      }
     const [user,setUser]=useState(initialState)
    //Admin page

     function handleChange(event){
      const{name,value}=event.target;
      setUser({...user,[name]:value})
     }

    return(
             <form onSubmit={(e)=>{
            e.preventDefault()
            console.log("user" + JSON.stringify(user,null,2))
            createUser(user)
            setUser(initialState)
        }}>
          
           <InputTag onChange={handleChange} names="create username" name="username" value={user.username} />
           <InputTag onChange={handleChange} names="create password" name="password" value={user.password}/>
           <InputTag onChange={handleChange} names="enter email" name="email" value={user.email}/>

           <button>create</button>
        </form>
    )
  }

  export default CreateOwner;
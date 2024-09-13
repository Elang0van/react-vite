import { useNavigate } from "react-router-dom";
import InputTag from "../tags/inputTag";
import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

function Login() {
    const {userLogin}=useContext(AppContext)
     const initialLog={username:"",password:""}
     
    const [user,setUser]=useState(initialLog) 
    const navigate= useNavigate()

    function handleChange(event){
        const{name,value}=event.target;

        setUser({...user,[name]:value})


       }
  

    return (
        <>
          
            <form onSubmit={(e) => {
         e.preventDefault()
         console.log(user)
          const finded=userLogin(user.username,user.password)
          setUser(initialLog)
         
                if (finded) {
                    navigate('/dashboard')
                   }
                   else{
                    console.log("login failed")
                    }
            }}>
                <InputTag names={"User name"} name={"username"} onChange={handleChange} value={user.username}/>
                <InputTag names={"Password"} name={"password"} onChange={handleChange} value={user.password}/>

                <button>Login</button>
            </form>

        </>
    )
}

export default Login;
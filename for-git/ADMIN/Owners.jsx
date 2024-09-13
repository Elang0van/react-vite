
/// table 

import { AppContext } from "../App"
import { useContext } from "react"

function  Owners (){
const {users} = useContext(AppContext)


    return(

        <>
        <h1>Table</h1>
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                </tr>

            </thead>
            <tbody>
            {users.map((user)=>(
               <tr key={user.userId}>
                <td>{user.userId}</td>
               <td>{user.username}</td>
               <td>{user.password}</td>
               <td>{user.email}</td>
           </tr>
            ))}
                
            </tbody>
        </table>
    </>
    )
} 

export default Owners;
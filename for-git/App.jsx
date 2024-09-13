import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createContext, useState } from 'react'
import './App.css'
import Login from './LOGIN/logIn';
import Admin from './ADMIN/Admin';





export const AppContext = createContext()

function App() {

  const dummiUsers = [
    { userId: "4e73d1bd7fce", username: "elango", password: "ace002", email: "ace02@gamil.com", type: 'admin' },
    { userId: "29fff8ab3f9e", username: "panneer", password: "ace", email: "ace02@gamil.com", type: 'owner' },
    { userId: "4bf929b1df0b", username: "elang", password: "ace02", email: "ace02@gamil.com", type: 'owner' }
  ]

   const dummiProduct = [
    { productId: 1, productName: "realme", userId: 1, price: 15000, stock: 200 },
    { productId: 2, productName: "poco", userId: 2, price: 13000, stock: 220 }
  ]
  const [users, setUsers] = useState(dummiUsers)
  const [products, setProducts] = useState(dummiProduct)

  

  function userLogin(Username, Password) {
    const finded = users.find(user=>user.username===Username && user.password===Password && user.type==='admin')
    console.log(finded)
    return finded
  }

  function productCreate(pro) {
    setProducts([...products, pro])
  }

  function createUser(user) {
    user.userId = crypto.randomUUID().substr(24);

    setUsers((pre) => [...pre, user])
  }

  return (
    <>
      <AppContext.Provider value={{ createUser, users, productCreate, products ,userLogin}}>
        <Admin />     
      </AppContext.Provider>
    </>
  )
}

export default App

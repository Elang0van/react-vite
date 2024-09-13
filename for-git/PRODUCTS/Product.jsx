

import {useContext, useState } from "react";
import { AppContext } from "../App";


  function Product(){
    const{products}=useContext(AppContext)

         return(
        <table>
            <thead>
                <tr>
                    <th>ProductId</th>
                    <th>Product Name</th>
                    <th>UserId</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>

            </thead>
            <tbody>
            {products.map((pro)=>(
               <tr key={pro.productId}>
                <td>{pro.productId}</td>
               <td>{pro.productName}</td>
               <td>{pro.userId}</td>
               <td>{pro.price}</td>
               <td>{pro.stock}</td>
           </tr>
            ))}
            </tbody>
        </table>
    )
  }

  export default Product;
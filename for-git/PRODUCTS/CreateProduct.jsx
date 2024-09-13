import {useContext, useState } from "react";
import { AppContext } from "../App";
import InputTag from "../tags/inputTag";


function CreateProduct(){

const{productCreate}=useContext(AppContext)
const initialState={
   productName:"",
   price:"",
   stock:""
}
const [product,setProduct]=useState(initialState)
//Admin page

function handleChange(event){
const{name,value}=event.target;
setProduct({...product,[name]:value})
}

return(
     <form onSubmit={(e)=>{
      e.preventDefault()
      console.log("user" + JSON.stringify(product,null,2))
      productCreate(product)
      setProduct(initialState)
  }}>
    
     <InputTag onChange={handleChange} names="create Productname" name="productName" value={product.productName} />
     <InputTag onChange={handleChange} names="price" name="price"                 value={product.price}/>
     <InputTag onChange={handleChange} names="Stock" name="stock"                  value={product.stock}/>

     <button>create</button>
  </form>
)

}

export default CreateProduct;
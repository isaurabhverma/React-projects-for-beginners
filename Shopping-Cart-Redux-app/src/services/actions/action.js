import { ADD_TO_CART } from "../constrains"

const addTocart = (data)=>{
    return{
        Type : ADD_TO_CART,
        data : data
    }

}
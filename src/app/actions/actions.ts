import { Product } from "@/types/product";

export const addTOCart=( product : Product )=>{
const cart : Product[] = JSON.parse(localStorage.getItem('')|| '[]' )
const existingProductIndex = cart.findIndex(items => items._id == product._id )
 if(existingProductIndex > -1){
    cart[existingProductIndex].quantity += 1      
 }
 else{
     cart.push({
        ...product,quantity : 1
     })
 }

 localStorage.setItem('cart',JSON.stringify(cart))
}

    export const removeFromCart = (productId: string )=>{
        let cart :Product[]= JSON.parse(localStorage.getItem("cart") || '[]'   )
        cart = cart.filter(items =>items._id !== productId )
        localStorage.setItem('cart',JSON.stringify(cart)) 
    }

    export const updateCart = (productId :string, type:number )=>{

        let cart :Product[] =JSON.parse(localStorage.getItem('cart') || '[]')
        const productIndex = cart.findIndex(items => items._id == productId)
        if(productIndex > -1){
            cart[productIndex].quantity = type
            localStorage.setItem('cart',JSON.stringify(cart))


        }
    }


    export const getCart = (    ):Product[] => {
        return JSON.parse(localStorage.getItem('cart')||'[]')
    }
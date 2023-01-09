// guardar el carrito del usuario autenticado

import React, { createContext,useState, useEffect } from "react";
import Swal from 'sweetalert2'

const CartContext=createContext()


const CartProvider=({children})=>{

    const [cart, setCart]=useState([]);
    const [total, setTotal]=useState({})
    const addProduct=(product, amount)=>{
        const isProductExists=cart.find(element=>element.id===product.id)
        if (isProductExists!==undefined) {
            updateAmountProductExists(product.id, amount)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 500,
            })
            
            Toast.fire({
                icon: 'success',
                title: 'Product added to your cart'
            })
        }
        else{
            product.amount=amount
            setCart([...cart, product])
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 500,
            })
            
            Toast.fire({
                icon: 'success',
                title: 'Product added to your cart'
            })
        }
        
    }
    const removeProduct=(id)=>{
        Swal.fire({
            title: 'Do you want to remove this product?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setCart([...cart].filter(element=>element.id!==id))
            } 
          })
    }
    const updateAmount=(id, amount)=>{
        // que se actualice la cantidad del proudcto si ya esta en el carrito
        //update amount only if the product exists in the cart

        const tempCart=[...cart]
        const product=tempCart.find(element=>element.id===id)
        product["amount"]=amount;
        setCart(tempCart)
    }

    const updateAmountProductExists=(id, amount)=>{
        const tempCart=[...cart]
        const product=tempCart.find(element=>element.id===id)
        product["amount"]+=amount;
        setCart(tempCart)
    }

    const getTotal=()=>{
        // aquí estaba el error xd
        const subTotal=cart.reduce((acc, element)=>acc+(element.price*element.amount), 0)
        setTotal({
            subTotal,
            Total:subTotal+subTotal*0.16
        })
    }

    useEffect(() => {
        getTotal()
    }, [cart]);

    const data={
        cart,
        total,
        addProduct,
        removeProduct,
        updateAmount,
        getTotal
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}

export default CartContext
// guardar el carrito del usuario autenticado

import React, { createContext,useState, useEffect } from "react";

const CartContext=createContext()


const CartProvider=({children})=>{

    const [cart, setCart]=useState([]);
    const [total, setTotal]=useState({})
    const addProduct=(product, amount)=>{
        product.amount=amount
        setCart([...cart, product])
    }
    const removeProduct=(id)=>{
        setCart([...cart].filter(element=>element.id!==id))
    }
    const updateAmount=(id, amount)=>{
        // que se actualice la cantidad del proudcto si ya esta en el carrito
        //update amount only if the product exists in the cart

        const tempCart=[...cart]
        const product=tempCart.find(element=>element.id===id)
        product["amount"]=amount;
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
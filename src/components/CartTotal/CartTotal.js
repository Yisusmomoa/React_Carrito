import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../contexts/CartContext'

export const CartTotal = () => {
    
    const {total, cart, getTotal}=useContext(CartContext)
    // const [totalCart, setTotalCart]=useState(total)

    // useEffect(() => {
    //     getTotal()
    // }, [cart]);
  return (
    <div>
        <p>{total.subTotal}</p>
        <p>{total.Total}</p>
    </div>
  )
}

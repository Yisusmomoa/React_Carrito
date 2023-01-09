import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import styled from 'styled-components'

export const CartTotal = () => {
    
    const {total}=useContext(CartContext)
    // const [totalCart, setTotalCart]=useState(total)

    // useEffect(() => {
    //     getTotal()
    // }, [cart]);
  return (
    <ContainerCartTotal>
        <ContainerTextoCartTotal>
          <h4>SubTotal: </h4>
          <h4>{total.subTotal}</h4>
        </ContainerTextoCartTotal>

        <ContainerTextoCartTotal>
          <h4>Total: </h4>
          <h4>{total.Total}</h4>
        </ContainerTextoCartTotal>

        <ButtonCheckout>Checkout</ButtonCheckout>
    </ContainerCartTotal>
  )
}

const ContainerCartTotal=styled.div`
  display:grid;
  grid-template-rows:50px 50px 50px;
  grid-template-columns:100%;
  width:55%;
  height:auto;
  margin-left:auto;
  justify-items: end;
  padding-bottom:1rem;
`
const ContainerTextoCartTotal=styled.div`
  display:flex;
  width:100%;
  justify-content: space-around;

`
const ButtonCheckout=styled.button`
  border-radius:25px;
  padding:15px 45px;
  text-align: center;
  background-color:transparent;
  border:2px solid #7e7e80;
  cursor:pointer;
  margin-right:7rem;
  margin-top:0.5rem;
  :hover{
    background-color:#7e7e80;
    border:2px solid #fff;
    color:#fff;
  } 
`
import React, { Fragment, useContext, useEffect } from 'react';
import styled from 'styled-components';
import CartContext from '../contexts/CartContext';
import { ProductRowCart } from '../components/ProductRowCart/ProductRowCart';
import { ProductListCart } from '../components/ProductListCart/ProductListCart';
import { CartTotal } from '../components/CartTotal/CartTotal';

const Carrito = () => {
    const {cart, removeProduct, updateAmount}=useContext(CartContext)
    
    return (
        <>
        <ContainerProductList>
            {
                cart.map((element)=>{
                    return(<>
                        <ProductRowCart 
                            key={element.id} 
                            product={element} 
                            removeProduct={removeProduct}
                            updateAmount={updateAmount}
                            ></ProductRowCart>
                        <hr/>
                    </>)
                })
            }
        </ContainerProductList>
        <CartTotal ></CartTotal>
        </>
    );
}

const ContainerProductList=styled.div`
    width:90%;
    box-sizing: border-box;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
    border-radius:7px;
    text-align:center;

    margin:0 auto;
    margin-top:2rem;
    height: 55vh;
    overflow-x: hidden;
    overflow-y: auto;
`

export default Carrito;

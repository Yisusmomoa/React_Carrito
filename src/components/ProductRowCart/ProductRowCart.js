import React, {useState} from 'react'
import styled from 'styled-components'
import { BsFillXCircleFill } from "react-icons/bs";
import { CartTotal } from '../CartTotal/CartTotal';

export const ProductRowCart = ({product, removeProduct, updateAmount}) => {
  const [amount, setAmount]=useState(product.amount)
  const increaseAmount=()=>{
    setAmount(amount+1)
    updateAmount(product.id, amount+1)
  }
  const decrementAmount=()=>{
    setAmount(amount-1)
    updateAmount(product.id, amount-1)
  }

  return (
      <ContainerProductRow>
        <BsFillXCircleFill size={30} color='red' cursor={'pointer'} onClick={()=>removeProduct(product.id)}/>
        <ImgProductRow src={product.images[0]} alt={product.title}/>
        <InfoProductRow>
          <p><b>Product:</b> {product.title}</p>
          <p><b>Category:</b> {product.category["name"]}</p>
          <p><b>Price:</b> {product.price}</p>
        </InfoProductRow>
        <ContainerCountProds>
                      <ButtonCountProds onClick={()=>decrementAmount()}>-</ButtonCountProds>
                      <InputCountProds type='number' value={amount} 
                        min='1' max='2' onChange={(ev)=>setAmount(ev.target.value)}></InputCountProds>
                      <ButtonCountProds onClick={()=>increaseAmount()}>+</ButtonCountProds>
        </ContainerCountProds>
        <div>
          ${amount*product.price}
        </div>
        
      </ContainerProductRow>
  )
}

const ContainerProductRow=styled.div`
  display:flex;
  box-sizing: border-box;
  border-radius:7px;
  text-align:center;
  margin:0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width:auto;
`

const ImgProductRow=styled.img`
    width:150px;
    height:10%;
    border-radius:2px;
    margin:0;
    padding:0;
    box-sizing:border-box;
    
`

const InfoProductRow=styled.div`
  display:flex;
  flex-direction:column;
  height:auto;
`



const ContainerCountProds=styled.div`
    display:flex;
    
`
const InputCountProds=styled.input`
  padding: 8px 16px;
    text-align: center;
    font-size: 16px;
`
const ButtonCountProds=styled.button`
    border:none;
    background-color:black;
    color:white;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    cursor:pointer;
    border-radius:2px;
`
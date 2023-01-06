
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {BsFillCartFill} from 'react-icons/bs'

const CardWrapper=styled.div`
  display:flex;
  flex-direction:column;
  width:25%;
  height:auto;
  box-sizing: border-box;
  margin-left:2rem;
  margin-right:2rem;
  margin-bottom:2rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
  border-radius:7px;
  padding-bottom:1rem;
  text-align:center;
  a:-webkit-any-link {
        text-decoration: none;
        color: black;
        cursor: pointer;
        font-size:17px;
        text-align: center;
    }
`
const CardImg=styled.img`
  width:100%;
  height:300px;
  display:block;
  margin:0 auto;
`
const CardInfo=styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;

`
const CardInfoButtonAddCart=styled.button`
  border-radius:25px;
  padding:7px 35px;
  text-align: center;
  background-color:transparent;
  border:2px solid #7e7e80;
  cursor:pointer;
  
  :hover{
    background-color:#7e7e80;
    border:2px solid #fff;
    color:#fff;
  } 
`
export const ProductCard = ({product}) => {
  return (
    <CardWrapper>
      <Link to={`/products/${product.id}`}>
        <CardImg src={product.images[0]} alt={product.title}/>        
          <h2>{product.title}</h2>
          <CardInfo>
            <h4>${product.price}</h4>
            <CardInfoButtonAddCart>
              <span>Add to cart</span>
              <BsFillCartFill/>
            </CardInfoButtonAddCart>
            {/* agregear icono de ecarrito */}
          </CardInfo>
        </Link>
    </CardWrapper>
  )
}



/*
span{
    cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  }
  span:after{
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  :hover span{
    background-color: green;
  }


*/
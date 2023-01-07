import React from 'react'
import styled from 'styled-components';
const ImgProductCarrousel=styled.img`
    width:50%;
    object-fit:cover;
    height:75%;
    margin:0 15px 0 15px;
    overflow:hidden;
    cursor:pointer;
`
export const ProductImgCarrousel = ({srcImg, titleImg, onChangeImg}) => {
  return (
    <ImgProductCarrousel src={srcImg} alt={titleImg} onClick={(ev)=>onChangeImg(ev.target.src)}>

    </ImgProductCarrousel>
  )
}

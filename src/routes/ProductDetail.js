import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductByIdAction } from '../actions/GetProductById';
import styled from 'styled-components';
import {BsFillCartFill} from 'react-icons/bs'
import { ProductImgCarrousel } from '../components/ProductImgCarrousel/ProductImgCarrousel';

const Container=styled.div`
    
    display:grid;
    height: 80vh;
    width:65%;
    grid-template-rows:100%;
    grid-template-columns:50% 50%;
    box-sizing: border-box;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
    border-radius:7px;
    text-align:center;

    margin:0 auto;
    margin-top:2rem;
   
    align-items: center;
    justify-items: center;
`
const ContainerImgs=styled.div`
    width:auto;
    height:90%;
    display:flex;
    margin-bottom:0.2rem;
    flex-direction:column;
    margin-left:0.4rem;
`
const ContainerImgsProds=styled.div`
    width:auto;
    height:20%;
    display:flex;
    background-color:white;
    justify-content: center;
    align-items: center;
    border:1px solid black;

`
const ImgProduct=styled.img`
    width:100%;
    object-fit:fill;
    height:100%;
`
const ContainerInfo=styled.div`
    width:auto;
    height:60%;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;

`
const ContainerButtonAddCart=styled.button`
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
const ProductDetail = () => {
    const params=useParams()
    const [product, setProduct] = useState({});
    const [loading, setLoading]=useState(true)
    const [image, setImage]=useState("");

    const getProduct=async ()=>{
        const data=await getProductByIdAction(params.id)
        setProduct(data)
        setImage(data.images[0])
        // product.images[0]
        setLoading(false)
    }
    const handleClickImg=(src)=>{
        setImage(src)
    }
    
    useEffect(() => {
        getProduct()
    }, [params.id]);

    if(loading){
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <Container>
            
            <ContainerImgs>
                <ImgProduct src={image} alt={product.title}/>
                <ContainerImgsProds>
                    {
                        product.images.map(
                            (element, index)=> <ProductImgCarrousel key={index} onChangeImg={handleClickImg}
                            srcImg={element} titleImg={product.title}/>)
                    }
                </ContainerImgsProds>
            </ContainerImgs>
            <ContainerInfo>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <h6>{product.description}</h6>
                <Link>Categoria: {product.category.name}</Link>
                <ContainerButtonAddCart>Add to cart <BsFillCartFill/></ContainerButtonAddCart>
            </ContainerInfo>
        </Container>
    );
}




export default ProductDetail;

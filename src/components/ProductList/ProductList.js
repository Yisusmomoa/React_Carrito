
import React,{ useState, useEffect } from 'react';
import { getProductsAcction } from '../../actions/GetProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import styled from 'styled-components';

const ContainerProductList=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    height: 100vh;
    margin: 0 auto;
    margin-top:2rem;
    justify-content: center;
    align-items: center;
    
`

const ProductList = () => {
    const [listProducts, setListProducts] = useState([]);
    // const [offset, setOffset]=useState(0)
    let offset=0
    const fetchData=async()=>{
        console.log(offset)
        try {
            await getProductsAcction(offset)
            .then(data=>{
                setListProducts(listProducts=>[...listProducts, ...data])
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleScroll=(ev)=>{
        const top=ev.target.documentElement.scrollTop
        const win=window.innerHeight
        const height=ev.target.documentElement.scrollHeight
        // console.log("Top",ev.target.documentElement.scrollTop)
        // console.log("Win",window.innerHeight)
        // console.log("height",ev.target.documentElement.scrollHeight)
        if(win+top+1>height){
            offset+=10
            fetchData()
        }
    }

    useEffect(() => {
        fetchData()
        // offset+=10;
        window.addEventListener('scroll', handleScroll)
        return ()=>window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <ContainerProductList>
            {listProducts.map(element=>(
                // <p key={element.id}>{element.title}</p>
                <ProductCard key={element.id} product={element}></ProductCard>
            ))}
            {
                listProducts.length<1&&<h1>Loading</h1>
            }
        </ContainerProductList>
    );
}
/*
{listProducts.map(element=>(
                // <p key={element.id}>{element.title}</p>
                <ProductCard key={element.id} product={element}></ProductCard>
            ))}

*/
export default ProductList;

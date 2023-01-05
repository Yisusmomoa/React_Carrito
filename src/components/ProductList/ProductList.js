
import React,{ useState, useEffect } from 'react';
import { getProductsAcction } from '../../actions/GetProducts';
import { ProductCard } from '../ProductCard/ProductCard';
const ProductList = () => {
    const [listProducts, setListProducts] = useState([]);
    // const [offset, setOffset]=useState(0)
    let offset=0
    const fetchData=async()=>{
        try {
            const data=await getProductsAcction(offset)
            setListProducts(listProducts=>[...listProducts, ...data])
            
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
            fetchData()
            
        }
    }

    useEffect(() => {
        fetchData()
        offset+=10;
        window.addEventListener('scroll', handleScroll)
    }, []);


    return (
        <div>
            {
                listProducts.length<1&&<h1>Loading</h1>
            }
            {listProducts.map(element=>(
                // <p key={element.id}>{element.title}</p>
                <ProductCard key={element.id} product={element}></ProductCard>
            ))}
        </div>
    );
}

export default ProductList;

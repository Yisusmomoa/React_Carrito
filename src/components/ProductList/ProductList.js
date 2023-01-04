
import React,{ useState, useEffect } from 'react';
import { getProductsAcction } from '../../actions/GetProducts';
import { ProductCard } from '../ProductCard/ProductCard';
const ProductList = () => {
    const [listProducts, setListProducts] = useState([]);
    const fetchData=async()=>{
        const data=await getProductsAcction()
        setListProducts(data)
    }
    useEffect(() => {
        fetchData()
        .catch(console.error)
    }, []);

    return (
        <div>
            {listProducts.map(element=>(
                // <p key={element.id}>{element.title}</p>
                <ProductCard key={element.id} product={element}></ProductCard>
            ))}
        </div>
    );
}

export default ProductList;

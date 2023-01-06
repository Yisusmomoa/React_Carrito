import React, { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByIdAction } from '../actions/GetProductById';
import styled from 'styled-components';
const ProductDetail = () => {
    const params=useParams()
    const [product, setProduct] = useState({});
    const getProduct=async ()=>{
        const data=await getProductByIdAction(params.id)
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [params.id]);
    return (
        <div>
            {/* mostrar los detalles de un produccto */}
            <h1>ProductDetail</h1>
            <p>{product.title}</p>
        </div>
    );
}

export default ProductDetail;

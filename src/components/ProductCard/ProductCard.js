import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
      <h1>{product.title}</h1>
      <p>{product.id}</p>
      <hr/>
    </Link>
  )
}

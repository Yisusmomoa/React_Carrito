import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
      <p>{product.title}</p>
    </Link>
  )
}

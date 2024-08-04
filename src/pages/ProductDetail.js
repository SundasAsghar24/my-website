import React from 'react';
import { productsData } from '../data/products';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  let query = useParams();
  console.log(query);

  const {slug} = query;

  let product = productsData.find(p => p.slug == slug);

  return (
    <>
    <h1>Product Detail </h1>
    <h2> ID = {product.id}</h2>
    <h2> Title = {product.title}</h2>
    <h2> Price = Rs. {product.price}</h2>
    </>
  )
}

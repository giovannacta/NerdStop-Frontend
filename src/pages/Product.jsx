import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductHeader from '../components/ProductHeader'
import ProductView from '../components/ProductView'
import ProductDetails from '../components/ProductDetails'

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e) => e.id === Number(productId))
  if(!product) {
    return <div>Product not found!</div>
  }
  
  return (
    <section className='max_padd_container py-28'>
      <div>
        <ProductHeader product={product} />
        <ProductView product={product} />
        <ProductDetails />
      </div>
    </section>
  )
}

export default Product
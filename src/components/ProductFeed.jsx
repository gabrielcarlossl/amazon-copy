import React from 'react'
import Product from './Product'



function ProductFeed({ products }) {

    const id_1 = Math.floor(Math.random() * 100)
    const id_2 = Math.floor(Math.random() * 50)

    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>



            {products.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
                <Product key={id} title={title} price={price} description={description} category={category} image={image} ></Product>

            ))}

            <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />

            <div className='md:col-span-2'>

                {products.slice(4, 5).map(({ id, title, price, description, category, image, rating }) => (
                    <Product key={id_1 } title={title} price={price} description={description} category={category} image={image} ></Product>

                ))}

            </div>

            {products.slice(5, products.length).map(({ id, title, price, description, category, image, rating }) => (
                <Product key={id_2 + Math.random()} title={title} price={price} description={description} category={category} image={image} ></Product>

            ))}

        </div>
    )
}

export default ProductFeed
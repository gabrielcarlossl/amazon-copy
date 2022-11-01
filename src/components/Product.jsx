import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from "@heroicons/react/solid"
//import Currency from 'react-currency-formatter'
import CurrencyFix from './CurrencyFix';

import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice'

function Product({ id, title, price, description, category, image }) {

    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)

    const [hasPrime] = useState(Math.random() < 0.5)

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = { id, title, price, rating, description, category, image, hasPrime }
        
        // envia o produto como uma action para o Redux 
        dispatch(addToBasket(product))
    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>

            <p className='absolute top-2 right-2 text-xs italic '>{category}</p>

            <Image src={image} height={200} width={200} objectFit='contain'></Image>

            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500'></StarIcon>
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <CurrencyFix price={price}></CurrencyFix>
                {/* using the react-currency-formatter <Currency quantity={price} currency='BRL'></Currency> */}
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src='https://links.papareact.com/fdw'></img>
                    <p className='text-xs text-gray-500'>Frete Grátis</p>
                </div>
            )}

            <button onClick={addItemToBasket} className='mt-auto button'>Adicionar ao Carrinho</button>
        </div>
    )
}

export default Product
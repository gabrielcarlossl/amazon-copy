import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

import CurrencyFix from "../components/CurrencyFix"

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = { id, title, price, description, category, image }

        // envia o produto como uma action para o Redux 
        dispatch(addToBasket(product))
    }

    return (

        <div>

            <div className='grid grid-cols-5 pb-5'>

                {/* left section 1 column */}
                <Image
                    src={image}
                    height={200}
                    width={200}
                    objectFit='contain'
                ></Image>

                {/* Middle section  takes 3 columns*/}

                <div className='col-span-3 mx-5'>


                    <p>{title}</p>

                    <CurrencyFix price={price}></CurrencyFix>

                    <p className='text-[#107F10] text-xs font-semibold'>Em  estoque</p>

                    <div className='items-center'>

                        <input className='mr-1 focus:ring-blue-500 text-blue-600 bg-gray-100 rounded border-gray-300' type="checkbox" name="presente" /><label className='text-xs'>Este pedido é para presente</label>
                    </div>

                    <div >
                        <select className='shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 focus:ring-2 block p-1 hover:bg-gray-200' name="Qtd" id="Qtd">
                            <option defaultValue value="valor">Qtd: 1</option>
                            <option value="valor1">Qtd: 2</option>
                            <option value="valor2">Qtd: 3</option>
                            <option value="valor3">Qtd: 4</option>
                            <option value="valor4">Qtd: 5</option>
                            <option value="valor5">Qtd: 6</option>
                            <option value="valor6">Qtd: 7</option>
                            <option value="valor7">Qtd: 8</option>
                            <option value="valor8">Qtd: 9</option>
                            <hr />
                            <option value="valor9">Qtd: 10+</option>
                        </select>
                    </div>


                    <div className='flex my-2'>
                        {Array(rating).fill().map((_, i) => (
                            <StarIcon key={i} className='h-5 text-yellow-500'></StarIcon>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
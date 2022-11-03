import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

import CurrencyFix from "../components/CurrencyFix"

import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {

    const dispatch = useDispatch()

    // envia item para o redux
    const addItemToBasket = () => {
        const product = { id, title, price, rating, description, category, image, hasPrime }
        dispatch(addToBasket(product))
    }

    // remove o item do redux
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }

    return (


        <div className='inline-flex justify-between pb-5'>


            <div className='inline-flex'>

                <div >

                    {/* left section 1 column */}
                    <Image
                        src={image}
                        height={200}
                        width={200}
                        objectFit='contain'
                    ></Image>
                </div>



                {/* Middle section  takes 3 columns*/}

                <div className='mx-5'>

                    <div className='inline-flex'>

                        <p>{title}</p>

                        <div className='custom-end'>


                        </div>



                    </div>

                    <p className='text-xs text-gray-500'>Vendido por: <span className='text-[#097689]'>Amazon</span></p>

                    <p className='text-[#107F10] text-xs font-semibold'>Em  estoque</p>

                    {hasPrime && (
                        <div className='flex items-center space-x-2'>
                            <img
                                className='w-12'
                                src="https://links.papareact.com/fdw"
                                alt="amazon prime delivery"
                                loading='lazy'
                            />
                            <p className='text-xs text-gray-500'>Elegível para Frete GRÁTIS</p>
                        </div>
                    )}

                    <div className='items-center'>

                        <input className='mr-1 focus:ring-blue-500 text-blue-600 bg-gray-100 rounded border-gray-300' type="checkbox" name="presente" /><label className='text-xs'>Este pedido é para presente</label>
                    </div>

                    <div className='inline-flex mb-2'>

                        <select className='my-1 h-7 w-20 shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 focus:ring-2 block p-1 hover:bg-gray-200' name="Qtd" id="Qtd">
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


                        <button onClick={removeItemFromBasket} className='my-2 text-xs text-[#097689] hover:underline border-solid border-gray-300 border-r outline-none px-3 focus:outline-none active:outline-none'>
                            Excluir
                        </button>

                        <button className='text-xs text-[#097689] outline-none px-3 hover:underline ring-0 active:outline-none border-none focus:outline-none'>Salvar para mais tarde</button>


                    </div>

                </div>
            </div>

            <div>
                <CurrencyFix className={'font-bold py-2'} price={price}></CurrencyFix>
            </div>

        </div>

    )
}

export default CheckoutProduct
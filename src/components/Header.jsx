import React from 'react'

import Image from 'next/image'

import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    LocationMarkerIcon,

} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'


function Header() {
    return (
        <header className='bg-black flex-grow'>

            {/* Top nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2 pr-6'>

                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 flex-shrink-0'>
                    <Image

                        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                        objectFit='contain'
                        width={150}
                        height={40}
                        className='cursor-pointer object-cover '
                    ></Image>
                </div>

                {/* location info */}

                <div className='hidden md:flex text-white whitespace-nowrap items-center pr-7 cursor-pointer'>
                    <LocationMarkerIcon className='h-5'></LocationMarkerIcon>
                    <div className='pl-1'>
                        <p className='text-xs text-gray-400'>Enviar para Gabriel</p>
                        <p className='font-bold'>Brasil</p>
                    </div>
                </div>

                {/* Search bar */}



                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#FEBD69] hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" name="" id="" />
                    <SearchIcon className='h-14 p-4'></SearchIcon>
                </div>

                {/* Right info */}

                <div className='flex whitespace-nowrap md:text-xs text-white'>

                    <div className='flex flex-col pl-8 text-sm link '>
                        <p>Olá, Gabriel</p>
                        <div className='flex items-end'>
                            <p className='flex font-bold'>Contas e Listas </p><ChevronDownIcon className='h-5 font-extrabold'></ChevronDownIcon>
                        </div>

                    </div>


                    <div className='flex flex-col pl-5 text-sm link'>
                        <p>Devoluções</p>
                        <p className='font-bold'>e Pedidos</p>

                    </div>

                    <div className='relative flex items-end pl-4'>

                        <span className='absolute top-0 -right-2 md:right-10 h-5 w-5 bg-yellow-400 text-center rounded-full text-black font-bold'>
                            7
                        </span>

                        <ShoppingCartIcon className='h-10 link'></ShoppingCartIcon><p className='hidden md:inline font-extrabold link'>Carrinho</p>
                    </div>
                </div>
            </div>


            {/* bottom nav */}
            <div className='flex text-white font-semibold text-sm bg-amazon_blue-light items-center whitespace-nowrap justify-between'>
                
                <div className='flex items-center whitespace-nowrap space-x-3 p-2 pl-6'>
                    <p className='link flex items-center'> <MenuIcon className='h-6 mr-1'></MenuIcon> Todos</p>
                    <p className='link'>Venda na Amazon</p>
                    <p>Mais Vendidos</p>
                    <p>Ofertas do Dia</p>
                    <p className='hidden sm:flex items-end'>Prime<ChevronDownIcon className='h-4 text-gray-300'></ChevronDownIcon></p>
                    <p className='hidden clg:inline-flex'>Atendimento ao Cliente</p>
                    <p className='hidden cxl:inline-flex'>Música</p>
                    <p className='hidden c2xl:inline-flex'>Livros</p>
                    <p className='hidden c3x1::inline-flex'>Novidades na Amazon</p>
                    <p className='hidden c4x1:inline-flex'>eBooks Kindle</p>
                    <p className='hidden c5x1:inline-flex'>Eletrônicos</p>
                    <p className='hidden c6x1:inline-flex'>Computadores</p>
                    <p className='hidden c7x1:inline-flex'>Games</p>
                </div>


                <div className='hidden md:flex pr-6'>
                    <p className=' flex-end font-semibold text-xl'>Esquenta Black Friday</p>
                </div>



            </div>

        </header>
    )
}

export default Header
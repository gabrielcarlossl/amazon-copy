import React from 'react'

import Image from 'next/image'

import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    LocationMarkerIcon,

} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { useSession, signIn, signOut } from 'next-auth/client'

import { useRouter } from 'next/router'

function Header() {

    const [session] = useSession()

    const router = useRouter()

    return (
        <header className='bg-black flex-grow'>

            {/* Top nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2 pr-6'>

                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 flex-shrink-0'>
                    <Image

                        onClick={()=> router.push('/')}
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
                    {session?.user ? (

                        <div className='pl-1'>
                            <p className='text-xs text-gray-400'>Enviar para</p>
                            <p className='text-xs text-gray-400'>{session?.user.name}</p>
                            <p className='font-bold'>Brasil</p>
                        </div>
                    ) : (

                        <div className='pl-1'>
                            <p className='text-xs text-gray-400'>Olá</p>
                            <p className='font-semibold text-sm text-white'>Selecione o endereço</p>

                        </div>

                    )}

                </div>

                {/* Search bar */}


                <div className='hidden sm:flex'>
                <select id="select" className='h-10 w-20 bg-gray-100 border border-gray-300 text-gray-500 text-sm border-l rounded-l-md border-r border-r-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500; pl-2   '>
                        <option value="valor1" selected>Todos</option>
                        <option value="valor2" >Alexa Skills</option>
                        <option value="valor3">Apps e Jogos</option>
                        <option value="valor4">Automotivo</option>
                        <option value="valor5">Bebês</option>
                        <option value="valor6">Beleza</option>
                        <option value="valor7">Beleza de Luxo</option>
                        <option value="valor8">Bolsas, Malas e Mochilas</option>
                        <option value="valor9">Brinquedos e Jogos</option>
                        <option value="valor10">Casa</option>
                        <option value="valor11">CD e Vinil</option>
                        <option value="valor12">Computadores e Informática</option>
                        <option value="valor13">Cozinha</option>
                        <option value="valor14">Dispositivos Amazon</option>
                        <option value="valor14">DVD e Blu-Ray</option>
                        <option value="valor15">Eletrodomésticos</option>
                        <option value="valor16">Eletrônicos</option>
                        <option value="valor17">Esportes e Aventura</option>
                        <option value="valor18">Ferramentas e Materiais de Construção</option>
                        <option value="valor19">Games</option>
                        <option value="valor20">Instrumentos Musicais</option>
                        <option value="valor21">Jardim e Piscina</option>
                        <option value="valor22">Livros</option>
                        <option value="valor23">Loja Kindle</option>
                        <option value="valor24">Material para Escritório e Papelaria</option>
                        <option value="valor25">Móveis e Decoração</option>
                        <option value="valor26">Pet Shop</option>
                        <option value="valor27">Prime Video</option>
                        <option value="valor28">Produtos Industriais e Científicos</option>
                        <option value="valor29">Programe e Poupe</option>
                        <option value="valor30">Roupas, Calçados e Joias</option>
                        <option value="valor31">&nbsp;&nbsp;&nbsp;Feminino</option>
                        <option value="valor32">&nbsp;&nbsp;&nbsp;Masculino</option>
                        <option value="valor33">&nbsp;&nbsp;&nbsp;Meninas</option>
                        <option value="valor34">&nbsp;&nbsp;&nbsp;Meninos</option>
                        <option value="valor35">&nbsp;&nbsp;&nbsp;Bebês</option>
                        <option value="valor36">Saúde e Cuidados Pessoais</option>
                    </select>
                </div>
                
                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#FEBD69] hover:bg-yellow-500'>
                
                    <input className='p-2 h-full w-6 flex-grow flex-shrink  focus:outline-none px-4' type="text" name="" id="" />
                    <SearchIcon className='h-14 p-4'></SearchIcon>
                </div>

                {/* Right info */}

                <div className='flex whitespace-nowrap md:text-xs text-white'>

                    <div onClick={!session ? signIn : signOut} className='flex flex-col pl-8 text-sm link '>
                        <p>Olá, {session?.user ? session?.user?.name : 'faça seu login'}</p>
                        <div className='flex items-end'>
                            <p className='flex font-bold'>Contas e Listas </p><ChevronDownIcon className='h-5 font-extrabold'></ChevronDownIcon>
                        </div>

                    </div>


                    <div className='flex flex-col pl-5 text-sm link'>
                        <p>Devoluções</p>
                        <p className='font-bold'>e Pedidos</p>

                    </div>

                    {/* checkout button */}

                    <div onClick={()=> router.push('/checkout')} className='relative flex items-end pl-4'>

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
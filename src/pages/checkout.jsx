import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

function Checkout() {
  return (
    <div className='bg-gray-100'>
        <Header></Header>

        <main className='lg:flex max-w-screen-2xl mx-auto'>
            
            {/* left side */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image 
                src='https://links.papareact.com/ikj'
                width={1020}
                height={250}
                objectFit='contain'

                ></Image>

                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1>Carrinho de Compras</h1>
                </div>

            </div>


            {/* right side */}
        </main>
    </div>
  )
}

export default Checkout
import React from 'react'

import Header from '../components/Header'

import Image from 'next/image'

import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'

import CheckoutProduct from '../components/CheckoutProduct'

import Currency from 'react-currency-formatter'

import { useSession } from 'next-auth/client'
import { loadStripe } from '@stripe/stripe-js'

import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {

    const [session] = useSession()

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
    
        // chama o backend para criar realizar o pagametno
        const checkoutSession = await axios.post("/api/create-checkout-session", {
          items,
          email: session.user.email,
        });
    
        // redireciona o usuario para o pagamento
        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });
    
        result.error && alert(result.error.message);
      };

    return (
        <div className='h-[100%] bg-gray-100'>
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

                    <div className='flex flex-col px-5 pt-5 space-y-10 bg-white'>

                        <div className='border-b pb-1 mb-5'>
                            <h1 className='text-3xl'>
                                {items.length === 0 ? 'Seu carrinho de compras da Amazon está vazio.' : 'Carrinho de compras'}
                            </h1>
                            <div className='custom-end'>
                                <p className='text-xs text-gray-600'>{items.length === 0 ? '' : 'Preço'}</p>
                            </div>
                        </div>


                        {items.map((items, i) => (
                            <CheckoutProduct
                                key={i}
                                id={items.id}
                                title={items.title}
                                price={items.price}
                                rating={items.rating}
                                description={items.description}
                                category={items.category}
                                image={items.image}
                                hasPrime={items.hasPrime}
                            ></CheckoutProduct>
                        ))}
                    </div>

                </div>


                {/* right side */}

                <div className='flex flex-col bg-white p-10 mx-5 my-5 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} itens):
                                <span className='font-bold'>
                                    {" "}<Currency quantity={total} currency='BRL'></Currency>
                                </span>
                            </h2>

                            <button 
                                onClick={createCheckoutSession} 
                                role='link' 
                                disabled={!session} 
                                className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? 'Entre para finalizar o pedido.' : 'Finalizar pedido.'}
                            </button>
                        </>
                    )}
                </div>

            </main>

            <footer className='lg:flex max-w-screen-2xl mx-auto text-xs pb-5'>
                {/* footer information */}
                <div >
                    {items.length === 0 ? (<div className='hidden h-16 m-5 bg-white'></div>) : (
                        <>
                        </>
                    )}

                    <div className='h-16 m-5 bg-white'></div>
                    <p className='m-5'>
                        O preço e a disponibilidade dos produtos na Amazon.com.br estão sujeitos a alterações. O carrinho de compras é um local temporário para armazenar uma lista de seus produtos e reflete o preço mais atualizado de cada um deles.

                        Você tem um cartão-presente ou um código promocional? Solicitaremos que você insira seu código de reivindicação quando for a hora de pagar.
                    </p>

                </div>
            </footer>

        </div>
    )
}

export default Checkout
import React from 'react'

import Image from 'next/image'


function Header() {
    return (
        <header className='bg-black'>

            {/* Top nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>

                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image

                        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                        objectFit='contain'
                        width={150}
                        height={40}
                        className='cursor-pointer'
                    ></Image>
                </div>

                {/* Search bar */}

                 <div>
                    <input type="text" name="" id="" />
                 </div>
            </div>


            {/* bottom nav */}
            <div>


            </div>
        </header>
    )
}

export default Header
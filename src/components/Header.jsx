import React from 'react'

import Image from 'next/image'


function Header() {
  return (
    <header className='bg-black'>
        
        {/* Top nav */}
        <div>
            <Image
                
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                
                width={150}
                height={40}
            ></Image>
        </div>


        {/* bottom nav */}
        <div>

        <h1>oi</h1>
        </div>
    </header>
  )
}

export default Header
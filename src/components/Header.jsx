import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Header({cartCount}) {
  return (
    <div className="flex justify-between items-center p-4 ">
        <h1 className='text-gray-700'>UNI Resto Cafe</h1>
        <div className="flex justify-center items-center">
            <p className='cursor-pointer text-sm text-gray-700 me-4'>My Orders</p>
            <div className='relative'>
                <FaShoppingCart className='text-gray-700 text-2xl' />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                    {cartCount}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header
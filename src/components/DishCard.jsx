import React from 'react'

function DishCard({dish}) {
    
  return (
    <div className='py-2 px-3'>
        <div className='flex justify-between items-center'>
            <div className="flex justify-center items-start">
                {/* according to dish type  */}
                <div className={`mt-2 w-4 h-4 border flex justify-center items-center ${dish?.dish_Type==2?"text-green-700":"text-red-500"}`}>
                    <div className={`w-3 h-3 rounded-full ${dish?.dish_Type==2?"bg-green-700":"bg-red-500"}`}>
                    </div>
                </div>
                {/* dish details */}
                <div className='ms-3'>
                    <h3 className='font-bold text-gray-800'>{dish?.dish_name}</h3>
                    <p className='text-xs text-gray-800 mt-1'>{dish?.dish_currency}  {dish?.dish_price}</p>
                    <p className='md:text-sm text-xs  text-gray-500'>{dish?.dish_description}</p>
                    {dish?.dish_Availability ? 
                    <div className="mt-2 inline-flex items-center bg-green-600 text-white rounded-full px-3 py-1 text-sm">
                        <button>-</button>
                        <span className="mx-5">0</span>
                        <button>+</button>
                    </div>
                    :
                    <p className='text-sm text-red-500 mt-1'>Not Available</p>}
                    {dish?.addonCat?.length>0 && <p className='text-sm text-red-500 mt-1'>Customizations available</p>}
                </div>
            </div>
            <div className="flex items-center">
                <p className='text-gray-800 text-sm me-10 md:me-40'>{dish?.dish_calories} calories</p>
                <img style={{height:"80px",width:"80px"}} className='rounded-xl' src={dish?.dish_image} alt={dish?.dish_name} />
            </div>
            
        </div>
        <div className="border-b border-gray-400 mt-3"></div>
    </div>
  )
}

export default DishCard
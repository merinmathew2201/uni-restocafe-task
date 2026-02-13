import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import DishCard from '../components/DishCard';

function Home() {

    const [cartCount,setCartCount] = useState(0)
    const [categories,setCategories] = useState([])
    const [tab,setTab] = useState(0)
    console.log(categories);


    const dishes = categories[tab]?.category_dishes || []

    useEffect(()=>{
        getAllCategories()
    },[])

    // get all categories
    const getAllCategories = async()=>{
        try {
            const response = await fetch("https://zartek-task.vercel.app/api/resto-cafe")
            const result = await response.json()
            const menuList = result?.data?.[0]?.table_menu_list  
            setCategories(menuList)          
        } catch (error) {
            console.log(error);            
        }
    }

    // add item to cart
    const addToCart = ()=>{
        setCartCount(prev=>prev+1)
    }
   // remove item from cart 
    const removeCart = ()=>{
        setCartCount(prev=>prev>0?prev-1:0)
    }

  return (
    <>
        <Header cartCount={cartCount}/>
        <div className=" my-5 flex overflow-x-auto border-b border-gray-400 thin-scrollbar">
            {
                categories?.map((item,index)=>(
                    <button key={item.menu_category_id} onClick={()=>setTab(index)} className={`px-4 py-3 text-sm  whitespace-nowrap  ${tab == index?"text-red-800 border-b-2 border-red-500":"text-gray-700"}`}>{item.menu_category}</button>
                ))
            }
        </div>

        {dishes?.map(dish=><DishCard key={dish?.dish_id} dish={dish} addToCart={addToCart}
        removeCart={removeCart} />)}

    </>
  )
}

export default Home
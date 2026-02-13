import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import DishCard from '../components/DishCard';

function Home() {

    const [categories,setCategories] = useState([])
    const [tab,setTab] = useState(0)
    console.log(categories);

    const dishes = categories[tab]?.category_dishes || []

    useEffect(()=>{
        getAllCategories()
    },[])

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
  return (
    <>
        <Header/>
        <div className=" my-5 flex overflow-x-auto border-b border-gray-400 thin-scrollbar">
            {
                categories?.map((item,index)=>(
                    <button key={item.menu_category_id} onClick={()=>setTab(index)} className={`px-4 py-3 text-sm  whitespace-nowrap  ${tab == index?"text-red-800 border-b-2 border-red-500":"text-gray-700"}`}>{item.menu_category}</button>
                ))
            }
        </div>

        {dishes?.map(dish=><DishCard key={dish?.dish_id} dish={dish}/>)}

    </>
  )
}

export default Home
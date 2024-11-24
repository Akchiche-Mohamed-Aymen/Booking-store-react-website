import { useState } from 'react'
import darkLogo from './assets/website/dark-mode-button.png'
import lightLogo from './assets/website/light-mode-button.png'
import { useTheme } from './contexts/ThemeProvider'
export default function NavBar() {
  const {dark , setDark} = useTheme()
    return (
      <nav >
      <div className={`mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8 ${dark ? 'bg-gray-600' : 'bg-white'}`}>
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className=" sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center menu">
                <h1 className={`${dark ? 'text-white ' : 'text-red-700 '}  text-2xl `}>ESHOP</h1>
                <a href="#" className={dark? 'dark' : ''}>Home</a>
                <a href="#" className={dark? 'dark' : ''}>Shop</a>
                <a href="#" className={dark? 'dark' : ''}>About</a>
                <a href="#" className={dark? 'dark' : ''}>Blogs</a>
              </div>
            </div>
          </div>
         
            <div className="relative ml-3  flex items-center gap-5">
              <div className={`cursor-pointer  search flex items-center rounded-md hover:border ${!dark ? 'border-red-600' : ''} p-1`} >
                <input type="text" className=" w-0 border-none outline-none rounded-md" name="" id="" />
                <i className={`fa-solid fa-magnifying-glass ${dark ? 'text-white' : 'text-black'}`}></i>
              </div>
              <div className="relative bg-red market cursor-pointer">
                  <i className={`fa-solid fa-cart-shopping  text-lg ${dark ? 'text-white' : 'text-black'}`}></i>
                  <span className=" absolute  bg-red-600 text-white h-4 w-4 flex justify-center items-center">0</span>
              </div>
              <img src={dark ? darkLogo : lightLogo} onClick={()=>setDark(!dark)} className='cursor-pointer w-12 h-6' alt="" />
    
          </div>
        </div>
      </div>
    </nav>
    
    )
  }
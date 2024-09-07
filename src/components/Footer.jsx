import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

      <div>
        <img src={assets.logo} alt="loading..." className="mb-5 w-32" />
        <p className='w-full md:w-2/3 text-gray-600'>
        Discover fashion that fits your style and personality. At Enchant, we offer high-quality, trendy clothing designed to make you look and feel your best. Explore our collections and stay connected with us for exclusive offers and the latest arrivals. Your style, our passion.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
         <li>Home</li>
         <li>About us</li>
         <li>Delivery</li>
         <li>Privacy Policy</li>
        </ul>
      </div>

<div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+91-6396277878</li>
        <li>chinmayshah2002@gmail.com</li>
    </ul>
</div>

    </div>

    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ enchant.com -All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer

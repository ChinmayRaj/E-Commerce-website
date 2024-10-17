import React from 'react'

const NewsletterBox = () => {

const onSubmitHnadler=(event)=>{
    event.preventDefault();
}

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>
      <p className='text-gray-400 mt-3'>Join our exclusive community and never miss out on the latest fashion trends, new arrivals, and special offers. By subscribing to our newsletter, you’ll get insider access to everything happening at Enchant.</p>
    <form onSubmit={onSubmitHnadler}  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
    </form>
    </div>
  )
}

export default NewsletterBox

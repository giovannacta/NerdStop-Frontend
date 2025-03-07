import React from 'react'

const Newsletter = () => {
  return (
    <section className='max_padd_container py-12 xl:py-28 bg-primary'>
        <div className='mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]'>
            <h3 className='h3'>Stay Updated with NerdStop!</h3>
            <h4 className='h4'>Get the latest game releases, exclusive deals, and geeky news straight to your inbox!</h4>
            <div className="flex w-full max-w-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="Enter your best email"
            className="flex-1 px-4 py-3 text-gray-700 focus:outline-none bg-white"
          />
          <button className="bg-secondary text-white px-6 py-3 font-semibold transition duration-300 hover:bg-opacity-80">
            Subscribe
          </button>
        </div>
        </div>
    </section>
  )
}

export default Newsletter
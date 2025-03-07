import React from 'react'

const Login = () => {
  return (
    <section className='max_padd_container flexCenter flex-col pt-32'>
      <div className='max-w[555px] h-[600px] bg-primary m-auto px-14 py-10'>
        <h3 className='h3'>Sign Up</h3>
        <div className='flex flex-col gap-4 mt-7'>
          <input type="text" placeholder='Your Name' className='h-14 w-full pl-5 bg-white outline-none rounded-xl'/>
          <input type="email" placeholder='Email' className='h-14 w-full pl-5 bg-white outline-none rounded-xl'/>
          <input type="password" placeholder='Password' className='h-14 w-full pl-5 bg-white outline-none rounded-xl'/>
        </div>
        <button className='bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-opacity-80 w-full my-5'>Continue</button>
        <p className='text-black font-bold'>Already a Member? <span className='text-secondary underline cursor-pointer'>Login</span></p>
        <div className='flexCenter mt-6 gap-3'>
          <input type="checkbox" name='' id=''/>
          <p>I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default Login
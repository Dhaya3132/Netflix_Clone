import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Login = () => {
  const [signState, setSignState] = useState('Sign Up');
  return (
    <div className='login h-screen bg-background-banner p-20'>
      <img src={logo} alt="Logo" className='w-36 h-9' />
      <div className="form-container w-2/5 bg-gradient-180-black p-16 rounded-md mx-auto flex flex-col justify-center item-center">
        <h2 className='font-base text-2xl mb-10'>{signState}</h2>
        <form className='flex flex-col justify-center gap-5'>
          {signState==='Sign Up'?<input type="text" placeholder='Enter your name' className='bg-input-bg border-none outline-none w-full h-12 pl-4 pr-7 py-3 rounded-sm text-white text-base' />:<></>}
          <input type="email" placeholder='Enter your Email' className='bg-input-bg border-none outline-none w-full h-12 pl-4 pr-7 py-3 rounded-sm text-white text-base' />
          <input type="password" placeholder='Enter your Password' className='bg-input-bg border-none outline-none w-full h-12 pl-4 pr-7 py-3 rounded-sm text-white text-base' />
          <button className='w-full bg-button-signin text-white font-semibold text-base mt-2 rounded-sm cursor-pointer p-3'>{signState}</button>
          <div className="form-helper flex justify-between">
            <div className="remember-me flex gap-1">
              <input type="checkbox" className='cursor-pointer' />
              <label htmlFor="" className='cursor-pointer'>Remember me</label>
            </div>
            <p className='text-sm text-form-switch hover:text-white cursor-pointer'>Need Help?</p>
          </div>
        </form>
        <div id="form-switch" className='text-form-switch text-sm mt-4'>
          {signState==='Sign In' ? <h4>New to Netflix <span className='text-white m-1' onClick={()=> setSignState('Sign Up')}>Sign Up now</span></h4> : 
          <h4>Already have an account? <span className='text-white m-1'  onClick={()=> setSignState('Sign In')}>Sign in now</span></h4>}
        </div>
      </div>
    </div>
  )
}

export default Login
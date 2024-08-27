import React, { useState } from 'react'

const Login = () => {
    const [AccountStatus, setAccountStatus] = useState('Sign Up')
    const onSubmitHandler=async(e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={(e)=>onSubmitHandler(e)} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 text-gray-700">
            <div className='flex items-center gap-2 mb-2 mt-10'>
                <p className='text-3xl'>{AccountStatus}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            <input required type="text" className={`w-full border px-3 py-2 my-2 border-gray-800 ${AccountStatus==='Login'?'hidden':''}`} placeholder='Name' />
            <input required type="email" className='w-full border px-3 py-2 my-2 border-gray-800' placeholder='Email' />
            <input required type="password" className='w-full border px-3 py-2 my-2 border-gray-800' placeholder='Password' />
            <div className="flex justify-between text-sm font-bold w-full mt-12]">
                <p className='cursor-pointer'>Forgot Password?</p>
                {
                    AccountStatus=='Login'?
                     <p onClick={()=>setAccountStatus('Sign Up')} className='cursor-pointer'>Create Account</p> 
                     : 
                     <p onClick={()=>setAccountStatus('Login')} className='cursor-pointer'>Login Account</p>
                }
            </div>
            <button className='mt-10 text-sm py-3 px-9 border  bg-black text-white'>{AccountStatus==='Login'?'Sign in':'Sign Up'}</button>
        </form>
    )
}

export default Login

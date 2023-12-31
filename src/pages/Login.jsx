import { useState } from 'react'
import useLogin from '../hooks/useLogin';

export default function Login() {
    const [state,setState] = useState({ email:'', password:'' });
    const { login, error, isLoading } = useLogin();

    async function formHandler(e) {
        if (e.target == form) {
        e.preventDefault();
        await login(state.email,state.password);
        }

        if(e.target.name == 'email') {
        setState(prevState => ({ ...prevState, email:e.target.value }));
        }
        if(e.target.name == 'password') {
        setState(prevState => ({ ...prevState, password:e.target.value }));
        }
    }
  return (
    <form name='form' onSubmit={e => formHandler(e)} className='sm:space-y-4 space-y-2 sm:p-14 p-10 max-w-sm mx-auto mt-10 rounded bg-white'>

        <h3 className='font-bold text-4xl text-center'>Login</h3>

        <div className="space-y-1">
            <label htmlFor="email" className='font-semibold'>Email</label>
            <input
            className='px-2 py-1 w-full border border-gray-100 rounded-md focus:outline-none shadow'
            type="text" required name='email' id="email" onChange={e => formHandler(e)}
            value={state.email}/>
        </div>

        <div className="space-y-1">
            <label htmlFor="password" className='font-semibold'>Password</label>
            <input
            className='px-2 py-1 w-full border border-gray-100 rounded-md focus:outline-none shadow'
            type="password" required name='password' id="password" onChange={e => formHandler(e)} 
            value={state.password}/>
        </div>

        <button className='bg-emerald-500 border-0 text-white py-2 rounded cursor-pointer w-full'>Login  </button>

        { error && <div className="p-3  font-bold bg-pink-300 text-red-700">{error}</div>}
    </form>
  )
}

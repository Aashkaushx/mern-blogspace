import React,{ useState } from 'react';

const Adminlogin = () => {
    const [Inputs, setInputs] = useState({
            email:"",
            password:"",
    });
        
    const change =(e) => {
        const { name,value}= e.target;
        setInputs({ ...Inputs ,[name]:value })
    };
    const handleAdminLogin = async()

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='p-12 shadow-2xl rounded w-[80%] md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center'>
                <div className='text-2xl flex flex-col lg:flex-row gap-2 text-center'>
                    <h1 className='font-bold'>Welcome Admin! </h1>
                    <span>Please login here</span>
                </div>
                <form action="" className='flex flex-col w-[100%] mt-8' onSubmit={handleAdminLogin}>
                    <div className='flex flex-col mb-4'>
                        <label>Email</label>
                        <input type="email" value={Inputs.email} name="email" className='mt-2 outline-none border px-3 py-2 rounded-zinc-400'required
                        onChange={change}/>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>Password</label>
                        <input type="password" value={Inputs.password} name="password" className='mt-2 outline-none border px-3 py-2 rounded-zinc-400' required
                        onChange={change}/>
                    </div>
                    <div className='flex mt-4'>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded w-[100%] hover:bg-blue-700 transition-all duration-300'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div> 
    )
}

export default Adminlogin
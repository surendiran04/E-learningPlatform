import React, { useState } from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import Header from '../../Components/Header';

function Checkout() {
    let notify = () => toast.warn(errors.email?.message || errors.password?.message);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        // handleLogin(data);
        reset();
    };
    return (
        <>
        <Header/>        

        <div className=' flex items-center justify-center mt-10'>
            <div className='w-1/3'>
                <div className="text-4xl font-bold  text-dg text-center non-italic mb-4">
                    Checkout
                </div>
                <div className='bg-dg p-10 '>

                    <h1 className='text-3xl text-white mb-4'>Data Structures and Algorithm	</h1>
                    <div className='flex gap-2 mb-3'>
                        <p className='text-3xl text-white '> Price: </p>
                        <div className='flex'>
                            <FaIndianRupeeSign className='text-2xl text-white mt-2 ' />
                            <span className='text-2xl text-gold1 mb-3'>2500</span>
                        </div>
                    </div>
                    <div className='w-fit bg-db4 p-3 flex mb-3'>
                        <h4 className='text-white text-2xl ml-3'> Duration: 6 Months</h4>
                    </div>
                    <button
                        className={`
                    w-50
                    rounded-xl text-xl ml-24
                    font-semibold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-5 mb-2 ${isLoading
                                ? "bg-green-400 hover:bg-green-600 text-white"
                                : "bg-transparent border-white border-2 hover:bg-green-600 text-white"
                            }`}
                        type="submit"
                        onClick={notify}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading" : "Make Payment"}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout
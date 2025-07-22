import React from 'react';
import img from "../../assets/imgs/cook-meet-compressor-1.jpg"

function Date() {
    return (
        <>
            <div className='absolute top-500 left-0 right-0 w-1/1 h-100 grid grid-cols-12 '>

                <div className='relative m-5 col-span-8 col-end-13'>
                    <div className=' bg-neutral-800 w-1/1 h-50'>
                        <span className='absolute top-3 left-5 text-white font-bold'>14:37</span>
                        <h1 className='absolute top-10 pr-5 pl-5 text-neutral-400 text-xl font-bold w-1/1 h-25 flex justify-center items-center'>بسیار کافه زیبایی داری ممنونم از خدمات رسانی به موقع</h1>

                        <div className='absolute bottom-0 right-0 text-white flex justify-between items-center flex-row'>

                            <div className='flex justify-between items-center flex-row m-5 w-15'>
                                <i class="fa-solid fa-eye"></i>
                                <p>1,326</p>
                            </div>

                            <div className='flex justify-between items-center flex-row m-5 w-10'>
                                <i class="fa-solid fa-message"></i>
                                <p>17</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative m-5 col-span-12 col-end-13'>
                    <h1 className='z-10 h-45 absolute w-1/1 top-0 flex justify-center items-center text-white font-bold text-2xl'>غذایی لذت بخش در مکانی آرامش بخش</h1>
                    <img src={img} alt="img" className='w-1/1 h-60 opacity-55' />

                    <div className='absolute bottom-0 right-0 text-white flex justify-between items-center flex-row'>

                        <div className='flex justify-between items-center flex-row m-5 w-15'>
                            <i class="fa-solid fa-eye"></i>
                            <p>1,326</p>
                        </div>

                        <div className='flex justify-between items-center flex-row m-5 w-10'>
                            <i class="fa-solid fa-message"></i>
                            <p>17</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Date;
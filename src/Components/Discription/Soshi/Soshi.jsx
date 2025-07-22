import React from 'react';
import soshi from "../../../assets/imgs/soshi.png"

function Soshi() {
    return (
        <>
            <div className='w-2/2 flex justify-center items-center absolute top-120'>

                <div className="bg-neutral-800 w-200 h-130 shadow-neutral-900 shadow-2xl flex justify-around items-center flex-col">
                    <h1 className='text-center font-bold text-4xl text-green-500'>پیشنهاد امروز</h1>

                    <div className='w-9/12 text-white flex justify-between items-center flex-row-reverse'>

                        <div className='pl-5'>
                            <div className='flex justify-around items-end flex-col p-2 border-b-1 border-b-green-500'>
                                <span className='mb-2 font-bold'>سوشی کامورا</span>
                                <p className='font-light mr-2'>سوشی تند مخصوص سامورایی ها بوده</p>
                            </div>
                            <div className='flex justify-around items-end flex-col p-2 border-b-1 border-b-green-500'>
                                <span className='mb-2 font-bold'>مواد تشکیل دهنده</span>
                                <p className='font-light mr-2'>ماهی سالمون + برنج + سویا سس</p>
                            </div>
                            <div className='flex justify-around items-end flex-col p-2 border-b-1 border-b-green-500'>
                                <span className='mb-2 font-bold'>تعداد</span>
                                <p className='font-light mr-2'>غذا مناسب یک نفر</p>
                            </div>
                            <div className='flex justify-around items-end flex-col p-2'>
                                <span className='mb-2 font-bold'>قدمت غذا</span>
                                <p className='font-light mr-2'>از سال 1789 میلادی</p>
                            </div>
                        </div>

                        <div className='w-70'>
                            <img src={soshi} alt="" />
                        </div>
                    </div>

                    <div className='w-2/2 flex justify-center items-center'>
                        <button className='rounded-full bg-none border-2 border-green-500 p-2 w-50 cursor-pointer active:text-green-300 active:border-green-300 active:w-45 transition-all font-bold text-green-400'>ثبت سفارش</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Soshi;
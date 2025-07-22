import React from 'react';
import img from "../../assets/imgs/aiPizza.png";
import HeaderBtn from './Button';

function Header() {
    return (
        <>
            <div className='relative'>
                <div className='h-15 flex justify-around items-center bg-black opacity-70 absolute top-0 right-0 left-0'>

                    <h1 className='text-green-500 font-bold text-2xl col-span-2 col-start-2 z-10'>کافه سبز</h1>

                    <div className='w-120 flex justify-between flex-row-reverse cursor-pointer text-white'>
                        <HeaderBtn ButtonText="پیتزا" />
                        <HeaderBtn ButtonText="ساندویچ" />
                        <HeaderBtn ButtonText="نوشیدنی گرم" />
                        <HeaderBtn ButtonText="نوشیدنی سرد" />
                        <HeaderBtn ButtonText="شیک" />
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <h1 className=' font-bold text-3xl top-40 absolute text-white p-10 w-150 pt-0'>برای لذت بردن از لحظاتی آرام و دل نشین در یک فضای دل چسب</h1>
                </div>

                <div className='flex justify-center items-center absolute top-70 w-2/2'>
                    <div className='flex justify-around items-center w-200'>

                        <div className='flex justify-around items-center flex-col'>
                            <i class="fa-solid fa-clock text-green-500 m-3"></i>
                            <p className='w-30 text-center text-white'>
                                ساعات کاری : شروع 9:00 اتمام 12:30
                            </p>
                        </div>

                        <div className='flex justify-around items-center flex-col'>
                            <i class="fa-solid fa-paper-plane text-green-500 m-3"></i>
                            <p className='w-30 text-center text-white'>
                                لطفا نظرات خودرا برای ما ارسال کنید
                            </p>
                        </div>

                        <div className='flex justify-around items-center flex-col'>
                            <i class="fa-solid fa-phone text-green-500 m-3"></i>
                            <p className='w-30 text-center text-white'>
                                راه های ارتباطی : 09939160928
                            </p>
                        </div>
                    </div>
                </div>

                <img src={img} alt="pizza" className='w-290' />
            </div>
        </>
    );
}

export default Header;
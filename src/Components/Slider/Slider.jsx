import React, { useState } from 'react';
import slideOne from "../../assets/imgs/Pepperoni Pizza_1_compressed.jpg";
import slideTwo from "../../assets/imgs/pasta.png";
import { useRef } from 'react';

function Slider() {

    const slideTwoImg = useRef();
    const nextSlideCircleIcon = useRef();
    const passSlideCircleIcon = useRef();
    const [slideText, setSlideText] = useState("غذا هایی که تا به حال نخوردید را با ما تجربه کنید");

    const HandleNewSlide = () => {
        slideTwoImg.current.className = "h-150 w-1/1 opacity-100 absolute top-0 left-0 right-0 bottom-0 transition-all";
        setSlideText(" طعم‌های به یادماندنی، لحظات ناب با نوشیدنی های خاص");
        nextSlideCircleIcon.current.className = "fa-solid fa-circle text-green-100 m-2 border-3 rounded-full border-green-800 transition-all";
        passSlideCircleIcon.current.className = "fa-solid fa-circle text-green-700 m-2 border-3 rounded-full border-green-800 transition-all";
    }

    const HandlePastSlide = () => {
        slideTwoImg.current.className = "h-150 w-1/1 opacity-0 absolute top-0 left-0 right-0 bottom-0 transition-all";
        setSlideText("غذا هایی که تا به حال نخوردید را با ما تجربه کنید");
        nextSlideCircleIcon.current.className = "fa-solid fa-circle text-green-700 m-2 border-3 rounded-full border-green-800 transition-all";
        passSlideCircleIcon.current.className = "fa-solid fa-circle text-green-100 m-2 border-3 rounded-full border-green-800 transition-all";
    }

    return (
        <>
            <div className='w-2/2 flex justify-center items-center flex-col absolute left-0 right-0 top-320'>

                <div className='w-2/2 relative flex flex-row justify-center items-center'>
                    <img src={slideOne} className='h-150 w-1/1' alt="slide One" />
                    <img src={slideTwo} ref={slideTwoImg} className='opacity-0 absolute top-0 left-0 right-0 bottom-0' alt="slide Two" />

                    <div className='absolute w-150 right-0 top-0 bottom-0'>

                        <div className='w-1/1 flex justify-center items-center mt-30'>
                            <h1 className='text-4xl text-green-500 font-bold'>کافه سبز</h1>
                        </div>

                        <div className='mt-20 flex justify-center items-center w-1/1'>
                            <p className='text-white font-bold text-3xl w-100'>{slideText}</p>
                        </div>

                        <div className='w-1/1 mt-20 flex justify-around items-center'>
                            <i onClick={HandlePastSlide} className='fa-solid cursor-pointer active:border-green-300 active:text-green-300 transition-all fa-arrow-right rotate-180 p-3 text-green-500 border-2 border-green-500 rounded-full'></i>
                            <i onClick={HandleNewSlide} className='fa-solid cursor-pointer active:border-green-300 active:text-green-300 transition-all fa-arrow-right p-3 text-green-500 border-2 border-green-500 rounded-full'></i>
                        </div>

                        <div className=' w-1/1 flex justify-center items-center'>
                            <i ref={nextSlideCircleIcon} className="fa-solid fa-circle text-green-700 m-2 border-3 rounded-full border-green-800"></i>
                            <i ref={passSlideCircleIcon} className="fa-solid fa-circle text-green-100 m-2 border-3 rounded-full border-green-800"></i>
                        </div>

                        <div className='w-1/1 flex justify-center mt-10'>
                            <button className='w-50 rounded-full border-2 cursor-pointer active:w-45 active:text-green-300 active:border-green-300 transition-all border-green-500 text-green-500 text-xl font-bold p-2'>ثبت سفارش</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;
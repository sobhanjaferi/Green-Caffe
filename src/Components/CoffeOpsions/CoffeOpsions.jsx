import React from 'react';

function CoffeOpsions() {
    return (
        <>
            <div className='w-2/2 absolute top-270 flex justify-center items-center'>
                <div className='w-200 h-25 text-white flex justify-around items-center'>
                    <div className='flex justify-around items-center flex-col h-2/2'>
                        <i class="fa-solid fa-cake-candles p-3 bg-neutral-700 border-1 border-green-500 text-green-500 rounded-full"></i>
                        <p>گرفتن تولد در کافه</p>
                    </div>
                    <div className='flex justify-around items-center flex-col h-2/2'>
                        <i class="fa-solid fa-house p-3 bg-neutral-700 border-1 border-green-500 text-green-500 rounded-full"></i>
                        <p>خدمات رسانی در خانه</p>
                    </div>
                    <div className='flex justify-around items-center flex-col h-2/2'>
                        <i class="fa-solid fa-laptop p-3 bg-neutral-700 border-1 border-green-500 text-green-500 rounded-full"></i>
                        <p>محیطی آرام برای کار کردن</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoffeOpsions;
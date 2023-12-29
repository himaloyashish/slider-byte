import React from 'react';

import "./slide.css"


const Slider = () => {


   

    return (
        <swiper-container slides-per-view="" navigation="true" space-between='20' loop='true'>
            <swiper-slide >
                <div className='p-2 gap-3 md:flex justify-center relative items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_1" />
                    <div>
                        <p>4.4</p>
                        <p className='text-xl font-bold'>LG Monitor 43xn</p>
                        <p className='text-red-600'>$500</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <span className='absolute w-12 h-12 rounded-3xl top-4 left-5 p-1 bg-orange-400'>-8%</span>

                </div>
                <div className='p-2 gap-3 md:flex relative justify-center items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_2" />
                    <div>
                        <p>4.5</p>
                        <p className='text-xl font-bold'>Samsung m20</p>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$5550</p>
                            <p className='text-slate-600'><s>$5000</s></p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <span className='absolute w-12 h-12 rounded-3xl top-4 left-5 p-1 bg-orange-400'>-10%</span>

                </div>

                <div className='p-2 gap-3 md:flex relative justify-center items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-photo/television-with-candles-room-generative-ai_188544-19471.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_3" />
                    <div>
                        <p>4.4</p>
                        <p className='text-xl font-bold'>Samsung m20 pro</p>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$680</p>
                            <p className='text-slate-600'><s>$700</s></p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>

                    <span className='absolute w-12 h-12 rounded-3xl top-4 left-5 p-1 bg-orange-400'>-15%</span>
                </div>
                <div className='p-2 gap-3 md:flex relative justify-center items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-psd/computer-mockup_1310-706.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_4" />
                    <div>
                        <p>4.6</p>
                        <p className='text-xl font-bold'>HP Elite Computer</p>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$1280</p>
                            <p className='text-slate-600'><s>$1380</s></p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <span className='absolute w-12 h-12 rounded-3xl top-4 left-5 p-1 bg-orange-400'>-6%</span>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div className='p-2 gap-3 md:flex justify-center items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-photo/technology-electronic-devices_144627-10803.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_5" />
                    <div>
                        <p>4.8</p>
                        <p className='text-xl font-bold'>HP ZenBook Laptop</p>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$1400</p>
                            <p className='text-slate-600'><s>$1480</s></p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>

                </div>
                <div className='p-2 gap-3 relative flex justify-center items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-photo/closeup-digital-camera-with-lenses_181624-59757.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" alt="product_6" />
                    <div>
                        <p>4.5</p>
                        <p className='text-xl font-bold'>Nikon g43</p>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$1780</p>
                            <p className='text-slate-600'><s>$1850</s></p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <span className='absolute w-12 h-12 rounded-3xl top-4 left-5 p-1 bg-orange-400'>-10%</span>
                </div>
                <div className='p-2 gap-3 flex relative justify-center items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-photo/top-view-photography-accesories-with-copy-space_23-2148363427.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" alt="product_7" />
                    <div>
                        <p>4.9</p>
                        <p className='text-xl font-bold'>Nikon g43 Pro</p>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$1680</p>
                            <p className='text-slate-500-600'><s>$1780</s></p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <span className='absolute w-12 h-12 rounded-3xl top-4 left-5 p-1 bg-orange-400'>-10%</span>
                </div>
                <div className='p-2 gap-3 flex justify-center items-center'>
                    <img className='w-1/3' src="https://img.freepik.com/free-photo/top-view-photography-accesories-with-copy-space_23-2148363427.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" alt="product_8" />
                    <div>
                        <p>4.6</p>
                        <p className='text-xl font-bold'>Canon g5</p>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$1600</p>
                            <p className='text-slate-600'><s>$1680</s> </p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                    </div>
                </div>
            </swiper-slide>

        </swiper-container>
    );
};

export default Slider;
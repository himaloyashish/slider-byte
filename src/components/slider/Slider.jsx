import React from 'react';

import "./slide.css"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Slider = () => {


    const { data: products = [] } = useQuery({
        queryKey: ["AllProduct"],
        queryFn: async () => {
            const res = await axios("product.json");

            return res?.data;
        }
    })

    console.log(products);

    return (
        <swiper-container slides-per-view="3" navigation="true" space-between='20' loop='true'>
            <swiper-slide >
                <img className='w-1/3' src="https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_1" />
                <div className='p-2'>
                    <p>4.4</p>
                    <p className='text-xl font-bold'>LG Monitor 43xn</p>
                    <p>$500</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
            <swiper-slide>
                <img className='w-1/3' src="https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_2" />
                <div className='p-2'>
                    <p>4.5</p>
                    <p className='text-xl font-bold'>Samsung m20</p>
                    <p>$5550</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
            <swiper-slide>
                <img className='w-1/3' src="https://img.freepik.com/free-photo/television-with-candles-room-generative-ai_188544-19471.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_3" />
                <div className='p-2'>
                    <p>4.4</p>
                    <p className='text-xl font-bold'>Samsung m20 pro</p>
                    <p>$680</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
            <swiper-slide>
                <img className='w-1/3' src="https://img.freepik.com/free-psd/computer-mockup_1310-706.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_4" />
                <div className='p-2'>
                    <p>4.5</p>
                    <p className='text-xl font-bold'>HP Elite Computer</p>
                    <p>$1280</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
            <swiper-slide>
                <img className='w-1/3' src="https://img.freepik.com/free-photo/technology-electronic-devices_144627-10803.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="product_5" />
                <div className='p-2'>
                    <p>4.7</p>
                    <p className='text-xl font-bold'>HP ZenBook Laptop</p>
                    <p>$1480</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
            <swiper-slide>
                <img className='w-1/3' src="https://img.freepik.com/free-photo/closeup-digital-camera-with-lenses_181624-59757.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" alt="product_6" />
                <div className='p-2'>
                    <p>4.7</p>
                    <p className='text-xl font-bold'>Nikon g43</p>
                    <p>$1780</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
            <swiper-slide>
                <img className='w-1/3' src="https://img.freepik.com/free-photo/top-view-photography-accesories-with-copy-space_23-2148363427.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" alt="product_7" />
                <div className='p-2'>
                    <p>4.7</p>
                    <p className='text-xl font-bold'>Nikon g43 Pro</p>
                    <p>$1680</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
            <swiper-slide>
                <img className='w-1/3' src="https://img.freepik.com/free-photo/top-view-photography-accesories-with-copy-space_23-2148363427.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" alt="product_8" />
                <div className='p-2'>
                    <p>4.7</p>
                    <p className='text-xl font-bold'>Canon g5</p>
                    <p>$1680</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, recusandae.</p>

                </div>
            </swiper-slide>
        </swiper-container>
    );
};

export default Slider;
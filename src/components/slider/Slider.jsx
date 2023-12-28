import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./slide.css"

const Slider = () => {
    return (
        <Carousel showIndicators="false" >
            <div className='size flex'>
                <p>ok</p>
                <p>ok</p>
                <img className='w-full ' src="https://img.freepik.com/free-photo/light-forest-day-anime-background-illustration-generative-ai_1258-150804.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" />
                <p>ok</p>

            </div>
            <div className='size'>
                <p>ok</p>
                <p>ok</p>
                <img className='w-full ' src="https://img.freepik.com/free-photo/light-forest-day-anime-background-illustration-generative-ai_1258-150804.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" />
                <p>ok</p>
            </div>
            <div className='size '>
                <p>ok</p>
                <p>ok</p>
                <img className='w-full ' src="https://img.freepik.com/free-photo/light-forest-day-anime-background-illustration-generative-ai_1258-150804.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=sph" />
                <p>ok</p>
            </div>
        </Carousel>
    );
};

export default Slider;
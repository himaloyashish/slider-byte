import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Sliders = () => {

    const { data: products = [] } = useQuery({
        queryKey: ["AllProduct"],
        queryFn: async () => {
            const res = await axios("product.json");

            return res?.data;
        }
    })

    console.log(products);

    return (
        <Carousel>
            
            <div className='grid lg:grid-cols-2'>
                {
                    products.map(product=>(
                        <img src={product.image} alt="1" />
                    ))
                }
            </div>
        </Carousel>
    );
};

export default Sliders;
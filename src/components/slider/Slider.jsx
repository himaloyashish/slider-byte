import React from 'react';

import "./slide.css"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Slider = () => {


    const { data: products = [] } = useQuery({
        queryKey: ["AllProduct"],
        queryFn: async () => {
            const res = await axios("product.json");
            console.log({res});
            return res?.data;
        }
    })

    console.log(products);

    return (
        <swiper-container>

            {
                products.map(product => {
                    <swiper-slide>
                        <p>title {product.title}</p>
                    </swiper-slide>
                })
            }

        </swiper-container>
    );
};

export default Slider;
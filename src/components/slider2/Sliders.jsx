import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

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
            
            <div>
                {
                    products.map(product=>{
                        
                    })
                }
            </div>
        </Carousel>
    );
};

export default Sliders;
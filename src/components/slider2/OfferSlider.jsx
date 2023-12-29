import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const OfferSlider = () => {

    const [category, setCategory] = useState('television');
  

    const { data: products = [], refetch } = useQuery({
        queryKey: ["AllProduct"],
        queryFn: async () => {
            const res = await axios(`https://byte-ss.vercel.app/device/${category}`);
            
            return res?.data;
        }
    })
    
    if(category === 'television' || 'laptop'|| 'camera'){
        refetch()
    }
    refetch()


    console.log(products);

    return (
        <div className='md:flex justify-between  gap-3 w-full px-10 bg-[#FAE7F3] pt-10'>
            <div className='w-2/3'>
                <img className='' src="https://img.freepik.com/free-vector/modern-super-sale-promotion-bright-banner_1055-6985.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais" alt="Offer" />
            </div>
            <div className=' md:w-1/3 bg-slate-400'>
                <Tabs className={''}>
                    <TabList>
                        <Tab onClick={()=>setCategory('television')}><p className='h-3 w-3 rounded-md bg-orange-300'></p></Tab>
                        <Tab onClick={()=>setCategory('laptop')} ><p className='h-3 w-3 rounded-md bg-orange-300'></p></Tab>
                        <Tab onClick={()=>setCategory('camera')}><p className='h-3 w-3 rounded-md bg-orange-300'></p></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='bg-[#]  py-2 mb-2'>
                            {
                                products.map(product=> (
                                    <div className='lg:flex md:flex w-full justify-center gap-2 items-center mb-2'>
                                        <img className='md:w-1/3 object-fill' src={product.image} alt="img1" />
                                        <div>
                                            <p className='font-bold'>{product.rating}</p>
                                            <p className=''>{product.title}</p>
                                            <p className=''>$ {product.price}</p>
                                        </div>
                                    </div>
                                
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='bg-[#]  py-2 mb-2'>
                            {
                                products.map(product=> (
                                    <div className='lg:flex md:flex w-full justify-center gap-2 items-center mb-2'>
                                        <img className='md:w-1/3 object-fill' src={product.image} alt="img1" />
                                        <div>
                                            <p className='font-bold'>{product.rating}</p>
                                            <p className=''>{product.title}</p>
                                            <p className=''>$ {product.price}</p>
                                        </div>
                                    </div>
                                
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='bg-[#]  py-2 mb-2'>
                            {
                                products.map(product=> (
                                    <div className='lg:flex md:flex w-full justify-center gap-2 items-center mb-2'>
                                        <img className='md:w-1/3 object-fill' src={product.image} alt="img1" />
                                        <div>
                                            <p className='font-bold'>{product.rating}</p>
                                            <p className=''>{product.title}</p>
                                            <p className=''>$ {product.price}</p>
                                        </div>
                                    </div>
                                
                                ))
                            }
                        </div>
                    </TabPanel>
                 
                </Tabs>
            </div>
        </div>
    );
};

export default OfferSlider;
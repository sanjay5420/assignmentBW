'use client'
import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { FaHeart } from "react-icons/fa";
import Viber from '../viber/page';
import Link from "next/link";


const product = () => {
    const productList = [
        {id:1,topic: 'Baltra Cooker 5l',category: 'kitchen',productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', price:3500},
        {id:2,topic: 'Nike Shoes',category: 'Footwear',productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg',price:5000},
        {id:3,topic: 'Kitkat',category: 'sweets',productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg',price:300},
        {id:4,topic: 'Samsung Fridge',category: 'Home Appliances',productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg',price:5000},
        {id:5,topic: 'Baltra Cooker 5l',category: 'Kitchen',productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg',price:'Rs '+3500}
    ]
  return (
    <div className='flex bg-pink-100'>
      {
        productList.map((item => {
            return (
               <Link href={"/product/" + item.id}>
            <Card className="py-4 m-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="font-bold text-large font-bold">{item.topic}</p>
        <small className="text-default-500">{item.category}</small>
        <h4 className="">{item.price}</h4>
        {/* <Viber/> */}
      </CardHeader>
    
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={item.productImage}
          width={270}
        />
      </CardBody>
    </Card>
    </Link> )
        }))
      }
    </div>
  )
}

export default product

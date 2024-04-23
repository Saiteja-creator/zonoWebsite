"use client"

import React,{useState} from 'react'
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { BsArrowUpRight } from "react-icons/bs";
import CardItem from './CardItem';

export default function EachDistributorDes({eachDetails}){
    const {Heading,Paragraph,cartDetails,id} = eachDetails
    const cardDetails = eachDetails.cartDetails.cardPics
    const cardDesc=eachDetails.cartDetails.cardDesc
   const [img,setimg] = useState(cardDetails[0])
   const handleImage=(id)=>{
    const filterData= cartDetails.cardPics.filter((each)=>each.id===id)
    console.log(filterData,"filterData")
    setimg(filterData[0])
 }
  
    return (
        <div className="h-auto w-full flex flex-col lg:flex-row justify-between items-center bg-inherit" id={id}>
          <div className="flex flex-col w-full lg:w-2/5 mx-0 my-8 lg:m-12 p-0 md:p-4">
          <h1 className=" text-2xl lg:text-[32px] font-semibold text-left leading-none pb-4">{Heading}</h1>
          <p className="text-sm text-default-600 lg:text-[16px]">{Paragraph}</p>
          
          <div className="mt-6 md:mt-10 bg-opacity-0">
            <div>
              <div className="flex flex-col gap-2">
                {cardDesc.map((eachCardItem)=>(
                    <CardItem eachCardDetails={eachCardItem} key={eachCardItem.id} handleImage={handleImage} isActive={img.id===eachCardItem.id}/>
                ))}
              </div>
            </div>
          </div>
          </div>
          <Card className="md:w-full lg:w-3/5 md:flex flex-col p-0 justify-center items-center md:my-6 lg:my-12 lg:mx-6 hidden shadow-none">
            <CardBody className="flex flex-col justify-center items-center p-0">
              <div><Image className="text-center justify-center items-center w-full h-full"src={img.image}/></div>
            </CardBody>
          </Card>
        </div>
    )
}


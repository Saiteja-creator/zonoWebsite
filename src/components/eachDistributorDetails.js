"use client"

import React,{useState} from 'react'
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { BsArrowUpRight } from "react-icons/bs";
import CardItem from './cardItem';
import CardItemDetails from './cardItemDetails';

export default function EachDistributorDes({eachDetails}){
    const {heading,paragraph,cardDetailsmenu,image,id} = eachDetails
    
    const initialImage={image:image,isActive:true,id,}
   const [img,setimg] = useState(initialImage)

   const handleImage=(id)=>{
    const filterData= cardDetailsmenu.filter((each)=>each.id===id)
    console.log(filterData,"return the filterData")
    setimg(filterData[0])
 }
   
  
    return (
        <div className="h-auto w-full flex flex-col lg:flex-row justify-between items-center bg-inherit" id={id}>
          <div className="flex flex-col w-full lg:w-2/5 mx-0 my-8 lg:m-12 p-0 md:p-4">
          <h1 className=" text-2xl lg:text-[32px] font-semibold text-left leading-none pb-4">{heading}</h1>
          <p className="text-sm text-default-600 lg:text-[16px]">{paragraph}</p>
          
          <div className="mt-6 md:mt-10 bg-opacity-0">
            <div>
              <div className="flex flex-col gap-2">
                {cardDetailsmenu.map((eachCardItem)=>(
                    <CardItem eachCardDetails={eachCardItem} key={eachCardItem.id} handleImage={handleImage} isActive={img.id===eachCardItem.id}/>
                ))}
              </div>
            </div>
          </div>
          </div>
          {img.isActive?<Card className="md:w-full lg:w-3/5 md:flex flex-col p-0 justify-center items-center md:my-6 lg:my-12 lg:mx-6 hidden shadow-none">
          <CardBody className="flex flex-col justify-center items-center p-0">
            <div><Image className="text-center justify-center items-center w-full h-full"src={img.image}/></div>
          </CardBody>
        </Card>:<CardItemDetails activecardDes={img} />}
         
          
        </div>
    )
}


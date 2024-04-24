"use client"

import {Button} from "@nextui-org/react";
import { BsArrowUpRight } from "react-icons/bs";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import CardModelDetails from "./cardModelDetails";

export default function CardItem({eachCardDetails,handleImage,isActive}){
    const {id,heading,paragraph,cardItemImage} = eachCardDetails
    const onClickEvent=()=>{
    
        handleImage(id)
      }
    
    return (
        <div>
            <div>
            <Button className={`w-full md:flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black hidden px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white ${isActive?"bg-blue-500":"bg-white"}`}  onClick={onClickEvent} >
            <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1">{heading}
                <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600 flex flex-row">{paragraph} </span>
                    <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span></div>
                </div>
            <div className="bg-primary-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src={cardItemImage} /></div>
            </Button>
            </div>
            <div className="md:hidden">
                <CardModelDetails cardmodelDetails={eachCardDetails}/>
            </div>
        </div>
    )
}
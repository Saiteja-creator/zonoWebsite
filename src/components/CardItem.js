import {Button} from "@nextui-org/react";
import { BsArrowUpRight } from "react-icons/bs";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CardItem({eachCardDetails,handleImage,isActive}){
    const {paragraph,subtext,fontIcon,id} = eachCardDetails
    const onClickEvent=()=>{
    
        handleImage(id)
      }
    return (
        <div>
        <Button className={`w-full flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white ${isActive?"bg-blue-500":"bg-white"}`} onClick={onClickEvent}>
        <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1">{paragraph}
            <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600 flex flex-row">{subtext} </span>
                <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span></div>
            </div>
        <div className="bg-primary-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src={fontIcon} /></div>
        </Button>
        </div>
    )
}
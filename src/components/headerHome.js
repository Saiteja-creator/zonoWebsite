
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function HeaderHome(){
    return (
        <div className="header_section box-border">
        <Card className="md:flex hidden flex-col fixed z-20 w-full md:w-[90%] lg:w-[90.5%] xl:w-[91%] 2xl:w-[93%] h-16">
            <CardBody className="flex flex-row justify-between items-center">
            <div>
                <a href="/"><Image width={100} height={100} alt="logo" src="/ft_logo.png" /></a>
            </div>
            <div>
            <Button variant="light"><Image width={16} height={16} alt="logo" src="/curency_icon.svg" /> English <span><IoIosArrowDown /></span></Button>
            </div>
            </CardBody>
        </Card> 
        </div>
        
    )
}



import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function Header(){
    return (
        
        <Card className="flex flex-col w-3/4 h-16 fixed z-20">
            <CardBody className="flex flex-row justify-between items-center">
            <div>
                <Image width={100} height={100} alt="logo" src="/ft_logo.png" />
            </div>
            <div>
            <Button variant="light"><AiOutlineSecurityScan size={18} /> English <span><IoIosArrowDown /></span></Button>
            </div>
            </CardBody>
        </Card> 
        
    )
}
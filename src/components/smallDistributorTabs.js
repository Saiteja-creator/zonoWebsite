"use client"
import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { DistributorTabDetailsData } from "@/utils/routerdata";
import {Button} from "@nextui-org/react";

import React,{useState} from 'react';

const SmallDistributorTabs=()=>{
    const [activeTab, setActiveTab] = useState("zotok")
    const handleSetActive = (to) => {
        setActiveTab(to);
      };
    
    return (
        <div className="dis_tab_mobile md:hidden my-4">
        <h2 className="pb-4 md:text-sm lg:text-base font-semibold">I am a Distributors</h2>
        <div className="w-full h-auto overflow-x-scroll">
          <ul className="flex flex-row justify-round gap-6 border-none mb-3">
           {DistributorTabDetailsData.map((eachEle)=>(
            <li key={eachEle.id}>
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
                    <Link className="flex flex-row w-full gap-2" to={eachEle.id} spy={true} smooth={true} offset={-10} duration={500} key={eachEle.text} classID="w-full flex flex-row justify-center" onSetActive={handleSetActive}>
                    <Image width={20} height={20} alt="icon" src={eachEle.icon} /> {eachEle.text}
                    </Link>
                </Button>
            </li>
           ))}
            
          </ul>
          
         </div>
        </div>
    )
}

export default SmallDistributorTabs
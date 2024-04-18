"use client"

import React,{useState} from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { AiOutlineUser, AiOutlineApartment, AiOutlinePartition, AiTwotoneGift, AiTwotoneBulb, AiOutlineAppstore, AiOutlineDollar} from "react-icons/ai";

import Image from 'next/image';
import MenuIcon from '../../public/menuIcon.svg'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { RoutersPagesData } from "@/utils/RouterData";

export default function NavbarPagess(){
   return (
        <div>
        <nav className="w-1/18 md:flex flex-col hidden justify-between lg:ml-0 z-20 bg-slate-800 rounded-md text-gray-300 font-light text-dxs mx-auto py-4 h-screen fixed">
           
            <ul>
                {RoutersPagesData.map((eachRouter)=>(
                    <li className="flex flex-col pb-3 justify-center text-center" key={eachRouter.key}>
                        <Link>
                            <span className="mx-auto"><Image width={32} height={32} alt="icons" src={eachRouter.Icon}/></span>
                            <p>{eachRouter.page}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
   )
}
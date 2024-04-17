"use client"

import React,{useState} from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { AiOutlineUser, AiOutlineApartment, AiOutlinePartition, AiTwotoneGift, AiTwotoneBulb, AiOutlineAppstore, AiOutlineDollar} from "react-icons/ai";

import Image from 'next/image';
import MenuIcon from '../../public/menuIcon.svg'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function NavbarPages(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Home_icon.svg" />, text:"Home"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Knowus_icon.svg" />, text:"Know Us"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Brand_icon.svg" />, text:"Brands"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Distributors_icon.svg" />, text:"Distributors"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Retailers_icon.svg" />, text:"Retailers"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Ourapps_icon.svg" />, text:"Our Apps"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Advertisers_icon.svg" />, text:"Advertisours"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Partners_icon.svg" />, text:"Parterners"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Pricing_icon.svg" />, text:"Pricing"},
        {"icons":<Image className="pe-2" width={32} height={32} alt="icons" src="/menu_icons/Joinus_icon.svg" />, text:"Join Us"}
        
      ];
    return (
        <>
            <nav className="w-[68px] md:flex flex-col hidden justify-between lg:ml-0 z-20 bg-slate-800 rounded-md text-gray-300 font-light text-dxs mx-auto py-4 h-screen fixed">

              < ul>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={32} height={32} alt="icons" src="/menu_icons/Home_icon.svg" /></span>
                        <p>Home</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Knowus_icon.svg" /></span>
                        <p>Know Us</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Brand_icon.svg" /></span>
                        <p>Brands</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                    <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Distributors_icon.svg" /></span>
                        <p className="text-white font-semibold">Distributors</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Retailers_icon.svg" /></span>
                        <p>Retailers</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Ourapps_icon.svg" /></span>
                        <p>Our Apps</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Advertisers_icon.svg" /></span>
                        <p>Advertisours</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Partners_icon.svg" /></span>
                        <p>Parterners</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Pricing_icon.svg" /></span>
                        <p>Pricing</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto"><Image width={28} height={28} alt="icons" src="/menu_icons/Joinus_icon.svg" /></span>
                        <p>Join Us</p>
                    </li>
                    
                </ul>
                <div className="mx-auto justify-center text-center"><Image
                    src="/ft_nav_logo.png"
                    alt="Your Image"
                    width={80}
                    height={60}
                /></div>
                    </nav>
            <Navbar id="m_nav_sc" className="md:hidden" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                   
                    icon={ <Image id="m_menu_icon" className="outline-none" src="/menuIcon.svg" alt="Your Image" width={80} height={60} />}
                    />
                    <NavbarBrand>
                
                    <p className="font-bold text-inherit text-xl">ZöTok</p>
                    </NavbarBrand>
            </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                        color={
                            index === 3 ? "primary" : "foreground"
                        }
                        className="w-full"
                        href="#"
                        size="base"
                        >
                        {item.icons}
                        {item.text}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
        
    )
}
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
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
      ];
    return (
        <>
            <nav className="w-[64px] md:flex flex-col hidden justify-between m-2 lg:ml-2 z-20 bg-slate-800 rounded-md text-gray-300 font-light text-dxs mx-auto py-4 h-screen fixed">

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
                <div className="mx-auto ps-2 justify-center text-center p-2"><Image
                    src="/ft_logo.png"
                    alt="Your Image"
                    width={56}
                    height={40}
                /></div>
                    </nav>
            <Navbar className="md:hidden" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                   
                    icon={ <Image
                        src="/menuIcon.svg"
                        alt="Your Image"
                        width={56}
                        height={40}
                    />}
                    />
                    <NavbarBrand>
                
                    <p className="font-bold text-inherit">Zotok</p>
                    </NavbarBrand>
            </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                        color={
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        }
                        className="w-full"
                        href="#"
                        size="lg"
                        >
                        {item}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
        
    )
}
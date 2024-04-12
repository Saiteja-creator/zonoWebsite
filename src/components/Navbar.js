
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { AiOutlineUser, AiOutlineApartment, AiOutlinePartition, AiTwotoneGift, AiTwotoneBulb, AiOutlineAppstore, AiOutlineDollar} from "react-icons/ai";
import Image from 'next/image';

export default function Navbar(){
    return (
        
            <nav className="w-[68px] flex flex-col justify-between m-2 z-20 bg-slate-800 rounded-md text-gray-300 font-light text-dxs mx-auto py-4 h-screen fixed">

              < ul>
                    <li className="flex flex-col pb-4 justify-center text-center">
                        <span className="mx-auto bg-[#9ba4b3] p-1 rounded-lg"><AiOutlineUser size={18} /></span>
                        <p>Home</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                    <span className="mx-auto bg-gradient-to-r from-blue-500 to-green-500 lg:from-yellow-500 lg:to-pink-500 p-1 rounded-lg"><AiOutlineApartment size={18} /></span>
                        <p className="text-white font-semibold">Distributors</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                    <span className="mx-auto bg-[#9ba4b3] p-1 rounded-lg"><AiOutlinePartition  size={18}/></span>
                        <p>Brands</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                    <span className="mx-auto bg-[#9ba4b3] p-1 rounded-lg"><AiTwotoneGift size={18}/></span>
                        <p>Retailers</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                    <span className="mx-auto bg-[#9ba4b3] p-1 rounded-lg"><AiTwotoneBulb size={18}/></span>
                        <p>Know Us</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                    <span className="mx-auto bg-[#9ba4b3] p-1 rounded-lg"><AiOutlineAppstore size={18}/></span>
                        <p>Our Apps</p>
                    </li>
                    <li className="flex flex-col pb-4 justify-center text-center">
                    <span className="mx-auto bg-[#9ba4b3] p-1 rounded-lg"><AiOutlineDollar size={18}/></span>
                        <p>Pricing</p>
                    </li>
                    
                </ul>
                <div className="mx-auto ps-2 justify-center text-center p-2"><Image
                    src="/ft_logo.png"
                    alt="Your Image"
                    width={56}
                    height={40}
                /></div>
                    </nav>
        
    )
}
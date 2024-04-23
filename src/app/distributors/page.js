
import Navbar from "@/components/Navbar";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {AiOutlineUserAdd, AiTwotoneWarning, AiOutlineUser} from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Header from "@/components/Header";
import { IoCall } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import DistributorTabs from "@/components/DistributorsTabs";
import DistributorsModal from "@/components/DistributorsModal";
import DistributorTabDetails from "@/components/DistributorTabDetails ";

import { StaticTabDescription } from "@/utils/staticData";



const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

async function getBlocks() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=page`
  )
  return res.json();
}
export default async function distributor() {

  const data = await getBlocks();
  // const updatedDistData= convertDist(data.items.reverse())
  console.log(data)
   
    return (
      <main className="flex flex-row w-full justify-between m-0 md:p-0 md:bg-[#ECF0F6]">
        <DistributorTabs />
        
        
        
      
        <div className=" w-full md:w-[69%] lg:w-[74%] xl:w-[75%] 2xl:w-[75%] h-auto m-0 md:ml-[31%] lg:ml-[26.5%] xl:ml-[25%] 2xl:ml-[24.5%]">
        <Header />
        
        <div className="h-[379px] w-full  bg-[#E2E2FF] rounded-xl flex flex-col md:flex-row justify-around md:justify-between items-center md:mt-16 relative  z-0">
        <div>
        <h1 className="text-3xl md:text-3xl lg:text-[70px] font-semibold md:pl-8 lg:pl-12 text-center md:text-left leading-none pb-4">I am a <br />Distributor</h1>
        <p className="md:hidden text-xs mx-auto w-2/3 text-center">How does a Distributor get benefit of using the Zotok Platform?</p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image width={494} height={249} alt="banner" src="/D_image01.svg" />
            </div>
        </div>

        <div className="dis_tab_mobile md:hidden my-4">
        <h2 className="pb-4 md:text-sm lg:text-base font-semibold">I am a Distributors</h2>
        <div className="w-full h-auto overflow-x-scroll">
          <div className="flex flex-row justify-round gap-6 border-none mb-3">
            <Button variant="light" className="w-full gap-0 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-2 border-primary-400 rounded-none text-primary-400 text-sm px-0 mx-0">
            <CiUser size={20} />What does ZöTok do?
            </Button>
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
            <Image width={20} height={20} alt="icon" src="/Distributors/Ordering_icon.svg" /> Ordering
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Collections_icon.svg" />Collections
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Reconsolations_icon.svg" />Reconciliation
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Marketing_icon.svg" />Marketing
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Faq_icon.svg" />FAQ
            </Button> 
          </div>
         </div>
        </div>
        {/* <DistributorsModal /> */}
        
        <DistributorTabDetails staticData={StaticTabDescription}/>
        

        
        </div>
      </main>
    );
  }
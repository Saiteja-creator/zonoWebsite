

import {Button} from "@nextui-org/react";
import { Image} from "@nextui-org/react";

import Header from "@/components/header";


import { CiUser } from "react-icons/ci";
import DistributorTabs from "@/components/distributorsTabs";
import DistributorsModal from "@/components/distributorsModal";
import DistributorTabDetails from "@/components/distributorTabDetails ";
import convertdistData from "@/utils/convertContentful";

import { StaticTabDescription } from "@/utils/staticData";
import SmallDistributorTabs from "@/components/smallDistributorTabs";



const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

async function getBlocks() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=distributorTabDetails`,{ next: { revalidate: 2 } },
  )
  return res.json();
}
export default async function distributor() {

  const data = await getBlocks();
  const updateDistData=convertdistData(data)
 
  
  
   
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

        <SmallDistributorTabs/>
        {/* <DistributorsModal /> */}
        
        <DistributorTabDetails staticData={updateDistData}/>
        

        
        </div>
      </main>
    );
  }
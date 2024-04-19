import Image from "next/image";
import {Button} from "@nextui-org/react";
import HeaderHome from "@/components/HeaderHome";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className=" w-full md:w-[91%] lg:w-[92%] xl:w-[92%] 2xl:w-[94%] h-auto m-0 md:ml-[8.5%] lg:ml-[7.5%] xl:ml-[7%] 2xl:ml-[5.5%]">
        <HeaderHome />
        <div className="h-[379px] w-full bg-[#ffffff] flex flex-col md:flex-row justify-around md:justify-between items-center mt-16">
        <div className="w-1/2">
        <h1 className="text-3xl md:text-3xl lg:text-[44px] md:pl-8 lg:pl-12 text-center md:text-left leading-none pb-4">Simplify Buyer-Sellers Communication using AI on Whatsapp</h1>
        <p className="text-base md:pl-8 lg:pl-12 text-left">Process Orders, Invoices, Payments, Marketing, Ledgers - everything automatically from your ERP directly to WhatsApp</p>
        </div>
        <div className="w-1/2 text-center flex justify-center items-center">
          <Image width={494} height={249} alt="banner" src="/Home/home_simplify_img.png" />
        </div>
        </div>
      </div>
    </main>
  );
}

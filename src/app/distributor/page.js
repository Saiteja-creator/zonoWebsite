
import Navbar from "@/components/Navbar";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {AiOutlineUserAdd, AiTwotoneWarning} from "react-icons/ai";

export default function distributor() {
    return (
      <main className="flex flex-row w-1/4 m-1 fixed">
        <Navbar/>
        <Card className="w-3/4 p-4 ml-[60px] mt-2">
            <CardBody>
            <h2 className="pb-4 text-md font-semibold">I am a Distributors</h2>
            <div className="space-y-2 justify-start text-left">
            <button className="w-full flex gap-2 text-left p-30 bg-[#35A7E8] rounded-full px-4 py-3 text-white text-sm">
            <AiOutlineUserAdd size={18}/>What does Zono do?
            </button>
            <button variant="light" className="w-full flex gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-white text-sm">
            <AiOutlineUserAdd size={18}/>Ordering
      </button> 
      <button variant="light" className="w-full flex gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-white text-sm">
      <AiTwotoneWarning size={18}/>Collections
      </button> 
      <button variant="light" className="w-full flex gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-white text-sm">
      <AiOutlineUserAdd size={18}/>Reconciliation
      </button> 
      <button variant="light" className="w-full flex gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-white text-sm">
      <AiOutlineUserAdd size={18}/>Marketing
      </button> 
      <button variant="light" className="w-full flex gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-white text-sm">
      <AiOutlineUserAdd size={18}/>FAQ
      </button> 

            </div>
            </CardBody>
        </Card>
      </main>
    );
  }
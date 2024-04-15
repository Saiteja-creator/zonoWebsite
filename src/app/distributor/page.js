"use client"
import Navbar from "@/components/Navbar";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {AiOutlineUserAdd, AiTwotoneWarning, AiOutlineUser} from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Header from "@/components/Header";
import { IoCall } from "react-icons/io5";


export default function distributor() {
    return (
      <main className="flex flex-row w-full m-1 bg-[#ECF0F6]">
        
        <Card className="w-1/5 h-screen p-4 ml-[60px] mt-2 fixed">
            <CardBody>
            <h2 className="pb-4 text-md font-semibold">I am a Distributors</h2>
            <div className="space-y-2 justify-start text-left">
            <Button className="w-full flex justify-start gap-2 text-left p-30 bg-[#35A7E8] rounded-full px-4 py-3 text-white text-sm">
            <AiOutlineUserAdd size={18}/>What does Zono do?
            </Button>
            <Button variant="light" className="w-full flex justify-start gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-black text-sm">
            <AiOutlineUserAdd size={18}/>Ordering
      </Button> 
      <Button variant="light" className="w-full flex justify-start gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-black text-sm">
      <AiTwotoneWarning size={18}/>Collections
      </Button> 
      <Button variant="light" className="w-full flex justify-start gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-black text-sm">
      <AiOutlineUserAdd size={18}/>Reconciliation
      </Button> 
      <Button variant="light" className="w-full flex justify-start gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-black text-sm">
      <AiOutlineUserAdd size={18}/>Marketing
      </Button> 
      <Button variant="light" className="w-full flex justify-start gap-2 text-left p-30 hover:bg-[#35A7E8] rounded-full px-4 py-3 hover:text-black text-sm">
      <AiOutlineUserAdd size={18}/>FAQ
      </Button> 

            </div>
            </CardBody>

        </Card>
        
        <div className="w-3/4 h-auto m-2 ml-[24%]">
        <Header />
        
        <div className="h-[379px] w-full bg-[#E2E2FF] flex flex-row justify-between items-center mt-16">
        <h1 className="text-5xl font-semibold pl-8 text-left leading-none">I am a <br />Distributor</h1>
          <div>
            <ul>
              <li className="flex flex-col pb-4 justify-center text-center">
                        <span className=" bg-[#ffffff] p-1 rounded-full shadow-xl mx-auto"><AiOutlineUser size={18} /></span>
                        <p className="text-xs text-left leading-1">FMC <br />Distributor</p>
                    </li>
              
            </ul>
          </div>
        </div>
      
        <div className="h-auto w-full flex flex-row justify-between items-center bg-inherit">
          <div className="flex flex-col w-2/5 m-12 p-4">
          <h1 className="text-3xl font-semibold text-left leading-none pb-4">What can ZöTok do for me?</h1>
          <p>ZöTok allows you to communicate with all your principals and customers on a single mobile first system. It allows you to bring all your business conversations like orders, payments, schemes, campaigns, ledger etc, on an integrated WhatsApp like platform.</p>
          <div className="mt-10 bg-opacity-0">
            <div>
              <div className="flex flex-col gap-4">
              <Button className="w-full flex flex-row justify-between gap-2 text-left text-black px-8 py-10 bg-white shadow-lg">
            <div className="flex flex-col justify-start text-lg">Increased Turnover <span className="text-sm text-default-600">Zotok allows the customer to see...</span></div>
            <div> <AiOutlineUserAdd size={18}/></div>
            </Button>
            <Button className="w-full flex flex-row justify-between gap-2 text-left text-black px-8 py-10 bg-white shadow-lg">
            <div className="flex flex-col justify-start text-lg">Higher Profitability <span className="text-sm text-default-600">Zotok analytics identifies inactive...</span></div>
            <div> <AiOutlineUserAdd size={18}/></div>
            </Button>
            <Button className="w-full flex flex-row justify-between gap-2 text-left text-black px-8 py-10 bg-white shadow-lg">
            <div className="flex flex-col justify-start text-lg">Peace Of Mind <span className="text-sm text-default-600">Zotok frees up your time from...</span></div>
            <div> <AiOutlineUserAdd size={18}/></div>
            </Button>
              </div>
            </div>
          </div>
          </div>
          <Card className="w-3/5 flex flex-col p-10 justify-center items-center my-12">
            <CardBody className="flex flex-col justify-center items-center">
              <ul className="flex flex-row gap-10 pb-3">
                <li className="flex flex-col justify-center items-center text-sm"><span className="text-dxs">RETAILER</span> Santosh Traders</li>
                <li className="flex flex-col justify-center items-center text-sm"><span className="text-dxs">RETAILER</span> Sri Sai Traders</li>
                <li className="flex flex-col justify-center items-center text-sm"><span className="text-dxs">RETAILER</span> Patel Brothers</li>
              </ul>
              <div><Image className="text-center justify-center items-center w-full h-full"src="/Group 378216/Group 378216.png" /></div>
              <ul className="flex flex-row gap-10 pt-3">
                <li className="flex flex-col justify-center items-center text-sm"><span className="text-dxs">DISTRIBUTOR</span> Waghmare Foods</li>
                <li className="flex flex-col justify-center items-center text-sm"><span className="text-dxs">DISTRIBUTOR</span> Patwa Ayurved</li>
                <li className="flex flex-col justify-center items-center text-sm"><span className="text-dxs">DISTRIBUTOR</span> Daftari Agro</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="h-auto w-full flex flex-row justify-between items-center bg-inherit">
          <div className="flex flex-col w-2/5 m-12 p-4">
          <h1 className="text-3xl font-semibold text-left leading-none pb-4">What can ZöTok do for me?</h1>
          <p>ZöTok allows you to communicate with all your principals and customers on a single mobile first system. It allows you to bring all your business conversations like orders, payments, schemes, campaigns, ledger etc, on an integrated WhatsApp like platform.</p>
          <div className="mt-10 bg-opacity-0">
            <div>
              <div className="flex flex-col gap-4">
              <Button className="w-full flex flex-row justify-between gap-2 text-left text-black px-8 py-10 bg-[#92BEFF] shadow-lg">
            <div className="flex flex-col justify-start text-lg">Increased Turnover <span className="text-sm text-default-600">Zotok allows the customer to see...</span></div>
            <div> <AiOutlineUserAdd size={18}/></div>
            </Button>
            <Button className="w-full flex flex-row justify-between gap-2 text-left text-black px-8 py-10 bg-white shadow-lg">
            <div className="flex flex-col justify-start text-lg">Higher Profitability <span className="text-sm text-default-600">Zotok analytics identifies inactive...</span></div>
            <div> <AiOutlineUserAdd size={18}/></div>
            </Button>
            <Button className="w-full flex flex-row justify-between gap-2 text-left text-black px-8 py-10 bg-white shadow-lg">
            <div className="flex flex-col justify-start text-lg">Peace Of Mind <span className="text-sm text-default-600">Zotok frees up your time from...</span></div>
            <div> <AiOutlineUserAdd size={18}/></div>
            </Button>
              </div>
            </div>
          </div>
          </div>
          <Card className="w-3/5 flex flex-col p-10 my-12">
            <CardBody className="flex flex-col justify-center items-center">
              <div><Image className="text-center justify-center items-center w-full h-full object-cover"src="/I am DT • What does Zono do /Group 377860@2x.png" /></div>
              </CardBody>
              <CardFooter className="flex flex-col justify-start items-start">
                <h2 className="text-2xl pb-4 text-left justify-start">Increased Turnover</h2>
                <div className="flex flex-row ">
                  <div className="flex flex-row gap-2 pb-4 text-xs">
                    <div>
                      <RiCheckboxCircleFill color="#3AD394" size={32} /> 
                    </div>
                    ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.
                  </div>
                  <div className="flex flex-row gap-2 pb-4 text-xs">
                    <div>
                    <RiCheckboxCircleFill color="#3AD394" size={32} />
                    </div>
                    ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.</div>
                  </div>
                <div className="flex flex-row">
                  <div className="flex flex-row gap-2 pb-4 w-1/2 text-xs">
                    <div><RiCheckboxCircleFill color="#3AD394" size={32} /></div>
                     ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.</div>
                </div>
                <div className="w-full flex justify-end">
                <Button radius="full" className="bg-gradient-to-tr from-[#8546DB] to-orange-500 text-white font-semibold shadow-lg">
                <IoCall /> Let's Talk Business</Button></div>
              </CardFooter>
          </Card>
        </div>

        
        </div>
      </main>
    );
  }
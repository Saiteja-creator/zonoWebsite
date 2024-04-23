import { RiCheckboxCircleFill } from "react-icons/ri";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { IoCall } from "react-icons/io5";
import {Button} from "@nextui-org/react";
export default function CardItemDetails({activecardDes}){
    const {id,heading,paragraph,cardItemImage}= activecardDes
    console.log("heading",heading)
    return (
        <Card className="md:w-full lg:w-3/5 md:flex hidden flex-col p-2 md:my-6 lg:mb-12 lg:mx-6 shadow-none">
            <CardBody className="flex flex-col justify-center items-center w-full">
              <div className="w-full h-full p-0 mx-auto"><Image alt="banner" className="w-full h-full max-w-full" src="/Group 377860@2x.png" /></div>
              </CardBody>
              <CardFooter className="flex flex-col justify-start items-start px-6">
                <h2 className="text-2xl pb-4 text-left justify-start">{heading}</h2>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row gap-2 pb-4 text-xs lg:pe-8">
                    <div>
                      <RiCheckboxCircleFill color="#3AD394" size={30} /> 
                    </div>
                    ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.
                  </div>
                  <div className="flex flex-row gap-2 pb-4 text-xs lg:pe-8">
                    <div>
                    <RiCheckboxCircleFill color="#3AD394" size={30} />
                    </div>
                    ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.</div>
                  </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row gap-2 pb-4 w-1/2 text-xs lg:pe-8">
                    <div><RiCheckboxCircleFill color="#3AD394" size={30} /></div>
                     ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.</div>
                </div>
                <div className="w-full flex justify-end">
                <Button radius="full" className="bg-gradient-to-tr from-[#8546DB] to-orange-500 text-white font-semibold shadow-lg">
                <IoCall /> Let's Talk Business</Button></div>
              </CardFooter>
          </Card>
    )
}
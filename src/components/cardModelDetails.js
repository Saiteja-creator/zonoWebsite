"use client"
import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function CardModelDetails({cardmodelDetails}) {
  const {id,heading,paragraph,cardItemDetailsImage,cardItemImage} = cardmodelDetails
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
        <Button className={`w-full md:flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black  px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white "bg-white`}  onPress={onOpen} >
        <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1">{heading}
            <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600 flex flex-row">{paragraph} </span>
                <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span></div>
            </div>
        <div className="bg-primary-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src={cardItemImage} /></div>
        </Button>
      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="h-[600px]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{heading}</ModalHeader>
              <ModalBody>
                <Image src={cardItemDetailsImage} alt="eachCardImage" width={280} height={280}/>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

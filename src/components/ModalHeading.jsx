import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { TiDelete } from 'react-icons/ti'

const ModalHeading = ({task}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <h1 className="text-xl font-medium">
    {task.status !== "" ? "Change Status" : "Set Your Time"}
  </h1>
  )
}

export default ModalHeading

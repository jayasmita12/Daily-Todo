import {Modal,ModalOverlay,ModalContent,useDisclosure,Button,Flex } from "@chakra-ui/react";
import { IoMdClock } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import ModalHeading from "./ModalHeading";
import TimeSelect from "./TimeSelect";
import StatusSelect from "./StatusSelect";
import { useDispatch, useSelector } from "react-redux";
import { crudTodoAction } from "../store/TodoStore";
import { useEffect, useRef, useState } from "react";

const TimeModal = ({ task }) => {

  const {allTask , isLoading } = useSelector((store) => store.crudTodoReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()

  const startTime = useRef()
  const endTime = useRef()
  const status = useRef()
  const [statusBtn , setStatusBtn] = useState(true)
  
  useEffect(()=>{
    setStatusBtn(true)
  },[isOpen])

  const startTimeChange = (e)=>{
    startTime.current=e.target.value
  }
  const endTimeChange = (e)=>{
    endTime.current=e.target.value
  }
  const setFinalTime = () =>{
    if(allTask.find((newtask)=> newtask.id === task.id)){
      dispatch(crudTodoAction.sceduleTime({
        startTime:startTime,
        endTime:endTime,
        id:task.id
      }))
    }
    onClose()
  }
  const handleStatusChanged = (e) =>{
    status.current = e.target.value
    setStatusBtn(false)
  }
  const setFinalStatus = () =>{
    dispatch(crudTodoAction.loadingData({ isLoading:true}))
    setTimeout(()=>{
      onClose()
      dispatch(crudTodoAction.statusChange({ status: status.current , id:task.id}))
      dispatch(crudTodoAction.loadingData({ isLoading:false}))
     },1000)
   }

  return (
    <span className="ml-3 ">
      
      {task.status !== "" ? (
        <button
          className={`rounded-sm  ${task.color} disabled:bg-opacity-25  px-2  text-black`}
          onClick={onOpen}
          disabled={task.status == "closed"}
        >
          {task.status}
        </button>
      ) : (
        <button className="float-right" onClick={onOpen}>
          <IoMdClock className="text-xl  text-gray-700" />
        </button>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rowGap={4} mx={2} pb={5} px={4}>
          <div className="flex justify-between my-5">
            <ModalHeading task={task} />
            <button>
              <TiDelete
                onClick={onClose}
                className=" flex self-center text-2xl"
              />
            </button>
          </div>
          {task.status !== "" ?  <StatusSelect task={task} handleStatusChanged={handleStatusChanged}/> : <TimeSelect  startTimeChange={startTimeChange} endTimeChange={endTimeChange}/>}
          <Flex justifyContent="end">
            {task.status !== "" ? 
            <Button isLoading={isLoading} isDisabled={statusBtn} colorScheme="teal" onClick={setFinalStatus}>
              Set Status
            </Button>:
            <Button colorScheme="teal" onClick={setFinalTime}>
            Set Time
          </Button>}
          </Flex>
        </ModalContent>
      </Modal>
    </span>
  );
};
export default TimeModal;

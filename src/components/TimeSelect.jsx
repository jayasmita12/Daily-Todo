import { Flex  , Box , Input} from '@chakra-ui/react'
import React from 'react'
import flatpickr from "flatpickr";

const TimeSelect = ({startTimeChange , endTimeChange}) => {
  return (
    <Flex gap={2}>
    <Box w='full'>
      <label htmlFor="">Start</label>
    <Input type="time" onChange={startTimeChange} size="md" placeholder="Start time" />
    </Box>
    <Box w='full'>
      <label htmlFor="">End</label>
    <Input type="time" size="md" onChange={endTimeChange} placeholder="Start time" />
    </Box>
  </Flex>
  )
}

export default TimeSelect

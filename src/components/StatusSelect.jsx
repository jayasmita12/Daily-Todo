import { Select} from '@chakra-ui/react'
import React from 'react'

const StatusSelect = ({handleStatusChanged , task}) => {
  return (
    <div>
        <Select onChange={handleStatusChanged} placeholder={task.status}>
              <option value="closed">Closed</option>
              <option value="on track">On track</option>
              <option value="completed">Completed</option>
              <option value="time out">Time Out</option>
    </Select>
    </div>
  )
}

export default StatusSelect

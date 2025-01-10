import { TableCell } from '@mui/material';
import React, { memo } from 'react'
import TimeTableCell from './TimeTableCell';

const TiemTableRow = ({...props}) => {
  return (
    <>
      <TimeTableCell day="mon" {...props}/>
      <TimeTableCell day="tue" {...props} />
      <TimeTableCell day="wed" {...props} />
      <TimeTableCell day="thu" {...props} />
      <TimeTableCell day="fri" {...props} />
    </>
  )
}

export default memo(TiemTableRow)

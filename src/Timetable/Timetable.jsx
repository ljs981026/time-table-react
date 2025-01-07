import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import {withStyles} from '@mui/styles';
import React from 'react';
import TimetableRow from './TimeTableRow';
import { useRecoilValue } from 'recoil';
import { timeTableState } from '../store/store';

const hourData = Array.from({length: 11}, (i, j) => j + 9);
const styles = () => ({
  Table: {
    "& th,td" : {
      border: "1px solid rgba(224,224,224,1)"
    }
  }
})

const TimeTable = ({classes}) => {
  // const timeTableData = useRecoilValue(timeTableState)
  return (
    <>
      <TableContainer sx={{width: "80%", minWidth: "650px", marginLeft: "auto", marginRight: "auto", marginTop: "200px"}}>
        <Typography variant='h2' fontWeight={10} component="div" align='center'>
          강의시간표
        </Typography>
        <Table className={classes.Table}> 
          <TableHead>
            <TableRow>              
              <TableCell align='center' width={100}>시간</TableCell>
              <TableCell align='center' width={200}>월</TableCell>
              <TableCell align='center' width={300}>화</TableCell>
              <TableCell align='center' width={400}>수</TableCell>
              <TableCell align='center' width={500}>목</TableCell>
              <TableCell align='center' width={600}>금</TableCell>               
            </TableRow>
          </TableHead>
          <TableBody>
            {hourData.map((time, index) => (
              <TableRow key={index}>
                <TableCell align='center'>{`${time}:00 - ${time+1}: 00`}</TableCell>
                <TimetableRow timeNum={time} />
              </TableRow>
            ))}                        
          </TableBody>
        </Table>
      </TableContainer>
    </>    
  )
}

export default withStyles(styles)(TimeTable)
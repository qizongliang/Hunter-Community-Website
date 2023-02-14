import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { csTracks } from './const/csTrack'
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))

function CourseTable({ coursePath }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Semester</StyledTableCell>
            <StyledTableCell align="center" />
            <StyledTableCell align="center">Courses</StyledTableCell>
            <StyledTableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {coursePath.track.map((track) => (
            <TableRow key={track.id}>
              <TableCell>{track.name}</TableCell>
              {track.courses.map((course) => (
                <TableCell align="center" alignitems="center">
                  {course}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
function suggestedCoursePath(canTakeSummer, passedPreCalc) {
  if (canTakeSummer && passedPreCalc) {
    return 3
  } else if (canTakeSummer && !passedPreCalc) {
    return 1
  } else if (!canTakeSummer && !passedPreCalc) {
    return 0
  } else if (!canTakeSummer && passedPreCalc) {
    return 2
  }
  return 0
}

const Display = (summer, precal_passed) => {
  let coursePath = csTracks[suggestedCoursePath(summer, precal_passed)]

  return <CourseTable coursePath={coursePath} />
}
export default Display

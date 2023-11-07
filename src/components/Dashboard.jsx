import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DropDown from '../img/dropdown.jpg'

function createData(acc, thisMonth, ytd) {
    return { acc, thisMonth, ytd };
  }
  
  const rows = [
    createData('Salse', 123237, 223239),
    createData('Advertise', 93787, 82887),
    createData('Inventory', 392398, 388282),
    createData('Entertainment', 305, 937972),
    createData('Product', 2323,2232),
  ];

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [month] = useState('January');
    const [manage] = useState('Manage');
    const [manageOpen, setManageOpen] = useState(false);
    const [monthOpen, setMonthOpen] = useState(false);
    const [data] = useState([25, 50, 35, 15, 94, 10]);
    const svgRef = useRef()
    
    const manageList = [{name: 'Manage1'}, {name: 'Manage2'},{name: 'Manage3'}, {name: 'Manage3'},]
    const monthList = [{month: 'January'}, {month: 'February'},{month: 'March'}, {month: 'April'}, {month: 'May'}, {month: 'June'}, {month: 'July'},{month: 'August'}, {month: 'September'}, {month: 'October'}, {month: 'November'}, {month: 'Decmber'}]
    useEffect(()=> {
        //setting up svg
        const width  = 550
        const height = 170
        const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .style('background', 'white')
        // .style('margin-top', '50')
        .style('overflow', 'visible')

        //setting the scaling
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, width])
        const yScale = d3.scaleLinear()
            .domain([0, height])
            .range([height, 0])
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal)

        // set the axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(i => i + 1)
        // const yAxis = d3.axisLeft(yScale)
        //     .ticks(5)
        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`)
        svg.append('g')
            // .call(yAxis)

        //setting up data for svg
        svg.selectAll('.line')
            .data([data])
            .join('path')
                .attr('d', d => generateScaledLine(d))
                .attr('fill', 'none')
                .attr('stroke', 'lightgreen')
    }, [data])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div className='dashboard'>
        <div>
            <div className='cards'>
                <div className='carddetailes'>
                    <div style={{fontWeight: '500'}}>
                        Checking Account
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <div className='month'>
                                <div>
                                    {manage}
                                </div>
                                <div style={{ cursor: 'pointer'}} onClick={()=> setManageOpen(!manageOpen)}>
                                    <img src={DropDown} alt="Dropdown" style={{width: '8px', height: '8px', cursor: 'pointer'}} />
                                </div>
                            </div>
                            <div className='managDrop' style={manageOpen ? {} : {display: 'none'}}>
                                {manageOpen && manageList.map((man)=>(
                                    <div className='listManage'>{man.name}</div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <div className='month'>
                                <div>
                                    {month}
                                </div>
                                <div style={{ cursor: 'pointer'}} onClick={()=> setMonthOpen(!monthOpen)}>
                                    <img src={DropDown} alt="Dropdown" style={{width: '8px', height: '8px', cursor: 'pointer'}} />
                                </div>
                            </div>
                            <div className='managDrop' style={monthOpen ? {maxHeight: '332px'} : {display: 'none'}}>
                                {monthOpen && monthList.map((man)=>(
                                    <div className='listManage'>{man.month}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: '10px'}}>
                    <svg ref={svgRef}/>
                </div>
            </div>
            <div className='cards'>
                <div className='carddetailes'>
                    <div style={{fontWeight: '500'}}>
                        Total cash flow
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <div className='cashflow'/>
                        <div>
                            In
                        </div>
                        <div className='cashflow1'/>
                        <div>
                            Out
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div>
            <div className='cards'>
                <div className='carddetailes'>
                    <div style={{fontWeight: '500'}}>
                        Invioces own to you
                    </div>
                    <div className='salseinvoice' onClick={handleClickOpen}>
                        New Sales Invioce
                    </div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"New Salse Invioce"}
                        </DialogTitle>
                        <DialogContent>
                        {/* <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText> */}
                        <input type="file" id="myfile" name="myfile" multiple></input>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancle</Button>
                            <Button onClick={handleClose} autoFocus>
                            Ok
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div>

                </div>
            </div>
            <div className='cards'>
                <div className='carddetailes'>
                    <div style={{fontWeight: '500'}}>
                        Account watchlist
                    </div>
                </div>
                {/* <div>

                </div> */}
                <TableContainer component={Paper} style={{ height: '206px'}}>
                    <Table sx={{ minWidth: 340}} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Account</TableCell>
                            <TableCell align="right">This Month</TableCell>
                            <TableCell align="right">YTD</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ border: 0 }}
                            >
                            <TableCell component="th" scope="row">
                                {row.acc}
                            </TableCell>
                            <TableCell align="right">{row.thisMonth}</TableCell>
                            <TableCell align="right">{row.ytd}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>    
            </div>
        </div>
    </div>
  )
}

import * as React from 'react';
import { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography
} from '@mui/material';
import '../App.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, } from '@mui/material';
import TableAccordion from './TableAccordion.jsx';  
  
  export default function BasicTable() {


  return (
    <div className="">
    <TableContainer  className='table-container md:bg-[#f7a400]' >
    <h2 class="archive text-center text-[#d52720] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 sm:mt-12 md:mt-14">
  TECHNICAL DATA <br /> & SPECIFICATIONS
</h2>

 
 <div className="hidden md:block">

 <Table className="">
        <TableHead>
          <TableRow>
            <TableCell align="center">Types of Fans</TableCell>
            <TableCell align="center">Size(mm)</TableCell>
            <TableCell align="center">Size(inch)</TableCell>
            <TableCell align="center">R.P.M</TableCell>
            <TableCell align="center">Watts</TableCell>
            <TableCell align="center">Air Delivery</TableCell>
            <TableCell align="center">Service Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">Ceiling Fans</TableCell>
            <TableCell align="center">900<br />1200<br />1400</TableCell>
            <TableCell align="center">36<br />48<br />56</TableCell>
            <TableCell align="center">525<br />425<br />375</TableCell>
            <TableCell align="center">80<br />90<br />100</TableCell>
            <TableCell align="center">5000<br />8500<br />11500</TableCell>
            <TableCell align="center">62.50<br />94.40<br />115.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Pedestal Fans</TableCell>
            <TableCell align="center">550<br />600</TableCell>
            <TableCell align="center">22<br />24</TableCell>
            <TableCell align="center">1350<br />1300</TableCell>
            <TableCell align="center">110<br />135</TableCell>
            <TableCell align="center">6500<br />7500</TableCell>
            <TableCell align="center">59.09<br />55.55</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Exhaust Fans (Plastic Body)</TableCell>
            <TableCell align="center">200<br />250<br />300</TableCell>
            <TableCell align="center">8<br />10<br />12</TableCell>
            <TableCell align="center">1260<br />1260<br />1175</TableCell>
            <TableCell align="center">30<br />35<br />45</TableCell>
            <TableCell align="center">560<br />625<br />775</TableCell>
            <TableCell align="center">18.67<br />17.85<br />17.22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Exhaust Fans (Metal Body)</TableCell>
            <TableCell align="center">
              200<br />250<br />300<br />350<br />400<br />450<br />500<br />600
            </TableCell>
            <TableCell align="center">
              8<br />10<br />12<br />14<br />16<br />18<br />20<br />24
            </TableCell>
            <TableCell align="center">
              1350<br />1350<br />1350<br />1350<br />1350<br />1200<br />1200<br />1200
            </TableCell>
            <TableCell align="center">
              40<br />50<br />50<br />90<br />90<br />105<br />155<br />185
            </TableCell>
            <TableCell align="center">
              451<br />600<br />750<br />1500<br />1500<br />2500<br />3835<br />3710
            </TableCell>
            <TableCell align="center">
              11.27<br />12.00<br />15.00<br />16.67<br />16.67<br />23.81<br />24.74<br />25.46
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Wall Bracket</TableCell>
            <TableCell align="center">450</TableCell>
            <TableCell align="center">18</TableCell>
            <TableCell align="center">1225</TableCell>
            <TableCell align="center">65</TableCell>
            <TableCell align="center">3900</TableCell>
            <TableCell align="center">60.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
</div>
<div>
      <TableAccordion />
</div>
<p class="text-center font-light mt-4 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl px-4">
    Rated Voltage: 230 ± 10V - AC Cycles: 50 Hz Type: Capacitors for all Fans
    10% Variation in air delivery & Power Consumption. <br />
    Note: All the specifications mentioned above are in accordance with 99-99% pure Copper Winding wire.
  </p>
    </TableContainer>

</div>


  );
}

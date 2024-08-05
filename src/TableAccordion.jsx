import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './App.css'
import ceilingFan from './images/ceiling-fan.svg'

export default function TableAccordion() {
  return (
    <div className="md:hidden">
        
  <Accordion sx={{backgroundColor:'#f7a400'}} className="bg-[]">
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
    >
        <img src={ceilingFan} width="50" alt="" />
        <span className="m-auto">
        Ceiling Fans
        </span>
    </AccordionSummary>
    <AccordionDetails>
    <table class="rounded-lg ">
    <thead class="">
      <tr>
        <th class="p-2">Size (mm)</th>
        <th class="p-2">Size (inch)</th>
        <th class="p-2">R.P.M</th>
        <th class="p-2">Watts</th>
        <th class="p-2">Air Delivery</th>
        <th class="p-2">Service Value</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="border-b border-white">
        <td class="p-4">900</td>
        <td class="p-4">36</td>
        <td class="p-4">525</td>
        <td class="p-4">80</td>
        <td class="p-4">5000</td>
        <td class="p-4">62.50</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">1200</td>
        <td class="p-4">48</td>
        <td class="p-4">425</td>
        <td class="p-4">90</td>
        <td class="p-4">8500</td>
        <td class="p-4">94.40</td>
      </tr>
      <tr class="">
        <td class="p-4">1400</td>
        <td class="p-4">56</td>
        <td class="p-4">375</td>
        <td class="p-4">100</td>
        <td class="p-4">11500</td>
        <td class="p-4">115.00</td>
      </tr>
    </tbody>
  </table>
    </AccordionDetails>
</Accordion>
        {/* /////////////////////////////// */}
  <Accordion sx={{backgroundColor:'#f7a400'}} className="bg-[]">
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
    >
        <img src={ceilingFan} width="50" alt="" />
        <span className="m-auto">
        Pedestal Fans
        </span>
    </AccordionSummary>
    <AccordionDetails>
    <table class="rounded-lg ">
    <thead class="">
      <tr>
        <th class="p-2">Size (mm)</th>
        <th class="p-2">Size (inch)</th>
        <th class="p-2">R.P.M</th>
        <th class="p-2">Watts</th>
        <th class="p-2">Air Delivery</th>
        <th class="p-2">Service Value</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="border-b border-white">
        <td class="p-4">550</td>
        <td class="p-4">22</td>
        <td class="p-4">1350</td>
        <td class="p-4">110</td>
        <td class="p-4">6500</td>
        <td class="p-4">59.09</td>
      </tr>
      <tr class="">
        <td class="p-4">600</td>
        <td class="p-4">24</td>
        <td class="p-4">1300</td>
        <td class="p-4">135</td>
        <td class="p-4">7500</td>
        <td class="p-4">55.55</td>
      </tr>

    </tbody>
  </table>
    </AccordionDetails>
</Accordion>
        {/* /////////////////////////////// */}
  <Accordion sx={{backgroundColor:'#f7a400'}} className="bg-[]">
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
    >
        <img src={ceilingFan} width="50" alt="" />
        <span className="m-auto">
        Exhaust Fans (Plastic Body)
        </span>
    </AccordionSummary>
    <AccordionDetails>
    <table class="rounded-lg ">
    <thead class="">
      <tr>
        <th class="p-2">Size (mm)</th>
        <th class="p-2">Size (inch)</th>
        <th class="p-2">R.P.M</th>
        <th class="p-2">Watts</th>
        <th class="p-2">Air Delivery</th>
        <th class="p-2">Service Value</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="border-b border-white">
        <td class="p-4">200</td>
        <td class="p-4">8</td>
        <td class="p-4">1260</td>
        <td class="p-4">30</td>
        <td class="p-4">560</td>
        <td class="p-4">18.67</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">250</td>
        <td class="p-4">10</td>
        <td class="p-4">1260</td>
        <td class="p-4">35</td>
        <td class="p-4">625</td>
        <td class="p-4">17.85</td>
      </tr>
      <tr class=" ">
        <td class="p-4">300</td>
        <td class="p-4">12</td>
        <td class="p-4">1175</td>
        <td class="p-4">45</td>
        <td class="p-4">775</td>
        <td class="p-4">17.22</td>
      </tr>
    </tbody>
  </table>
    </AccordionDetails>
</Accordion>
        {/* /////////////////////////////// */}
  <Accordion sx={{backgroundColor:'#f7a400'}} className="bg-[]">
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
    >
        <img src={ceilingFan} width="50" alt="" />
        <span className="m-auto">
        Exhaust Fans (Metal Body)
        </span>
    </AccordionSummary>
    <AccordionDetails>
    <table class="rounded-lg ">
    <thead class="">
      <tr>
        <th class="p-2">Size (mm)</th>
        <th class="p-2">Size (inch)</th>
        <th class="p-2">R.P.M</th>
        <th class="p-2">Watts</th>
        <th class="p-2">Air Delivery</th>
        <th class="p-2">Service Value</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="border-b border-white">
        <td class="p-4">200</td>
        <td class="p-4">8</td>
        <td class="p-4">1350</td>
        <td class="p-4">40</td>
        <td class="p-4">451</td>
        <td class="p-4">11.27</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">250</td>
        <td class="p-4">10</td>
        <td class="p-4">1350</td>
        <td class="p-4">50</td>
        <td class="p-4">600</td>
        <td class="p-4">12.00</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">300</td>
        <td class="p-4">12</td>
        <td class="p-4">1350</td>
        <td class="p-4">50</td>
        <td class="p-4">750</td>
        <td class="p-4">15.00</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">350</td>
        <td class="p-4">14</td>
        <td class="p-4">1350</td>
        <td class="p-4">90</td>
        <td class="p-4">1500</td>
        <td class="p-4">16.67</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">400</td>
        <td class="p-4">16</td>
        <td class="p-4">1350</td>
        <td class="p-4">90</td>
        <td class="p-4">1500</td>
        <td class="p-4">16.67</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">450</td>
        <td class="p-4">18</td>
        <td class="p-4">1200</td>
        <td class="p-4">105</td>
        <td class="p-4">2500</td>
        <td class="p-4">23.81</td>
      </tr>
      <tr class=" border-b border-white">
        <td class="p-4">500</td>
        <td class="p-4">20</td>
        <td class="p-4">1200</td>
        <td class="p-4">155</td>
        <td class="p-4">3835</td>
        <td class="p-4">24.74</td>
      </tr>
      <tr class="">
        <td class="p-4">600</td>
        <td class="p-4">24</td>
        <td class="p-4">1200</td>
        <td class="p-4">185</td>
        <td class="p-4">3710</td>
        <td class="p-4">25.46</td>
      </tr>
    </tbody>
  </table>
    </AccordionDetails>
</Accordion>
        {/* /////////////////////////////// */}
        <Accordion sx={{backgroundColor:'#f7a400'}} className="bg-[]">
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
    >
        <img src={ceilingFan} width="50" alt="" />
        <span className="m-auto">
        Pedestal Fans
        </span>
    </AccordionSummary>
    <AccordionDetails>
    <table class="rounded-lg ">
    <thead class="">
      <tr>
        <th class="p-2">Size (mm)</th>
        <th class="p-2">Size (inch)</th>
        <th class="p-2">R.P.M</th>
        <th class="p-2">Watts</th>
        <th class="p-2">Air Delivery</th>
        <th class="p-2">Service Value</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="">
        <td class="p-4">450</td>
        <td class="p-4">18</td>
        <td class="p-4">1225</td>
        <td class="p-4">65</td>
        <td class="p-4">3900</td>
        <td class="p-4">60.00</td>
      </tr>

    </tbody>
  </table>
    </AccordionDetails>
</Accordion>
    </div>
  );
}

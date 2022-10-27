import React  from 'react'
//import  { useState } from 'react'
import Container from 'react-bootstrap/Container';
// import CalendlyIframe from './CEM/calendyiframe';
import ReactPlayer from 'react-player'
// import { InlineWidget } from "react-calendly";
// import Calendly from './calendly';

export default function Grid() {
  return (
   <section className='first-section'>
    <div className='container'>
     <div className="row">
      <div className='col-md-6'>
        <div className='left-column-overflow'>
          <div className='text-center'>
            <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/team/avatar/277723/1355f0ac.png" alt="..." className="thumb-icon"/>
            <h4>FirstSales</h4>
            <h1>First Sales Demo Call</h1>
          </div>
        <div className='clock-wrapper'>
          <p><img src="https://cdn-icons-png.flaticon.com/128/3240/3240587.png" alt="..." className="clock-icon"/>    30 min</p>
          <p className='para-icon'> In this call, we will speak about First Sales and how it can help you get new customers</p>
         
        </div>
        <div className='calender-wrapper'>
             <calendar></calendar>
           <h1>Select a Day</h1>
{/* <CalendlyIframe/> */}
      {/* <Calendar/> */}
    </div> 
{/* <div className="calendly"> */}
{/* <calendar></calendar> */}
{/* <calendly></calendly> */}
        {/* <h1>Select a Day</h1> */}
        {/* <Calendly/> */}
        {/* <InlineWidget url="<Calendar/>" />
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div> */}

    </div>
</div>
<div className='col-md-6'>
  <div>
<img src="https://firstsales.io/wp-content/uploads/2022/04/udit-goenka-profile-picture-1024x1024.jpeg" alt="..." className="image2 img-fluid" />
<img src="https://firstsales.io/wp-content/uploads/2022/04/dashed-orange-circle.png" alt="..." className="image3"/>
</div>
<br></br>

<div>
  <div className='grey-wrapper'>
<p>Try FirstSales so you can generate more leads, acquire new customers and grow revenue faster. Let's schedule a call to show you how Firstsales.io will never.</p></div>
</div>
</div>

      </div>
      <div className='row'>
        <div className='col-md-12'>
        <div className='demo-content'>
        <h3>Hate scheduling calls? We got you covered.</h3>
  <h3>Watch the demo video here:</h3>
  </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
<div className="vid">
<ReactPlayer  width="100%"  url='https://youtu.be/WV67bTGxPBc' />
 </div>
 <div className='text-center mt-3'>
        <button className='btn1'>Start Generating Leads Today</button>
        </div>
        </div>
      </div>
   </div>
   </section>
  )
}

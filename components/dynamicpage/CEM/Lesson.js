import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Lesson (props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
<div >
      <Accordion open={open} toggle={toggle} >
        <AccordionItem className='cem-lesson-session'>
          <AccordionHeader targetId="1" > <h3>Lesson 01</h3></AccordionHeader>
          <AccordionBody accordionId="1">
            <p className='cem-lesson-session-paragragh'>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 ProductTableOfContents__ContentIcon-sc-x9k4hw-1 KQhMi hyxjdH"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"></path></svg>  The Psychology Behind Writing Great Emails  <b>·</b>  54 mins  <b>·</b>  1.27 GB</p>
          </AccordionBody>
        </AccordionItem >
        <AccordionItem className='cem-lesson-session'>
          <AccordionHeader targetId="2"> <h3> Lesson 02 </h3></AccordionHeader>
          <AccordionBody accordionId="2">
            <p className='cem-lesson-session-paragragh'><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 ProductTableOfContents__ContentIcon-sc-x9k4hw-1 KQhMi hyxjdH"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"></path></svg>  True Personalization  <b>·</b>  46 mins  <b>·</b>  957 MB</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className='cem-lesson-session'>
          <AccordionHeader targetId="3"> <h3>Lesson 03 </h3></AccordionHeader>
          <AccordionBody accordionId="3">
            <p className='cem-lesson-session-paragragh'>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 ProductTableOfContents__ContentIcon-sc-x9k4hw-1 KQhMi hyxjdH"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"></path></svg>  The BOSS Method: Body, Opening Line, Subject Line, Signature  <b>·</b>  44 mins  <b>·</b>  1010 MB
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className='cem-lesson-session'>
          <AccordionHeader targetId="4"><h3>Lesson 04 </h3></AccordionHeader>
          <AccordionBody accordionId="4">
           <p className='cem-lesson-session-paragragh'>
           <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 ProductTableOfContents__ContentIcon-sc-x9k4hw-1 KQhMi hyxjdH"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"></path></svg>  How to Scale Efficiently and Safely  <b>·</b>  (1h 17m 15s)  <b>·</b>  1.95 GB</p>
           
          </AccordionBody>
        </AccordionItem>

        <AccordionItem className='cem-lesson-session'>
          <AccordionHeader targetId="5"><h3>Bonus Session</h3></AccordionHeader>
          <AccordionBody accordionId="5">
            <div>
                <p className='cem-lesson-session-paragragh'>In this bonus video, we go over hypothetical outreaching scenarios, as well as how to build and challenge your sales team to get maximum results out of them</p>
            <p className='cem-lesson-session-paragragh'>Remember to download the image included in the resources section so that you can follow along with the video.</p>
            
            <p className='cem-lesson-session-paragragh'><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 ProductTableOfContents__ContentIcon-sc-x9k4hw-1 KQhMi hyxjdH"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm14 0H2v5.773l2.836-2.52a1 1 0 011.371.04l3.534 3.534 1.888-.755a1 1 0 01.687-.02l1.684.56V3zm0 8.72l-1.969-.655-2.16.864a1 1 0 01-1.078-.222L5.46 8.374 2 11.449V13h12v-1.28z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 6a2 2 0 114 0 2 2 0 01-4 0z"></path></svg>  CEM Organizational Mind Map.jpg  <b>·</b>  837 KB</p></div>
          <p className='cem-lesson-session-paragragh'><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 ProductTableOfContents__ContentIcon-sc-x9k4hw-1 KQhMi hyxjdH"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"></path></svg> BONUS VIDEO_ Ultimate Cold Email Example - and how to organize your team!.mp4  <b>·</b>  9 mins  <b>·</b>  106 MB</p></AccordionBody>
        </AccordionItem>

      </Accordion >
    </div>
  );
}



export default Lesson;
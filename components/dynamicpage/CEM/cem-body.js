import React from 'react'
import ReactPlayer from 'react-player'
import Lesson from './Lesson'

// import { useState } from 'react';
// import {
//   Accordion,
//   AccordionBody,
//   AccordionHeader,
//   AccordionItem,
// } from 'reactstrap';
// function Lesson (props) {
//     const [open, setOpen] = useState('1');
//     const toggle = (id) => {
//       if (open === id) {
//         setOpen();
//       } else {
//         setOpen(id);
//       }
//     };
  

const cembody = () => {
    
    return (
        <div>
            <div className='cem-learn'>
                <h1> <strong>Learn to Send Cold Emails at Scale</strong></h1>
                <div>
                    <p className='cem-learn-p'>
                        <div>This Masterclass is for you if:</div>
                        <ul>
                            <li>
                                You've <strong>never sent a cold outreaching email </strong> before.
                            </li>
                            <li>
                                You're <strong>not satisfied with the results </strong> of your current cold outreaching campaigns.
                            </li>
                            <li>
                                You want to unlearn ancient and outdated techniques and <strong> become a Modern Closer </strong> using Cold Email Outreach.
                            </li>
                            <li>
                                You want to learn to properly use FirstSales.io to <strong> outreach at scale, and safely.</strong>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='cem-video'>
                <ReactPlayer width="50%" url='<div class="w-video-wrapper w-css-reset" style="height: 100%; position: absolute; top: 0px; width: 100%; opacity: 1; background-color: rgb(0, 0, 0);"><video id="wistia_simple_video_76" crossorigin="anonymous" poster="https://fast.wistia.com/assets/images/blank.gif" aria-label="Video" src="blob:https://learn.firstsales.io/84914889-2586-4bf7-9945-12d89ad04cc7" controlslist="nodownload" playsinline="" preload="none" type="video/m3u8" x-webkit-airplay="allow" style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video></div>' />
                {/* https://youtu.be/WV67bTGxPBc */}
            </div>
            <div>
                <ul className='text'>
                    <strong> Free </strong>
                </ul>
            </div>
            <div className='cem-cold'>
                <h1><strong>Cold Email Masterclass (CEM) </strong></h1>
                <ul>
                    <li className='cem-course'>
                        Course <b>·</b> 6 Lessons
                    </li>
                    <p className='cem-tame'>
                        Learn to <strong> tame the uncertain world of cold email outreach </strong> by following best practices and learning from <strong> one of the top minds in Cold Email Outreach </strong> in the world.
                    </p>
                </ul>

            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className='cem-body-button'>I want to Master Cold Email Outreach</button>
            </div>

            <div className='cem-container'>
                <div className='text-section'>
                    <h1>"Crazyyy Valuable course"</h1>
                    - by Saurabh Singh
                </div>
                <div>
                    <img src="https://d31ezp3r8jwmks.cloudfront.net/9ibntx06bspz45j27bxprz29asjq" alt="..." className='image-section' />
                </div>
            </div>
            <div className='cem-contents'>
                <h1>Contents</h1>
                <p> <a href="https://firstsales.io" data-external-link-checked="true" target="_blank" className='cem-hernandez-links'>FirstSales.io</a> is proud to present Cold Email Masterclass (CEM)</p>

                <p><strong> Cold Email Outreaching Guide for Modern Closers. </strong></p>

                <p>Learn how to <strong>send cold emails the right way,</strong> using up-to-date techniques that will allow you to outreach to cold prospects at scale, safely.</p>

                <p>In this masterclass you will learn the 4 pillars of Cold Email Mastery:</p>
                <ol>
                    <li>The Psychology Behind Writing Great Emails</li>
                    <li>True Personalization</li>
                    <li>The BOSS Method: Body, Opening Line, Subject Line</li>
                    <li>How to Scale Efficiently and Safely</li>
                </ol>
                <p><strong>All four of these are equally important,</strong> we've only numbered them 1 through 4 so that you can watch them in an order that makes sense as you set up a workflow that will lead you to amazing <strong>cold email campaign results. </strong></p>
                <div>
                    {/* <h3 className='cem-lesson-session'><strong>Lesson 01 </strong></h3>
                    <h3 className='cem-lesson-session'> <strong>Lesson 02 </strong> </h3>
                    <h3 className='cem-lesson-session'> <strong>Lesson 03 </strong></h3>
                    <h3 className='cem-lesson-session'> <strong>Lesson 04 </strong></h3>
                    <h3 className='cem-lesson-session'> <strong>Bonus Session </strong></h3> */}

<div className='cem-lesson-session'>
      <Lesson/>
    </div>



                </div>
        
            </div>
            <div className='cem-last-section'>
                <div>
                    <img src="https://d31ezp3r8jwmks.cloudfront.net/1k05qv8gbykmwb7nqsnz571kb56r" alt="..." className='cem-last-image-section' />
                </div>
                <div className='cem-text-logo'>
                    <h1 className='cem-h1'>CEM Masterclass</h1>
                    <p className='cem-oscar'>by Oscar Hernandez (Founder & COO)</p>
                    <div className='cem-hernandez'>
                        <p>Oscar Hernandez is the COO and Co-Founder at <a href="http://pitchground.com/" data-external-link-checked="true" target="_blank" className='cem-hernandez-links'>PitchGround.com</a> and <a href="http://firstsales.io/" data-external-link-checked="true" target="_blank" className='cem-hernandez-links'>Firstsales.io</a></p>

                        <p className='cem-hernandez-p'>In order to be the best, you must learn from the best.</p>

                        <p>With 14 years of experience as a Cold Email Master, Oscar has generated over $7.9M in revenue from emails alone.</p>
                    </div>
                    {/* <div className='cem-social-link'> */}
                    <a href='' className='cem-body-social-link'>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 SocialLinks__Icon-sc-1dkoo1e-2 KQhMi hBVoxw"><title>Twitter</title><g clip-path="url(#clip0_4242_2015)"><g clip-path="url(#clip1_4242_2015)"><path d="M24 4.37006C23.1034 4.7805 22.1488 5.05033 21.17 5.17006C22.2083 4.53006 22.9793 3.53523 23.34 2.37006C22.39 2.95006 21.34 3.37006 20.21 3.59006C19.754 3.08866 19.1981 2.68819 18.5781 2.41437C17.9582 2.14054 17.2878 1.99942 16.61 2.00006C15.856 2.00777 15.1136 2.18624 14.4385 2.52208C13.7634 2.85791 13.1732 3.34236 12.7122 3.93904C12.2512 4.53572 11.9315 5.22912 11.7769 5.96712C11.6224 6.70513 11.6371 7.46856 11.82 8.20006C9.84996 8.09251 7.92553 7.5659 6.17521 6.65539C4.4249 5.74488 2.88897 4.47143 1.67 2.92006C1.03409 4.03254 0.838449 5.34304 1.12171 6.59274C1.40498 7.84244 2.14656 8.9405 3.2 9.67006C2.41565 9.64148 1.65014 9.42178 0.97 9.03006V9.10006C0.97 11.5401 2.67 13.5801 4.92 14.0501C4.19621 14.2485 3.43619 14.2759 2.7 14.1301C3.33 16.1401 5.15 17.6001 7.3 17.6401C6.2865 18.4622 5.11782 19.0719 3.86363 19.4327C2.60945 19.7935 1.29545 19.898 0 19.7401C2.24048 21.2177 4.86613 22.0037 7.55 22.0001C16.61 22.0001 21.55 14.3001 21.55 7.63006V6.98006C22.51 6.27006 23.34 5.38006 24 4.37006Z"></path></g></g><defs><clipPath id="clip0_4242_2015"><rect width="24" height="24"></rect></clipPath><clipPath id="clip1_4242_2015"><rect width="24" height="24"></rect></clipPath></defs></svg>
                    </a>
                    <a style={{ marginLeft: 15 }} href='' className='cem-body-social-link'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 SocialLinks__Icon-sc-1dkoo1e-2 KQhMi hBVoxw"><title>Facebook</title><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"></path></svg>
                    </a>

                    <a style={{ marginLeft: 15 }} href='' className='cem-body-social-link'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 SocialLinks__Icon-sc-1dkoo1e-2 KQhMi hBVoxw"><title>Instagram</title><g clip-path="url(#a)"><g clip-path="url(#b)"><path d="M12 7.98a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96Zm1.22 11.96c0-3.4-2.81-6.2-6.2-6.2a6.2 6.2 0 1 0 6.2 6.2Zm1.23-7.34a1.4 1.4 0 1 0-1.98 1.98 1.4 1.4 0 0 0 1.98-1.98Z"></path></g></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"></path></clipPath><clipPath id="b"><path d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                    </a>
                    <a style={{ marginLeft: 15 }} href='' className='cem-body-social-link'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 SocialLinks__Icon-sc-1dkoo1e-2 KQhMi hBVoxw"><title>Linkedin</title><path fill-rule="evenodd" clip-rule="evenodd" d="M20.45 20.45h-3.557v-5.569c0-1.329-.024-3.037-1.85-3.037-1.852 0-2.135 1.447-2.135 2.941v5.666H9.35V8.998h3.414v1.564h.048c.475-.9 1.636-1.85 3.368-1.85 3.604 0 4.27 2.373 4.27 5.457v6.282zM5.34 7.433a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM3.559 20.45h3.56V8.998h-3.56V20.45zM22.223 0H1.77C.794 0 0 .775 0 1.73v20.538C0 23.224.794 24 1.771 24h20.453c.979 0 1.776-.776 1.776-1.732V1.73C24 .775 23.203 0 22.224 0z"></path></svg>
                    </a>
                    <a style={{ marginLeft: 15 }} href='' className='cem-body-social-link'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 SocialLinks__Icon-sc-1dkoo1e-2 KQhMi hBVoxw"><title>Website</title><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 3.206a9.374 9.374 0 00-6.057 7.669h4.454c.1-2.564.542-4.897 1.197-6.686.125-.343.26-.672.407-.983zM12 .375a11.625 11.625 0 100 23.25 11.625 11.625 0 000-23.25zm3.25 2.831a9.373 9.373 0 016.057 7.669h-4.454c-.1-2.564-.542-4.897-1.197-6.686a12.214 12.214 0 00-.407-.983zm-.649 7.669c-.1-2.335-.503-4.399-1.058-5.913-.322-.881-.676-1.52-1.006-1.917-.345-.414-.535-.42-.537-.42-.002 0-.192.006-.537.42-.33.397-.684 1.036-1.006 1.917-.555 1.514-.958 3.578-1.058 5.913H14.6zM9.4 13.125h5.2c-.1 2.335-.503 4.399-1.058 5.913-.322.881-.676 1.52-1.006 1.917-.345.414-.535.42-.537.42-.002 0-.192-.006-.537-.42-.33-.397-.684-1.036-1.006-1.917-.555-1.514-.958-3.578-1.058-5.913zm-2.252 0H2.693a9.375 9.375 0 006.058 7.669c-.146-.311-.282-.64-.407-.983-.655-1.789-1.096-4.122-1.197-6.686zm8.102 7.669c.146-.311.282-.64.407-.983.655-1.789 1.096-4.122 1.197-6.686h4.454a9.375 9.375 0 01-6.057 7.669z"></path></svg>
                    </a>

                    <a style={{ marginLeft: 15 }} href='' className='cem-body-social-link'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="Typography__SVG-sc-168sy63-11 SocialLinks__Icon-sc-1dkoo1e-2 KQhMi hBVoxw"><title>Mailto</title><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V8.701l-11.605 4.352a1.125 1.125 0 0 1-.79 0L0 8.701V18ZM0 6.375V6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v.375c-.131 0-.265.023-.395.072L12 10.799.395 6.447A1.123 1.123 0 0 0 0 6.375Z"></path></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                    </a>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
export default cembody

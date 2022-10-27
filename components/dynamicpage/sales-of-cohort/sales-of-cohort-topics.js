import React from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

const cohorttopics = () => {
    return (
        <div>
            <div   style={{ height: '718px', width: '100%', backgroundColor: '#FF8E00' }}>
                <h2 style={{ fontSize: '45px', color: '#FFFFFF', paddingTop:'70px', paddingLeft:'100px' }}>Cohorts Available:</h2>

                <div className='cohort-enroll'>
                    <div className='cohort-enroll-content' style={{borderRadius:'20px'}} >
                        <h2>Sales Cohort 01: September 6th - September 27th, 2022</h2>
                        <p style={{ fontSize: '18px' }}>(Every Tuesday)</p>
                        <h2 style={{ fontSize: '24px' }}>9 AM Pacific Time</h2>
                        <button className='cohort-topic-button'style={{width:'201px',height:'70px'}} >Enroll Now</button>
                    </div>
                    <div className='cohort-enroll-content' style={{ width: '313px', height: '426.39px', backgroundColor: 'white', borderRadius:'20px' }}>
                        <h2 style={{ fontSize: '24px', width: '213px', height: '144px', textAlign:'center' }}>Sales Cohort 02: October 4th - October 26th, 2022, 2022</h2>
                        <p style={{ fontSize: '18px', textAlign:'center' }}>(Every Tuesday)</p>
                        <h2 style={{ fontSize: '24px' }}>9 AM Pacific Time</h2>
                        <button style={{ backgroundColor: "#0071FF",width:'162px', height:'60px' }} className='cohort-topic-button'>Enroll Now</button>
                    </div>
                    <div className='cohort-enroll-content' style={{ width: '313px', height: '426.39px', backgroundColor: 'white' , borderRadius:'20px'}}>
                        <h2 style={{ fontSize: '24px', width: '213px', height: '144px' }}>Sales Cohort 03:</h2>
                        <p style={{ fontSize: '18px' }}>(Every Tuesday)</p>
                        <h2 style={{ fontSize: '24px' }}>TBD</h2>
                        <button style={{ backgroundColor: "#0071FF", width:'162px', height:'60px' }} className='cohort-topic-button'>Enroll Now</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <h2 className='cohort-enroll-heading'>Topics:</h2>
                <div className='sales-cohort-column-section'>
                    <div className='cohort-topic-chart-first' style={{ display: 'flex',gap:'30px' }}>
                        <div className='sales-cohort-chart-all-section'>
                            <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                            {/* <div> */}
                            <div style={{paddingLeft:'20px'}}>
                                <h3>The Science of Persuasion:</h3>
                                <p>Control your voice, your pace, and the words you use for maximum results be it in person or over video calls.</p>
                            {/* </div> */} </div>
                        </div>

                        <div className='sales-cohort-chart-all-section'>
                            <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                            <div style={{paddingLeft:'20px'}}>
                                <h3>Cognitive Biases:</h3>
                                <p>How to do proper research on competitors, and on your own industry to discover new information that will help you get an edge.</p>
                            </div>
                        </div>

                        <div className='sales-cohort-chart-all-section'>
                            <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                            <div style={{paddingLeft:'20px'}}>
                                <h3>Storytelling:</h3>
                                <p>Master the art of cold outreaching, from identifying qualified leads to gathering intel on big potential deals.</p>
                            </div>
                        </div>

                    </div>
                    <div className='cohort-topic-chart-second' style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }}>
                            <div className='sales-cohort-chart-all-section'>
                                <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                                <div style={{paddingLeft:'20px'}}>
                                    <h3>Speaking and Voice Tone:</h3>
                                    <p>Control your voice, your pace, and the words you use for maximum results be it in person or over video calls</p>
                                </div>
                            </div>
                            <div className='sales-cohort-chart-all-section'>
                                <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
<div style={{paddingLeft:'20px'}}>
                                 <h3>Research and Development:</h3>
                                    <p>How to do proper research on competitors, and on your own industry to discover new information that will help you get an edge.</p>
                                </div>
                            </div>
                            <div className='sales-cohort-chart-all-section'>
                                <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                                <div style={{paddingLeft:'20px'}}>
                                    <h3>Cold Outreaching via Email and Social Media</h3>
                                    <p>Master the art of cold outreaching, from identifying qualified leads to gathering intel on big potential deals.</p>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className='cohort-topic-chart-third' style={{ display: 'flex' }}>
                        <div className='sales-cohort-chart-all-section'>
                            <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                            <div style={{paddingLeft:'20px'}}>
                                <h3>Finding Your Best Self:</h3>
                                <p>How to position yourself as a thought leader in your industry and organization, then leverage it for closing more deals.</p>
                            </div>
                        </div>
                        <div className='sales-cohort-chart-all-section'>
                            <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                            <div style={{paddingLeft:'20px'}}>
                                <h3>Building Healthy Habits:</h3>
                                <p>What are some of the habits of the most successful closers today? What are they doing that is helping them stay fit mentally and wake up as the apex predators of the sales world?</p>
                            </div>
                        </div>
                        <div className='sales-cohort-chart-all-section'>
                            <img src='https://firstsales.io/wp-content/uploads/2022/04/generate-01.png' alt="" style={{ width: '30.44px', height: '30.44px' }}></img>
                        <div style={{paddingLeft:'20px'}}>
                                <h3>How to Build A Killer Sales Team:</h3>
                                <p>Learn how to identify talented salespeople, harness their potential, and work together to build a strong sales team for your organization.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cohort-also-get'>
                    <h2>What You ALSO get</h2>
                </div>
                <div>
                    <h2 className='cohort-software-heading'>The Software: FirstSales</h2>
                    <div className='cohort-software'>
                        <div className='cohort-sofware-first-section'>
                            <img src='https://firstsales.io/wp-content/uploads/2022/07/IMG-37-1024x765.png' alt='' style={{width:'358.39px', height:'267.73px'}}></img>
                        </div>
                        <div className='cohort-software-second-section' style={{width:'592px', height:'319px'}}>
                            <p style={{width:'475px', height:'100px'}}>Every person enrolled in this cohort will receive one account at FirstSales.io with <b> 10 users for 1 year, valued at $3,600 – </b>absolutely free</p>
                        <p style={{width:'465px',height:'122px'}}>FirstSales.io is the Cold Email Outreaching Tool of choice for modern sales professionals and the ideal companion to all who wish to start filling up their pipelines with hot leads.</p>
                        </div>
                    </div>
                    <div className='cohort-bonus'>
                    <h2>Bonus</h2>
                </div>
                <div className='cohort-guest'>
                    <h2>Guest Lectures</h2>
                    <p>
You’ll also have access to guest lectures put on specifically for Modern Closers (Periodically throughout the year). You will have access to attend bonus lectures for life and continue to learn from some of the best closers on the internet today. We will also bring in some of the top closers and do a private webinar from time to time. This will be Cohort only content and will not be shared publicly.</p>
                </div>
                <div className='cohort-host'>
                    <h2>Meet The Hosts</h2>
                </div>
                <div className='cohort-oscar' style={{display:'flex'}}> 
<div className='cohort-oscar-first-section'>
    <h3>Oscar Hernandez and Udit Goenka have been building bootstrapped businesses together since 2010.</h3>
    <p>Oscar started in eCommerce and Udit started in Freelancing, both of which required different approaches to selling.</p>
   <p>Throughout their years selling online from eCommerce, to web hosting, to services, to SaaS, there is one thing they always excelled at: Their ability to build relationships and close deals.</p>
   <p>Today, Oscar and Udit are running PitchGround.com which is a $20m bootstrapped startup and FirstSales.io</p>
   <p><b>PitchGround</b>  is a SaaS marketplace focused on helping early-stage startups with user acquisition and initial traction through value-driven marketing campaigns.</p> 
<p style={{fontStyle:'italic'}}>Think Groupon for SaaS</p>
<p>Where they’ve helped launch over 100 SaaS, and generated over $7.5 Million in the last 3 years alone.</p>
<p><a href="https://firstsales.io"><b>FirstSales</b></a> is a Cold Email Outreaching platform.</p>
<p>If you’re looking to scale up your cold outreaching efforts and drive user acquisition via email, this is the tool for you.</p>
</div>
<div className='cohort-oscar-second-section' style={{display:'flex'}}>
    <div><img style={{width:'130px', height:'130px'}}  src='https://firstsales.io/wp-content/uploads/2022/07/new-profile-pic-1.webp' alt=''></img>
<p>Oscar Hernandez</p>
</div>
<div style={{paddingLeft:'80px'}}>
    <img style={{width:'130px', height:'130px'}} src="https://firstsales.io/wp-content/uploads/2022/07/udit-goenka-profile-picture-1024x1024.webp" alt=''></img>
<p  style={{paddingLeft:'20px'}}>Udit Goenka</p>
</div>
</div>
                </div>
                <div style={{width:'100%', display:'flex',justifyContent:'center'}}>
                <div className='cohort-second-last-section'>
    <h3>If you or your sales team are failing to hit their targets every single month/quarter… this is the perfect opportunity for a fresh start!</h3>
<p style={{width:'850px', height:'57px',marginLeft:'80px' }}>Discover how modern sales teams are closing bigger and better deals every single day, and how you can do it too!</p>
<button className='cohort-topic-button' style={{width:'202px', height:'70px', fontSize:'20px'}}>Enroll Now</button>
<p style={{color:'#0071FF'}}><b>100% Money Back Guarantee.</b></p>
<p style={{ fontSize:'16px'}}>This cohort will pay for itself, or you will get your money back.</p>
</div>
</div>
{/* <div className='cohort-question'>
<Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1" > <h3>How much is the cohort?</h3></AccordionHeader>
          <AccordionBody accordionId="1">
            <p className='cohort-question-paragraph'>
            $1,800 one-time sign-up investment.</p>
          </AccordionBody>
        </AccordionItem >
        <AccordionItem>
          <AccordionHeader targetId="2"> <h3> Can I join more than one cohort? </h3></AccordionHeader>
          <AccordionBody accordionId="2">
            <p className='cohort-question-paragraph'>Yes, you can join multiple cohorts, and you can get an additional 30% discount for attending future cohorts.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"> <h3>Can my team join the cohort with me? </h3></AccordionHeader>
          <AccordionBody accordionId="3">
            <p className='cohort-question-paragraph'>
            Yes, you can bring your team along. Each seat for your team member will be $1,800. There is a 10% discount if you purchase more than 10 seats together. Please send us an email at <a href="mailto:support@firstsales.io">support@firstsales.io</a>
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4"><h3>Do you also do private sales training for large organizations? </h3></AccordionHeader>
          <AccordionBody accordionId="4">
           <p className='cohort-question-paragraph'>
           Yes, we do, please reach out to us at support@firstsales.io
           </p>
           
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5"><h3>Can I record the cohort?</h3></AccordionHeader>
          <AccordionBody accordionId="5">
            
                <p className='cohort-question-paragraph'>
                No, for privacy reasons, as we will be discussing specific sales issues from everyone in the cohort. Please respect other members’ privacy as we respect yours. However, you do have access to us via the private Discord if you need any help. 
                </p>
            </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="6"> <h3>How does the 100% Money Back Guarantee work? </h3></AccordionHeader>
          <AccordionBody accordionId="6">
            <p className='cohort-question-paragraph'>
            It’s simple: If you take the entire cohort and apply everything we teach you in the cohort for 3 months straight without fail, and you do not make $1,800 worth of revenue, we will refund you 100%. You’ll need to submit documentation of the specific processes to ensure you’ve followed through with the work in order to qualify for a refund.
            </p>
          </AccordionBody>
        </AccordionItem>

      </Accordion > */}

</div>
                </div>
                
            </div>
        // </div>
    )
}

export default cohorttopics


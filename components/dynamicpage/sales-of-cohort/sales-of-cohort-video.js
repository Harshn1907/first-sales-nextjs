import React from 'react'
import ReactPlayer from 'react-player'
import Cohorttopics from './sales-of-cohort-topics'
import Carousel from 'react-bootstrap/Carousel';
const cohortvideo = () => {
    return (
        <div>
            <div className='sales-cohort'>
                <div className='cohort-video'>
                    <div className='cohort-video-first-section'>
                        <div>
                            <h2>If you failed to close a sale in the last 24 hours… watch this video Right Now: 👉</h2>
                            <button className='cohort-button'>Enroll Now</button>
                            <h3>10x to 50x Your Revenue in the next 12 months.</h3>
                            <p style={{
                                fontSize: '16px',
                                color: '#0071FF', marginLeft: '100px', paddingTop: '30px'
                            }}>
                                <b>100% Money Back Guarantee.</b></p>
                            <p style={{
                                fontSize: '16px', fontWeight: '400',
                                color: '#000027', marginLeft: '100px'
                            }}>
                                This cohort will pay for itself, or you will get your money back</p>
                        </div>
                    </div>

                    {/* <div className='cohort-video-second-section'>
                    
                    <ReactPlayer style={{width:'525px', height:'296px'}} url='https://youtu.be/UdDXgfjyZNs' />
                    
                </div> */}
                </div>
                <div className='sales-of-cohort-who'>
                    <div>
                        <h2 style={{ fontSize: '50px', color: '#000027', paddingTop: '100px', paddingLeft: '100px' }}>Who is this cohort for?</h2>
                    </div>
                    <div className='sales-of-cohort-contents' style={{ marginTop: '50px' }}>
                        <div className='sales-of-cohort-contents-first-section'>
                            <ul>
                                <li>You are a SaaS company, digital marketing, or web development agency trying to kickstart or bring your sales to the next level.</li>
                                <li>Your organization is generating less than $5mil in Annual Revenue, and you want to 10X your growth.
                                    For organizations with $5M+ in Revenue, Click Here.</li>
                                <li>You have lots of ideas about where to look for prospects, but you are struggling to find the right ones.</li>
                                <li>You’re willing to put in the work, but you also don’t have unlimited time to experiment.</li>
                                <li>You reach out to thousands of prospects, but don’t get to build meaningful relationships with any of them.</li>
                                <li>You want to perfect your sales process, but you don’t know where to begin.</li>
                            </ul>
                        </div>
                        <div className='sales-of-cohort-contents-second-section'>
                            <ul>
                                <li>You want to crush your sales goals, but the weight of not being able to sell is crushing you instead.</li>
                                <li>You want to quit and give up at times, but you also have a family to support.</li>
                                <li>You have built a sales team, but they are struggling to hit their sales targets every month.</li>
                                <li>You want to build a sales team, but have no idea where to start or how to train them.</li>
                                <li>You have a good product and competitive pricing, but are struggling to close deals while your competitor eats your lunch daily.</li>
                                <li>Maybe you’re already making a few sales here and there… but it’s not working out as anticipated.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2>If you identify with any of the above, keep reading 👇</h2>
                    </div>
                </div>


                <div className='cohort-orange-section-first'>
                    <h2 style={{ fontWeight: '700', fontSize: '45px', color: 'white', paddingTop: '100px', paddingLeft: '100px' }}>
                        What You’ll Get
                    </h2>
                    <p style={{ width: '580px', height: '72px', fontSize: '24px', color: '#FFFFFF', fontWeight: '600', paddingLeft: '100px', paddingTop: '15px' }}>
                        When you enroll you get access to 3 things, all-inclusive in the one-time sign-up fee:</p>
                </div>

                <div>
                    <div style={{ height: '162px' }}>
                        <h2 style={{ fontSize: '45px', color: '#000027', paddingLeft: '100px', paddingTop: '50px' }}>The Community</h2>
                    </div>
                    <div className='cohort-community'>
                        <div style={{ width: '558px', height: '558px', paddingLeft: '230px', paddingTop: '50px' }}>
                            <img src="https://firstsales.io/wp-content/uploads/2022/07/IMG-34.png" alt="" className='cohort-community-image
        '></img></div>
                        <div>
                            <p className='cohort-community-paragraph'>You will join an active community of Modern Closers. <br></br>
                                These are High-quality individuals that discuss ideas, get feedback, share wins, and help each other become better closers every day.<br></br>
                                We will be your support network as you venture into the unpredictable world of sales.<br></br>
                                You will get lifetime access to our private Discord server, and there are no recurring fees.</p></div>

                    </div>
                </div>

                <div>
                    <div>
                        <h2 style={{ width: '523px', height: '149px', fontSize: '45px', fontWeight: '700', color: "#000027", paddingLeft: '100px' }}>The Modern Closer Sales Cohort August 2022</h2>
                    </div>
                    <div className='cohort-modern'>
                        <div className='cohort-modern-section-first'>
                            <h3 >Some of the core principles of modern sales you’ll be learning are:</h3>
                            <ul style={{ paddingTop: '12px', fontSize: '18px', fontFamily: 'sans-serif', width: '430px', height: '227px' }}>

                                <li style={{ paddingTop: '12px' }}>How to Prospect <i>with Purpose.</i></li>
                                <li style={{ paddingTop: '12px' }}>The Psychology behind Decision Making and <i>how to harness its power.</i></li>
                                <li style={{ paddingTop: '12px' }}>How to Negotiate like your life depends on <i>it, and win.</i></li>
                                <li style={{ paddingTop: '12px' }}>How to build <i>long-lasting Partnerships.</i></li>
                                <li style={{ paddingTop: '12px' }}>The Template to build ICPs in any industry.</li>

                            </ul>
                        </div>
                        <div className='cohort-modern-section-second'>
                            <p className='cohort-modern-section-second-first-para' style={{ fontSize: '24px' }}><strong>Every month, you have the option to join the main cohort course: Unlimited Sales: A Cohort for Modern Closers. This cohort is a presentation of a few important ideas that will help you become a closer in your industry.  Anyone can be a salesperson, annoy people to death to make a transaction happen, and then move on… </strong></p>
                            <p className='cohort-modern-section-second-para'>However, only a select few become closers, an archetype of a professional who is<strong> the source of unlimited value </strong>for their organizations.You will learn how to become a true closer, how to build a pipeline of profitable business, and more importantly, <strong>how to keep it flowing</strong> month to month, week to week, day to day.</p>
                        </div>
                    </div>
                </div>





                
                    <div className='cohort-cards-slider'>
                        <div  style={{ width: '400px', height: '587px', backgroundColor: '#0071FF', borderRadius: '20px' }} >
                             <img src="https://firstsales.io/wp-content/uploads/2022/07/img-27.png" alt='' style={{height:'50px', width:'50px'}}></img>
                                <p>  Everything you need to learn will be delivered during the 4 weeks of live sessions. This will be a very information-dense program, so make sure you are ready and within an environment where you can pay attention and learn.					</p>
</div>
<div style={{ width: '400px', height: '587px', backgroundColor: '#0071FF', borderRadius: '20px' }}>
                            <img src="https://firstsales.io/wp-content/uploads/2022/07/img-28.png" alt='' style={{height:'50px', width:'50px'}}></img>

                                


                                    
                            <p> The course will be repeated every month at different times of the day so that it covers multiple time zones. You are free to join any cohort, and you can even join multiple times. The fees for joining a new cohort after your initial one are </p>

                               
                        </div>
                        <div style={{ width: '400px', height: '587px', backgroundColor: '#0071FF', borderRadius: '20px' }}>

                            <img src='https://firstsales.io/wp-content/uploads/2022/07/img-25.png' alt='' style={{height:'50px', width:'50px'}}></img>
 <p> We will meet once per week for 4 weeks straight over Zoom, where we will present the core ideas and we’ll discuss how they can be applied. Each week, we will also do a QA exactly understanding your pain point, and give your direction on how to become a closer.					</p>
</div>
                        <div style={{ width: '400px', height: '587px', backgroundColor: '#0071FF', borderRadius: '20px' }}>
                            
                                <img src='https://firstsales.io/wp-content/uploads/2022/07/img-26.png' alt='' style={{height:'50px', width:'50px', marginLeft:'50px'}}></img>
                                
                                    <p>
                                        There will be no homework or required reading during the cohort, but there will be a list of recommended reading for those of us who want to maximize what we get out of this cohort. You will also be required to complete the Cold Email Masterclass (which will be provided to you free of charge) before joining the cohort. This will ensure you’ve got the basics down prior to speaking advanced concepts within the cohort.					</p>

                        </div>
                    </div>
<div className='sales-structure' >
                    <h2>Structure:</h2>
                </div>

                <div className='cohort-session' style={{ display:'flex', marginTop:'100px',paddingLeft:'130px' }}>
                    <div className='cohort-session-first-part'>
                        <h3>Sessions:</h3>
                        <p>4 x live Zoom sessions over the course of 4 weeks.</p>
                    
                        <h3>Session Length:</h3>
                        <p>1.5 – 2 Hours + optional after hours and Q/A Sessions.</p>
                    </div>
                    <div className='cohort-instructor' style={{ width: '510px', height: '427.56px', display: 'flex' }}>
                        <h3>Instructors:</h3>
                        <div className='cohort-instrutor-name'>
                            <img style={{ width: '130px', height: '130px' }} src='https://firstsales.io/wp-content/uploads/2022/07/udit-goenka-profile-picture-1024x1024.png' alt=''></img>
                            <p style={{ width: '185px', height: '130px' }}> <b>Udit Goenka</b> <br></br>
                                Founder & CEO
                                PitchGround & Firstsales.io</p>
                        </div>
                        <div className='cohort-instrutor-name'>
                            <img style={{ width: '130px', height: '130px' }} src='https://firstsales.io/wp-content/uploads/2022/07/new-profile-pic-1.png' alt=''></img>
                            <p style={{ width: '185px', height: '130px' }}> <b>Oscar Hernandez
                            </b> <br></br>
                                Founder & COO
                                PitchGround & Firstsales.io</p>
                        </div>
                    </div>

                    <div>

                    </div>

                </div><Cohorttopics />
            </div>
        </div>
    )
}

export default cohortvideo

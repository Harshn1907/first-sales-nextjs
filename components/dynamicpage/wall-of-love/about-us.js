import React from 'react'
import ReactPlayer from 'react-player'
// import Footer from '../footer'



const Aboutus = () => {
    return (
        <div>
            <div className='wall-of-love-header'>
                <h1>About Us</h1>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>

                <img src="https://firstsales.io/wp-content/uploads/2021/02/littlesaas-team.webp" alt="" className='wall-of-love-image
        '></img>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
                <h2 className='wall-of-love-heading-second'>We are Little SaaS, Inc.</h2>
            </div>
            {/* width="1038" height="462.83 " */}
            <div>
                <p className='wall-of-love-paragraph'>We thrive as a team to help our customers grow by sharing the same vision and mission. </p>
                <p className='wall-of-love-paragraph--extra'>We are a 100% remote team since day one and are located around the world.</p>
                </div>
                <div style={{paddingTop:'20px'}}>
                <p className='wall-of-love-paragraph'>We shot this video when our entire team met for the first time in Bali, Indonesia 2019 for our yearly in-person meet-up.</p>
                <p className='wall-of-love-paragraph-underline'>FirstSales.io is a product by Team PitchGround that is owned and operated by its holding company Little SaaS, Inc.</p>
            </div>

            <div  style={{display:'flex', justifyContent:'center'}}>
                <ReactPlayer url='https://youtu.be/UdDXgfjyZNs' className='wall-of-love-video-aboutus' />
            </div>


            <div className="wall-of-love-card-group" >
                {/* <div style={{display:'flex', justifyContent:'center'}}> */}
                    <div style={{display:'flex',gap:'20px', justifyContent:'center'}}>
                        <div className='wall-of-love-card-first-part'>
                        <img className='wall-of-love-card-image' src="https://firstsales.io/wp-content/uploads/2021/02/oscar-hernandez.webp" alt=""></img>
                        <h5>Oscar Hernandez</h5>
                        <p>Co-Founder & COO</p>

                    </div>
                    <div className='wall-of-love-card-first-part'>
                        <img className='wall-of-love-card-image' src="https://firstsales.io/wp-content/uploads/2021/02/lukas-liesis.webp" alt=""></img>
                        <h5>Lukas Liesis</h5>
                        <p>Co-Founder & CTO</p>

                    </div>
                    <div className='wall-of-love-card-first-part'>
                        <img className="wall-of-love-card-title-udit" src="https://firstsales.io/wp-content/uploads/2022/04/udit-goenka-profile-picture.jpeg" alt=""></img>
                        <h5>Udit Goenka</h5>
                        <p>Founder & CEO</p>
                    </div>
                </div>
                <div style={{display:'flex',gap:'20px', justifyContent:'center'}}>
                    <div className='wall-of-love-card-second-part'>
                        <img  className='wall-of-love-card-image'src="https://firstsales.io/wp-content/uploads/2021/02/aishwarya-goenka.webp" alt=""></img>
                        <h5>Aishwarya Goenka</h5>
                        <p>Chief Content Officer</p>

                     </div>

                    <div className='wall-of-love-card-second-part'> 
                        <img className='wall-of-love-card-image' src="https://firstsales.io/wp-content/uploads/2021/02/maria-savinova.webp" alt=""></img>
                        <h5>Maria Savinova</h5>
                        <p>Graphic designer</p>

                     </div>
                    <div className='wall-of-love-card-second-part'>
                        <img className='wall-of-love-card-image' src="https://firstsales.io/wp-content/uploads/2021/02/valeriy-kharchuk.webp" alt=""></img>
                        <h5>Valeriy Kharchuk</h5>
                        <p>Head Of Knowledge</p>
                    
                </div>
                </div>
            </div>
            <div>
            {/* <Footer/> */}
            </div>
        </div>


    )
}

export default Aboutus

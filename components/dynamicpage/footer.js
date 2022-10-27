import React from 'react'
//import './footer.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

function footer() {
  return (
    <footer>
      <div className='first-page-footer'>
      <div className="container">
        <div className="row">
          <div className='col-lg-5'>
          <div className='footer-logo'>
<img src="https://firstsales.io/wp-content/uploads/2022/05/Logo_FS_fin.svg" alt="..."/>
</div>
<div className="footer-info-wrapper">
   
<h1>First Sales will never let your pipeline run dry.</h1>
    <p>Pitch Ground dba. little, Saas Inc <br></br> 2035 Sunset Lake Road Suite B-2, Newark <br></br> Delaware 19702, United States.</p>
    
    
    <p>support@firstsales.io</p>
</div>

            <div className="social-media-logo"> 
            <a href='' className='social-link'>
            <svg className="kadence-svg-icon kadence-facebook-alt2-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28"><title>Facebook</title><path d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z"></path>
				</svg>
            </a>
            <a style={{marginLeft:15}} href='' className='social-link'>
            <svg class="kadence-svg-icon kadence-twitter-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Twitter</title><path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
				</svg>
        </a>
        <a  style={{marginLeft:15}} href='' className='social-link'>
        <svg  className="kadence-svg-icon kadence-instagram-alt-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Instagram</title><path d="M7 1c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v10c0 1.657 0.673 3.158 1.757 4.243s2.586 1.757 4.243 1.757h10c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243v-10c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757zM7 3h10c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828v10c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172h-10c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828v-10c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM16.989 11.223c-0.15-0.972-0.571-1.857-1.194-2.567-0.754-0.861-1.804-1.465-3.009-1.644-0.464-0.074-0.97-0.077-1.477-0.002-1.366 0.202-2.521 0.941-3.282 1.967s-1.133 2.347-0.93 3.712 0.941 2.521 1.967 3.282 2.347 1.133 3.712 0.93 2.521-0.941 3.282-1.967 1.133-2.347 0.93-3.712zM15.011 11.517c0.122 0.82-0.1 1.609-0.558 2.227s-1.15 1.059-1.969 1.18-1.609-0.1-2.227-0.558-1.059-1.15-1.18-1.969 0.1-1.609 0.558-2.227 1.15-1.059 1.969-1.18c0.313-0.046 0.615-0.042 0.87-0.002 0.74 0.11 1.366 0.47 1.818 0.986 0.375 0.428 0.63 0.963 0.72 1.543zM17.5 7.5c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path>
				</svg>
        </a>
        <a style={{marginLeft:15}} href='' className='social-link'>
        <svg className="kadence-svg-icon kadence-facebook-group-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28"><title>Facebook Group</title><path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
				</svg>
        </a>
        <a style={{marginLeft:15}} href='' className='social-link'>
        <svg class="kadence-svg-icon kadence-linkedin-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><title>Linkedin</title><path d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
				</svg>
        </a>
        <a style={{marginLeft:15}} href='' className='social-link'>
        <svg class="kadence-svg-icon kadence-youtube-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><title>YouTube</title><path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path>
				</svg>
        </a>
            

    

</div>
          </div>
          <div className='col-lg-7'>
            <div className='row'>
              <div className='col-lg-4'>
              <div className="col1">
    <div>
      <h1 className='hd'>Resources </h1>
<a href="#" className='cem-foot1'>Blog</a>
<br></br>
<a href="#" className='cem-foot1'>Case Studies</a>
<br></br>
<a href="#" className='cem-foot1'>Cold Email Templates</a>
<br></br>
<a href="#" className='cem-foot1'>400+ Proven Subject Lines</a>
<br></br>
<a href="#" className='cem-foot1'>Firstsales Friday</a>
<br></br>
<a href="#" className='cem-foot1'>Cold Email Masterclass</a>
<br></br>
<a href="#" className='cem-foot1'>Knowledgebase</a>
<br></br>
    </div>
    <div>
        <h1 className='hd'>Important</h1>
    <a href="#" className='cem-foot1'>Schedule a demo</a>
    <br></br>
    <a href="#" className='cem-foot1'>Support</a>
    <br></br>
    <a href="#" className='cem-foot1'>App Status</a>
    <br></br>
    <a href="#" className='cem-foot1'>Community</a>
    <br></br>
    <a href="#" className='cem-foot1'>Brand Guidelines</a>
    <br></br>
    <a href="#" className='cem-foot1'>Changelogs</a>
    <br></br>
    </div>
    <div>
    <h1 className='hd'>Critical Read</h1>
    <a href="#" className='cem-foot1'>Cold Email vs. Email</a>
    <br></br>
    <a href="#" className='cem-foot1'>Marketing</a>
    <br></br>
    </div>
    </div>


              </div>
              <div className='col-lg-4'>
              <div className='col2'>
    <div>
    <h1 className='hd'>Solutions</h1>
    <a href="#" className='cem-foot1'>Email Outreach Tool</a>
    <br></br>
    <a href="#" className='cem-foot1'>Email Warm Up Tool</a>
    <br></br>
    </div>

<div>
    <h1 className='hd'>Company</h1>
    <a href="#" className='cem-foot1'>About</a>
    <br></br>
    <a href="#" className='cem-foot1'>Our Story</a>
    <br></br>
    <a href="#" className='cem-foot1'>Wall of Love</a>
    <br></br>
    <a href="#" className='cem-foot1'>Features</a>
    <br></br>
    <a href="#" className='cem-foot1'>Pricing</a>
    <br></br>
    <a href="#" className='cem-foot1'>Login</a>
    <br></br>
    <a href="#" className='cem-foot1'>Sign Up</a>
    <br></br>
    <a href="#" className='cem-foot1'>Login</a>
    <br></br>
    </div>

<div>
<h1 className='hd'>Firstsales Friday Podcast</h1>
    <a href="#" className='cem-foot1'>Apple Podcasts</a>
    <br></br>
    <a href="#" className='cem-foot1'>Spotify</a>
    <br></br>
    <a href="#" className='cem-foot1'>Google Podcast</a>
    <br></br>
    <a href="#" className='cem-foot1'>Amazon Music</a>
    <br></br>
    </div>
    </div>
              </div>
              <div className='col-lg-4'>
              <div className='col3'>
<div>
    <h1 className='hd'>Legal</h1>
    <a href="#" className='cem-foot1'>Privacy Policy</a>
    <br></br>
    <a href="#" className='cem-foot1'>Terms and Conditions</a>
    <br></br>
    <a href="#" className='cem-foot1'>Cookie Policy</a>
    <br></br>
    <a href="#" className='cem-foot1'>Data Security</a>
    <br></br>
    <a href="#" className='cem-foot1'>GDPR</a>
    <br></br>
    <a href="#" className='cem-foot1'>Subprocessors</a>
    <br></br>
    </div>

    <div>
    <h1 className='hd'>Reviews</h1>
    <a href="#"className='cem-foot1'>G2 Reviews</a>
    <br></br>
    <a href="#"className='cem-foot1'>Trustpilot Reviews</a>
    <br></br>
    <a href="#"className='cem-foot1'>Capterra Reviews</a>
    <br></br>
</div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        
        <div>
</div>
    
    
    <div>
        <button className='btn2'>Get a Demo</button>
        </div>
    </div>
    </div>
    </footer>
        
  )
}

export default footer




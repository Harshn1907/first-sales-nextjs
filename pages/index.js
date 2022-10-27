import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
//import Navbar from '../pages/dynamicpage/Navbar.js' 
import dynamic from"next/dynamic";
//import Navbar from 'pages/dynamicpage/Navbar'
//const Navbar = dynamic(() => import('./components/dynamicpage/Navbar'))
import Navbars from "../components/dynamicpage/Navbar"
import Grid from "../components/dynamicpage/grid"
import Footer from "../components/dynamicpage/footer"
// import OurStory from '../components/dynamicpage/wall-of-love/our-story';
// import Aboutus from '../components/dynamicpage/wall-of-love/about-us';
// import Cem from '../components/dynamicpage/CEM/cem-main';
// import Cemheader from '../components/dynamicpage/CEM/cem-header';
// import Cembody from '../components/dynamicpage/CEM/cem-body'
// import Cemfooter from '../components/dynamicpage/CEM/cem-footer'
// import CalendlyIframe from '../components/dynamicpage/calendyiframe';
// import Cohortvideo from '../components/dynamicpage/sales-of-cohort/sales-of-cohort-video';
// import Cohorttopics from '../components/dynamicpage/sales-of-cohort/sales-of-cohort-topics';
// import Casestudies from '../components/dynamicpage/resources-dropdown/case-studies';
// import Groundstudies from '../components/dynamicpage/resources-dropdown/pitch-ground-studies'
// import Fridayproadcast from '../components/dynamicpage/resources-dropdown/friday-proadcast';
// import Knowledge from '../components/dynamicpage/resources-dropdown/knowledgebase/knowledge';

export default function Home() {
  return <div>
    <Navbars/>
    <Grid/>
    <Footer/>

  {/* <Fridayproadcast/> */}
  {/* <Knowledge/> */}
    {/* <Cohortvideo/> */}
    {/* <Cohorttopics/> */}
    {/* <Casestudies/> */}
{/* <Groundstudies/> */}
    {/* <OurStory/> */}
    {/* <Aboutus/> */}
    {/* <Cem/> */}
    {/* <Cemheader/>
    <Cembody/>
    <Cemfooter/> */}
    {/* <CalendlyIframe/> */}
    </div>
}

import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import changelog from './changelog';
import Changelog from './changelog';
import Gettingstarted from './getting-started';

const knowledge = () => {
  return (
    <div>
       <div className='knowledge-navbar'>
       <a  href="#" aria-label="website logo"><img src="https://archbee-image-uploads.s3.amazonaws.com/3ceeII4HodFSFG1lSYr_B/PExFkapYk42DRlcF_sayi_logofsfin-black.png"  alt="" className='knowledge-navbar-logo'></img></a>
       </div>
    <div>

        <div>
        <nav className="sidebar card py-2 mb-4">
<ul className="nav flex-column" id="nav_accordion">
<div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" name='Search...' className="form-control" />
    {/* <label className="form-label" for="form1">Search</label> */}
  </div>
  {/* <button type="button" className='knowledge-search-box'> */}

  {/* </button> */}
</div>
	<li class="nav-item">
		<a class="nav-link" href="#"> Changelogs </a>
	</li>
    <li>
    <a class="nav-link" href="#"> Getting Started </a>
    </li>
	<li class="nav-item has-submenu">
		<a class="nav-link" href="#"> Contacts  </a>
		<ul class="submenu collapse">
			<li><a class="nav-link" href="#">Adding Bulk Tags to Existing Contacts</a></li>
		</ul>
	</li>
	<li class="nav-item has-submenu">
		<a class="nav-link" href="#"> Contents  </a>
		<ul class="submenu collapse">
			<li><a class="nav-link" href="#">How to Personalize Emails </a></li>
		</ul>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#"> Campaign + Complete Demo</a>
	</li>
    <li class="nav-item has-submenu">
		<a class="nav-link" href="#"> Email Warm-up  </a>
		<ul class="submenu collapse">
			<li><a class="nav-link" href="#">Guide for Email WarmUp </a></li>
		</ul>
	</li>
	<li class="nav-item has-submenu">
		<a class="nav-link" href="#"> Analytics  </a>
		<ul class="submenu collapse">
			<li><a class="nav-link" href="#">Compaign Level Data</a></li>
		</ul>
	</li>
</ul>
</nav>
        </div>
    </div>
      <div>
	  <Changelog/>
	  <Gettingstarted/>
	  </div>
    </div>
  )
}

export default knowledge

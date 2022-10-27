import React from 'react'
import ReactPlayer from 'react-player'

const changelog = () => {
  return (
    <div>
      <div className='changelog-first-section'>
      <p><img src="https://cdn-icons-png.flaticon.com/128/3240/3240587.png" alt="..." className="changelog-clock-icon"/>    156 min</p>
      <h1>Changelogs</h1>
      <p changelog-date-section>6th October 2022</p>
      <ul className='changelog-text-part'>
        <li>Added flow to better handle situations when the backend is down</li>
      </ul>
      <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/3LMAsBJRQSut13nUtU1RC_image.png?auto=format&ixlib=react-9.1.1&w=808&h=587&dpr=1&q=75' alt='' className='changelog-first-section-first-image'></img>
      
      <ul className='changelog-text-part'>
        <li>
        When uploading contacts, the user can now choose to download or not download invalid/duplicate contacts using this checkbox.
        </li>
        </ul>
        <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/ctVr4tXhsk87MXw5F4WQN_image.png?auto=format&ixlib=react-9.1.1&w=975&h=384&dpr=1&q=75' alt='' className='changelog-first-section-first-image'></img>
        <ul>
         {/* <li>While facing "template is empty" error on the sequence node, instead of opening the template list > searching related template > opening it for editing, you can now achieve the same with just one click.</li> */}
<li>Hints around workspace timezone in campaign analytics.</li>
<li>Fixed an edge case that'd earlier break the contact view layout.</li>
<li>When adding tags to a contact, existing tags now show up as suggestions.</li>
        </ul>
        <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/nS9K-87l-DuwdvHSYMyDM_image.png?auto=format&ixlib=react-9.1.1&w=624&h=329&dpr=1&q=75' alt='' className='changelog-first-section-first-image'></img>
<ul className='changelog-text-part'>
    <li>Backend Update: Contact stats make lesser API calls now.</li>
<li>Revamped the working for error notifications using a new API endpoint which should have a positive impact on the overall app's speed as notifications are loaded for the menu item on all pages.</li>
<li>Changed pagination for contacts, events, and warming.</li>
<li>The contact count for the campaign is now shown after clicking the icon.</li>
<li>The contacts icon in the campaigns table opens campaign filters now.</li>
{/* <li>Updated pagination for "analytics > sent tab" and "contact > events tab".</li> */}
{/* <li>In "analytics -> events" and "contact -> events", campaign related events now show option to view campaign.</li> */}
<li>Labels in tags and source dropdown menus show when they were last updated.</li>
</ul>
<p className='changelog-date-section'>21st September 2022:</p>
<ul className='changelog-text-part'>
    <li>The mails tab in campaign analytics makes use of the new API option.</li>
<li>Fixed: Tabs under the emails section in campaign analytics not making proper use of available space.</li>
<li>Fixed: Under A/B split templates and Sequences tab in campaign analytics, the "close list" and "list all" buttons affected unrelated cards.</li>
<li>Fixed: Clicking on the "details" button would sometimes collapse an unrelated event instead of expanding the one that was clicked.</li>
<li>Alerts with error messages for MAIL_ACCOUNT_FAILED_TO_DELIVER and IMAP_CHECK_FAILED events in the events tab.</li>
<li>In the analytics events tab, the long text is now wrapped in the next line for easier viewing and preventing such unequal event boxes.</li>
<li>"View" button to open the drawer in the analytics sent tab.</li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/bIescp9gDV8uqp9GMe3tZ_image.png?auto=format&ixlib=react-9.1.1&w=983&h=381&dpr=1&q=75' alt=''></img>

<p className='changelog-date-section'>16th September 2022:</p>
        <ul className='changelog-text-part'>
        <li>You can now delete all the last nodes in a sequence. </li>
<li>Added a drawer for each query in the sent tab to give more details about every email sent.</li>
 <li>Added relative time in contact's view's Events tab.</li>
<li>Backend Update: Each new deployment now takes less than 5 minutes against 15-25 minutes. This will now allow pushing more updates faster and fixing any potential bugs sooner. </li>
<li>Can now edit all of the contact's default fields post upload.</li>
<li>Bug Fix: Assigning to team members now works. </li>
<li>Contact Drawer View UI has been refreshed. </li>
<li>Improvement: The app is almost 62% faster now. </li>

        </ul >
        <p className='changelog-date-section'>12th September 2022:</p>
        <ul className='changelog-text-part'>
            <li>The campaign now has sending details. </li>
    
        </ul>
        <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/3PZzbDKIrvwzN43cBMPVJ_image.png?auto=format&ixlib=react-9.1.1&w=1053&h=264&dpr=1&q=75' alt=''></img>
        <ul className='changelog-text-part'>
       <li> Bug Fix: Tags menu empty state fixed.</li>
<li>Bug Fix: While uploading contacts, if the default column is not found, the upload doesn't autoselect the wrong column.</li>
<li>Bug Fix: Analytics is now working and accurate; it was behind by a couple of days.</li>
<li>Improved indexes on the database, which will improve load in several cases around events, logs, and contacts.</li>
<li>Processing improvements and making sending at a higher speed more stable.</li>
<li>Updates to warming to cover more edge cases when emails do not as expected.</li>
<li>Total contacts, overview stats, and tags updates to improve loading of contacts view & tags selection dropdown.</li>
<li>UX Update: UX review is mainly related to identifying the UX issues and focusing more on upcoming UI/design updates.</li>
<li>Contacts view fixes for some unique edge cases when the app was crashing.</li>
<li>Various updates to the contacts selection engine while sending the campaign. Some foundation for future updates for campaign contact’s filters.</li>
<li>New: New filters system to filter out contacts who will get the campaign next. On UI, now, you can see a preview of filtered contacts too.</li>

        </ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/750OXF2mTanTTZ5k2UcwN_image.png?auto=format&ixlib=react-9.1.1&w=1343&h=764&dpr=1&q=75' alt=''></img>
<ul className='changelog-text-part'>
    <li>Bug Fix: Some sent emails were not showing a full sent email preview on the app; it should show now.</li>
    <li>New: Manage contacts tags from sidebar.</li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/ANgFGgKSslbd6jRkb8dVS_image.png?auto=format&ixlib=react-9.1.1&w=1442&h=722&dpr=1&q=75' alt=''></img>
<ul className='changelog-text-part'>
<li>Filters are not required anymore inside the campaign. Instead, the campaign will be sent to all cold contacts if no filters are added.</li>
<li>Contacts enqueue to sequence fix.</li>
<li>Sending speed is better on a daily basis; this campaign is now sending out 540 emails per day.</li>
<li>Update: Now shows warnings instead of errors for missing signatures in the email preview.</li>
<li>Improvement: Warm analytics now shows the last seven days by default.</li>
<li>Mail account dropdown under "warm create" now stays in sync with newly added/removed accounts to warming.</li>
<li>While adding email warm-up, instead of hiding already used mail accounts, now they're shown as disabled options.</li>
<li>Improvement: Removed some leftovers from old filters so they don't impact current behavior.</li>
<li>Improvement: Filters now have a dropdown menu instead of the input field to select a source in campaign filters for better UX. </li>
</ul>
<p className='changelog-date-section'>7th September 2022:</p>
<ul className='changelog-text-part'>
<li>Imap timeout updated from 3s to 30s</li>
<li>Better Indexing. Impact sending speed for main campaigns & warming emails.</li>
<li>When the warm-up email is stopped/removed, it won’t be used in warming anymore, even if mail is in the queue to be sent.</li>
<li>Workspaces with missing timezone fixed. UI will ask to select timezone even when not in options. </li>
<li>Bug Fix: No account shown in the drop-down menu of email-warm-up now shows.</li>
<li>All slow queries are logged as errors from now which will expose missing indexes & inefficiencies better to fix speed-related issues faster. Previously those were simple logs and often lost in the flow of many other things.</li>
<li>Simplified filter for cold contacts.</li>
<li>Improved Error View to show exactly what's missing in the template when building them. </li>
<li>Visual Nodes now shows an error if templates are missing or not selected.</li>
<li>no more white backgrounds like this through inline styles while copy-pasting.</li>
<li>Warm email sending, target selection fix. It was affecting some emails to not send out warming emails.</li>
<li>You can now archive/unarchive all contents with a click of a button. </li>
</ul>
<p className='changelog-date-section'>1th September 2022:</p>
<ul className='changelog-text-part'>
<li>You can now edit the subject line from the template builder, saving you several clicks. </li>
<li>You can now edit the body block content from the template builder, saving you several clicks.</li>
<li>Introducing Block View to show you blocksize emails in your template builder. </li>
<li>Several UI Improvements on the Template Builder. </li>
<li>The editor now suggests if your subject lines are big or small. (We are soon introducing AI score for your emails - This is the first parameter released towards this major solution) </li>
</ul>


<p className='changelog-date-section'>31st August 2022:</p>
<ul className='changelog-text-part'>
<li style={{ fontWeight:'700'}}>Email Warm up is now out of beta. 🎉</li>
<li>Improved the loading performance of the editor. </li>
<li>Fixed the focus of the editor's modal. </li>
<li>Optimized the database for speed improvement.</li> 
<li>Improved algorithm for sending emails</li>
</ul>
<p className='changelog-date-section'>29st August 2022:</p>
<ul className='changelog-text-part'>
<li>You can now insert links to images.</li> 
<li>Improvement: Analytics time range has been improved.</li>
<li>You can now see the last sent email with the exact time stamp.</li>
</ul>
<p className='changelog-date-section'>19st August 2022:</p>
<ul className='changelog-text-part'>
<li>Multiple UI and performance updates across the app.</li>
</ul>
<p className='changelog-date-section'>18st August 2022:</p>
<ul className='changelog-text-part'>
<li>You can now create a template inside the sequences live in the campaign builder.</li>
{/* <li>You can now see which email was sent to whom in the Analytics > Sent Tab. Just click on the person's name for the Drawer to open for full view/details. </li> */}
<li>Firstsales.io now validates your CSV to ensure that there is a mandatory email column. </li>
<li>Mail account status updates.</li> 
<li>The whole platform is now mobile-friendly 🎉</li>
<li>Overall stability/backend updates.</li> 
<li>Database optimization for improved performance.</li> 
<li>Improved Campaign Builder speed and performance.</li>
</ul>
<p className='changelog-date-section'>3rd August 2022:</p>
<ul className='changelog-text-part'>
    <li>You can now delete contacts. Just select the email you want to delete and hit the delete button. You can also select all and delete the contacts. This action is irreversible. Once any contact is deleted, we cannot restore the data back.</li>
</ul>
     <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/36lcv4TnojSbop7yExM0C_image.png?auto=format&ixlib=react-9.1.1&w=1112&h=401&dpr=1&q=75' alt=''></img>
     <li>Rate limiting now only has one simplified option of setting up a 24-hour sending limit per email. </li>
     <p className='changelog-date-section'>2nd August 2022:</p>
<ul className='changelog-text-part'>
<li>UX Update: Updated UI for the Mail Settings of SMTP.</li>
<li>UX Update: Mail Settings now show how many emails were sent per email, so you can adjust your rate limit.</li>
</ul>

      <p className='changelog-date-section'>1st August 2022:</p>
<ul className='changelog-text-part'>
<li>The default analytics is now set to 3 months.</li> 
<li>Whatever you add in your contact filtering when setting up the campaign becomes the default.</li>
<li>Added 24h sending limit stats below the contact details in Step 1 inside the Campaign Builder when setting up the emails.</li>
    </ul>  
        <p className='changelog-date-section'>30th July 2022:</p>
        <ul className='changelog-text-part'>
        <li>Office 365 Integration is now live (as a public beta). Here is the guide.</li>
<li>UX updates around the template section.</li> 
<li>UI Validations across campaign builder. If any part of not selected properly, the app will tell you exactly what went wrong.</li>
        </ul>
        <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/4HGS2ijyxyPFOYOEgrjN0_cleanshot-2022-07-31-at-0248352x.png?auto=format&ixlib=react-9.1.1&w=1194&h=1330&dpr=1&q=75' alt=''></img>
        <p className='changelog-date-section'>26th July 2022:</p>
<ul className='changelog-text-part'>
<li>Zoho Integration is now live (as a public beta). Here is the guide.</li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/8O6mxrxp1y-tf4te5WeEV_image.png?auto=format&ixlib=react-9.1.1&w=1288&h=1308&dpr=1&q=75' alt=''></img>
<p className='changelog-date-section'>25th July 2022:</p>
<ul className='changelog-text-part'>
<li>You can now delete your workspace. This is a very risky feature and cannot be undone. The moment you delete the workspace, everything inside the workspace will delete forever. Be careful when using this. </li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/jtSUuvf0-6eFOzZ52kpgL_image.png?auto=format&ixlib=react-9.1.1&w=2044&h=1186&dpr=1&q=75' alt=''></img>
<ul className='changelog-text-part'>
<li>Improvement: Reports now only load when expanded. </li> 

<li>Improvement: The report now loads simultaneously even though none are expanded.</li>
<li>Improvement: Removed Emoji from Body block title. </li>
<li>Improvement: When selecting the SMTP email for email warm-up, the relevant IMAP is automatically selected.</li> 
<li>The relevant timezone is shown across the entire app in settings, campaign creation, and analytics.</li>
</ul>
<p className='changelog-date-section'>20th July 2022:</p>
<ul className='changelog-text-part'>
    <li> <b>New Feature:</b> You can now run A/B granular split testing inside email content at the paragraph level. For example - Your Introduction and  </li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/jPvt0f-lg3n0OUnJ-tLKB_image.png?auto=format&ixlib=react-9.1.1&w=1496&h=832&dpr=1&q=75' alt=''></img>
<ul className='changelog-text-part'>
<li>Improvement: Campaigns now self-heal if they get stuck because of the wrong config.</li>

<li>Added a loading statement when using a dropdown for a smoother experience if the number of items in the dropdown is more than ten.</li>
    </ul>   
       
    <p className='changelog-date-section'>19th July 2022:</p>
<ul className='changelog-text-part'>
<li>All invitation links now expire in 7-days (Security Purpose).</li>
<li>Improved: User invitation experience.</li>
<li>You can now view inactive members.</li> 
<li>Bug fix: Upon refresh, the invitation screen is no longer broken.</li>

<li>Campaign Builder now has a better filter option</li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/Cr2N_ePJDv9_R7mAnRPM9_cleanshot-2022-07-19-at-2340022x.png?auto=format&ixlib=react-9.1.1&w=2360&h=1108&dpr=1&q=75' alt=''></img>
<p className='changelog-date-section'>18th July 2022:</p>
<ul className='changelog-text-part'>
<li>Improvement: Pushed fix to this lag in custom fields dropdown.</li>
<li>Improvement: Onboarding has been improved.</li> 
<li>Improvement: Dropdown has been improved.</li>
<li>Improvement: Error Messages have been improved.</li>
</ul>
<p className='changelog-date-section'>14th July 2022:</p>
<ul className='changelog-text-part'>
<li>Improvement: We have improved the queue system for email sending to be more efficient. </li>
<li>The support button now has a pre-filled email for sending tickets easily. </li>
<li>UX Improvement: Added UX messages on Campaign Step-3 to have higher clarity on how emails are sent out.</li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/LZXgJa9HOQ6nG8wATP_Cn_image.png?auto=format&ixlib=react-9.1.1&w=1006&h=542&dpr=1&q=75' alt=''></img>
<ul className='changelog-text-part'>
<li>UX Improvement: Added timezone UI across various parts of the app. </li>
<li>Improvement: If IMAP credentials are bad, warming will be paused.</li>
<li>Improvement: Added instructions to edit view.</li>
<li><b>Big Improvement:</b> Implemented a brand new queue system. </li>
</ul>
<p className='changelog-date-section'>13th July 2022:</p>
<ul className='changelog-text-part'>
<li>Added a manual refresh button in the analytics individual tabs.</li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/G48xAGhUJDLbwmOjA7HT7_cleanshot-2022-07-13-at-1604422x.png?auto=format&ixlib=react-9.1.1&w=1950&h=1264&dpr=1&q=75' alt=''></img>
<ul className='changelog-text-part'>
<li><b>New Feature:</b> Rate limiting now allows you to add an email sending cap at the email level. Here is a quick guide on how to do it. ﻿  </li>

<li>New UX messages were added at various locations to improve onboarding. </li>
<li>New Demo Video Out with all the latest updates covered in this video.</li>
</ul>
<ReactPlayer  width="100%"  url='https://youtu.be/WV67bTGxPBc' className='changelog-first-video' />
<p className='changelog-date-section'>12th July 2022:</p>
<ul className='changelog-text-part'>
<li>Added CEM button on the side. </li>
<li>We now support more delimiters for uploading CSVs. </li>
<li>Adding personalization to the subject line is now easy. Use the (+) icon to make subject lines more personalized.</li>
</ul>
<img src='https://archbee-image-uploads.s3.amazonaws.com/3ceeII4HodFSFG1lSYr_B/xiK9CWWM-ykVuaDnmIqPS_personalized-subjectline.gif' alt=''></img>
<ul className='changelog-text-part'>
Chart view is now default in analytics.
UX Update: Email Warm-up & campaigns.
</ul>   

<p className='changelog-date-section'>11th July 2022:</p>
<ul className='changelog-text-part'>
<li>No more archived SMTP/Imap in the dropdown selection.</li>
<li>Improvement: Subject, Body, and Signature UI now have a cool drawer UI to make it look more organized and faster.</li> 
<li>Improvement: Database Indexing and Sequence system for improved email sending. </li>
<li>Improvement: Analytics now shows Month to Date date range.</li>
</ul>
<p className='changelog-date-section'>10th July 2022:</p>
<ul className='changelog-text-part'>


<li>With pleasure, we are happy to launch our Firstsales.io first course Cold Email Masterclass - The Ultimate Course for Modern Closers.</li>

</ul>
<p className='changelog-date-section'>7th July 2022:</p>
<ul className='changelog-text-part'>
<li>You can now add IMAP automatically when adding SMTP. (You get a check option).</li>
<li>Fix: The preview no longer shows if no blocks are selected in the template. </li>
<li>Improvement: Modals no longer re-load when we click on subject/body-block/signature.</li>
<li>Improvement: Earlier users could save even before changing something, but now save is enabled only after making a change(when editing signature, subject, and body block).</li>
<li>Added captions at various places with information to make it easy how something works.</li> 
<li>Improvement: Contacts now auto-map upon with a custom field while uploading making the uploading process up to 72% faster. </li>
<li>Text Improvement at various places across the platform.</li> 
<li>The user invite link if expired now shows a clear message.</li>
<li>Performance improvement across the entire platform.</li>
</ul>
<p className='changelog-date-section'>5th July 2022:</p>
<ul className='changelog-text-part'>
    <li>
4 updated list endpoints to view archived subjects, templates, body blocks, and signatures.</li>
<li>4 new endpoints to restore archived subjects, templates, body blocks, and signatures.</li>
</ul>
<p className='changelog-date-section'>4th July 2022:</p>
<ul className='changelog-text-part'>
    <li>One of the biggest updates to date, we have now moved to <b>AWS RDS Aurora serverless v2 </b>service. 

This means better performance, a faster app, and better stability. 🎉 

We might be the first SaaS in the email outreaching/sales category to move to serverless v2 giving "You" as our user an unparallel experience. 

We aren't stopping here, this entire week, we are going to push probably over 50+ performance updates, backend updates, and improved onboarding, in an attempt to help you launch more campaigns faster). Here are some results due to this upgrade:
Scaling up by need. Most users come to the app at the same time of the week, or day, for that moment database scales up automatically to the needed level
Everything is more consistently fast.
More Stability.</li>
<li>Optimized database use with notifications API instead of counting failed events.</li>
<li>New UI Improvement for DNS Updates.</li>

</ul>
<p className='changelog-date-section'>3rd July 2022:</p>
<ul className='changelog-text-part'>
    <li>New: Analytics for Email Warm-up is now out</li>
</ul>
       <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/usvMXc8UglH-7669-TwOh_cleanshot-2022-07-03-at-1922412x.png?auto=format&ixlib=react-9.1.1&w=3454&h=1568&dpr=1&q=75' alt=''></img>
       <p className='changelog-date-section'>2nd July 2022:</p>
<ul className='changelog-text-part'>
<li><b>Improvement:</b> Analytics data generation. Previously it was running but in some cases slowly, especially when more data. Now it will run ±15x faster.</li>
</ul>
<p className='changelog-date-section'>1st July 2022:</p>
<ul className='changelog-text-part'>
    <li><b>Brand New Analytics is now out 🎉</b></li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/lO6uqnMxyNZyKg5ZKoGOv_image.png?auto=format&ixlib=react-9.1.1&w=2916&h=1786&dpr=1&q=75' alt=''></img>
        
 <p className='changelog-date-section'>30th June 2022:</p>
<ul className='changelog-text-part'>

<li>Updated docs - Added new guides</li>
<li>Launched a Free Cold Email Template Resource. Click here to grab it.</li>
<li>New Feature: You can now duplicate your campaign with a single click.</li> 
<li>Improvement: Database architecture update to improve the performance.</li>
</ul>
 <p className='changelog-date-section'>29th June 2022:</p>
<ul className='changelog-text-part'>

<li>Updated docs - Added new guides.</li>
<li>Added Knowledgebase Link on the sidebar.</li>
<li>Update: We have optimized the codes for uploading the contacts. Now, uploading contacts and adding a new tag is 42% faster now than the current time.</li>
</ul>

 <p className='changelog-date-section'>28th June 2022:</p>
<ul className='changelog-text-part'>

<li>Update: Campaigns are no longer allowed to start sequence if any of the nodes are missing templates.</li>
<li>Update: Campaigns no longer start if sequences are not started.</li>
<li>Update: Campaigns now show you what things are missings so that you can fix your campaign before the "Start Campaign" button is available. </li>
<li>Update: Added more UI validations and modals for further confirmation. </li>
<li>Improvement: Individual campaign-level analytics now shows combined stats in Email Stats</li>
</ul>
        
 <p className='changelog-date-section'>25th June 2022:</p>
<ul className='changelog-text-part'>

<li>Huge New Solution Release: Email Warm-Up (in public beta)</li>
</ul>
 <p className='changelog-date-section'>23rd June 2022:</p>
<ul className='changelog-text-part'>

<li>New UI for the Events Tab inside Settings. </li>
<li>Fixed: Campaign loading state inside the single campaign analytics.</li>
<li>Updates: Pushed critical updates around campaigns. </li>
<li>New: You can now delete mail accounts in SMTP & IMAP.</li>
</ul>
 <p className='changelog-date-section'>16th June 2022:</p>
<ul className='changelog-text-part'>

<li>Update: Team members loading state fixed.</li>
<li>Update: Fixed default email "From" settings when adding SMTP. It was not adding the "email" value because of UI bug. Pushed an update to ensure this never happens.</li>
</ul>
 <p className='changelog-date-section'>15th June 2022:</p>
<ul className='changelog-text-part'>

<li>New UI for Human Touch Modal.</li>
<li>If there were issues, next to the analytics menu there will be an icon and indicator of how many events.</li>
<li>Added indicator in tabs.</li>
<li>Added automated check when clicking on analytics, it will point directly to events stream. Inside the events stream, if there are issues, that top part will be visible.</li>
</ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/CxACA4blclotNxsZ3jSGd_image.png?auto=format&ixlib=react-9.1.1&w=1510&h=842&dpr=1&q=75' alt=''></img>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/LpW4-orAIWwAildB18MYk_image.png?auto=format&ixlib=react-9.1.1&w=1124&h=532&dpr=1&q=75' alt=''></img>
<p className='changelog-date-section'>13th June 2022:</p>
<ul className='changelog-text-part'>
<li>New Campaign Builder.</li>
<li>Campaign Level deep analytics.</li>
    </ul>   
    <p className='changelog-date-section'>10th June 2022:</p>
<ul className='changelog-text-part'> 

<li>Fixed bug to not load some parts of these views, e.g. billing not loading at all IF sidebar is not visible, e.g. on low width screen like mobile.</li>
{/* <li>UI Analytics update for the Analytics > Sent tab.</li>  */}
<li>Added Email Onboarding Flows. </li>
<li>Added add onboarding and checklist help.</li>
</ul>
<p className='changelog-date-section'>7th June 2022:</p>
<ul className='changelog-text-part'> 
 

{/* <li>Added DNS checker. You can now detect whether you have added the right DNS settings prior to launching your campaign. By setting up the DNS records like DMARC, SPF, DKIM etc. correctly, you can increase the likely hood of landing in Inbox by up to 72%. You can find the DNS checker inside Settings > Emails & Domains. The DNS checker is available just under SMTP. </li> */}
        </ul>

        <img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/CeyKLh0I3F-84OyhFgmkX_image.png?auto=format&ixlib=react-9.1.1&w=1808&h=586&dpr=1&q=75' alt=''></img>

       <p className='changelog-date-section'>2nd June 2022: </p>
<ul className='changelog-text-part'> 
<li>The same mail account is now used for auto-follow up as the mail account used for the first email. 
However, the the email will swap to another email for the following reason:
mail account is paused
mail account is archived
mail account is removed</li>
<li>Event technical details in contact view is now less chaotic with more useful data.</li>
</ul>
<p className='changelog-date-section'>31st May 2022: </p>
<ul className='changelog-text-part'> 
<li>Brand new Auth Update using AWS. </li>
<li>Backend infrastructure around database to improve the performance speed by up to 20%. </li>
<li>New UI for Sent Tab inside analytics.</li>
</ul>

<p className='changelog-date-section'>27th May 2022: </p>
<ul className='changelog-text-part'> 
<li>Signature load fixed.</li>
<li>Contact upload UX fix.</li>
<li>You can now export contacts based on your filters from the Contact section.</li>
<li>Invitation link only for admin to see.</li>
<li>New Template builder is now out. 🎉</li>
<li>Ability to add tags in the campaign whom you do not want to send out emails. </li>
<li>Remove stuck queue item if for whatever reason it got stuck (it should not stuck at first place). Button is visible only if item was not sent for 15 minutes or more.</li>
       </ul>
<img src='https://archbee.imgix.net/3ceeII4HodFSFG1lSYr_B/9WR83-1XGBHGm7YiZ2OZE_image.png?auto=format&ixlib=react-9.1.1&w=987&h=425&dpr=1&q=75' alt=''></img>

       <p className='changelog-date-section'>26th May 2022: </p>
<ul className='changelog-text-part'> 
<li>CSV rows that doesn't have email will now automatically going to get removed to ensure your uploads are not interrupted, neither you have spend an hour cleaning it. </li>
<li>We have updated the token auth where the dashboard was reloading automatically at times. </li>
<li>We have just deployed another regional server in the US for load balancing. Users in the US will see the app loading very fast now. </li>
<li>SMTP Reset - Now you can reset the SMTP and update it again as needed. </li>
</ul>

<p className='changelog-date-section'>25th May 2022: </p>
<ul className='changelog-text-part'> 
<li>You can now use custom fields in the subject line.</li>
<li>You can now a add custom field and map it during uploading new CSVs.</li> 
<li>You can now add GIFs with a single click inside the editor.</li>


</ul>

<p className='changelog-date-section'>24th May 2022: </p>
<ul className='changelog-text-part'> 
<p>We are pleased to release this brand new feature known as "Human Touch"

This is one of the biggest feature releases and updates to date.</p>

<p>This is by far the most innovative feature that we have built that allows you to send emails as if a human is sending them. </p>

<p>It gives you complete control over how many emails will be sent out, with various internals, and days not just on the email level but also on the campaign level based on the timezone you want.</p>

<p>No other competitor has this feature and will scratch their head before they build it, and by the time they do, we will be far ahead with even more no-brainer solutions that we are building at the moment. This feature is an absolute game-changer to avoid spam traps, and increases your opens and possibly reply rate too.</p>

</ul>

<p className='changelog-date-section'>20th May 2022: </p>
<ul className='changelog-text-part'>
<p>We are happy to announce that we have now released one of the craziest solutions in the email outreach tool industry.</p>

<p>You can now add as many email accounts as you want to an existing campaign. Most traditional and existing email outreach tool only allows you to use one email per campaign.</p>

<p><b>Problem with that approach:</b> </p>
<li>Campaigns are not scale.</li>
<li>Multiple campaigns are needed for the sale campaign. </li>
<li>Slow lead flow.</li>
<li>Higher chances of risking your email getting flagged.</li>
<li>People keep too high of a frequency of sending multiple emails since the account gets banned.</li>

<p>We took it to a whole new level to build a modern and robust yet simple email outreach tool.</p>

<p><b>This is what will happen with this solution:</b></p>

<li>Emails will auto-rotate when sending out outreach campaigns.</li>
<li>You can now speed up your campaigns.</li>
<li>You will save many hours per month on manual labor work of creating 100s of replicating campaigns.</li>
<li>You will not face issue spam issues.</li>
<li>You will be able to scale up your sales efforts aggressively by upping your hot lead flow by up to 40-60%.</li>
<li>You will leave no outreaching footprint.</li>
<li>Many other benefits.</li>
<p>We are taking email outreach to a whole new level by building real solutions that will make an instant impact rather than working on "nice to have features".</p>

     </ul>
     <p className='changelog-date-section'>19th May 2022: </p>
<ul className='changelog-text-part'>
    <p>Firstsales.io MVP is now out of the public beta.</p>
</ul>


        </div>
      
    </div>
  )
}

export default changelog

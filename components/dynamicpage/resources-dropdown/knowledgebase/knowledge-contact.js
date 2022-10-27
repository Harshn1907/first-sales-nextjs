import React from 'react'
import ReactPlayer from 'react-player'

const knowledgecontact = () => {
  return (
    <div>
      <div>
      <div className='changelog-first-section'>
      <p><img src="https://cdn-icons-png.flaticon.com/128/3240/3240587.png" alt="..." className="contact-clock-icon"/>  2 min</p>
      <h1>Contacts</h1>
      <p>Looking to upload contacts on Firstsales.io? It's easy. </p>

<p>Simply follow this video and you should be completely sorted</p>
      </div>
      <div>
      <ReactPlayer  width="100%"  url='https://www.youtube.com/watch?v=CjCMpq5Uo9s&t=1s' className='contact-first-video' />
      </div>
      </div>
    </div>
  )
}

export default knowledgecontact

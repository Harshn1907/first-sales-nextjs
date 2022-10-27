import React from 'react'

const casestudies = () => {
  return (
    <div>
      <div className='case-heading'>
        <h1>Customers</h1>
      </div>
      <div>
      <img  src="https://firstsales.io/wp-content/uploads/2022/07/pitchground-case-study-768x432.png" className='case-image'></img>
      </div>
      <div>
      <a href="" rel="tag" className='case-pitch-customer' style={{fontWeight:'700', fontSize:'13px',textDecorationLine:'none'}}>CUSTOMERS</a>
        </div>
        <div>
        <a href="" rel="bookmark" className='case-how-ground' style={{fontWeight:'400', fontSize:'26px',textDecorationLine:'none'}}>How PitchGround used Firstsales.io to grow its Marketplace by 71%</a>
        </div>
        {/* <div>
          <img src='https://secure.gravatar.com/avatar/15f1ac878ed24ca2020739cab9af695a?s=25&d=mm&r=g' alt=''> <p> By Oscar Hernandez 
July 14, 2022 </p></img>
        </div> */}
    </div>
  )
}

export default casestudies

import React from 'react'

function Servicecomponent({serviceimage,servicetitle}) {
  return (

          <div className='serviceimageandtitle'>
            <div className='serviceimage'><img src={serviceimage} alt='serviceimage'></img></div>
            <div className='servicetitle'>{servicetitle}</div>
          </div>
  )
}

export default Servicecomponent
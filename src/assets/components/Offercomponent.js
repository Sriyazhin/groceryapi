import React from 'react'

function Offercomponent({id,codehere,offerpercentage,value,handleOfferChange,selected}) {
  return (
    <div className='offerdetails'>
            <div className='codeandradio'>
                <div className='code'>{codehere}</div>
                  <div className='radiobutton'>
                    <label>
                      <input type='radio' name="offer" value={value} onChange={handleOfferChange} ></input>                    
                    </label>
                  </div>
            </div>
            
              <div className='getfifty'>{offerpercentage}</div>
              <div className='codeline'><hr></hr></div>
              <div className='codedetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla pharetra, morbi nisl imperdiet id.</div>
    </div>
  )
}

export default Offercomponent
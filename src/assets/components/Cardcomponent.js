import React from 'react';

function Cardcomponent({dustbin,handledeleteclick,cardimagehere,titlehere,rectangle,ellipse,brandhere,count,handleAddClick,handleminusClick,productprice,oldmrp}) {
  
  return (
    <div className='forcards'> 
        <div className='forimage'><img src={require(`../images/${cardimagehere}.png`)} className='imagehere' height='120px' alt='cardimagehere'></img></div>

<div className='forproductdetails'>

    <div className='cardtitleandveg'>
      <div className='cardtitle'>{titlehere}</div>
      <div className='vegsymbol'><img src={rectangle} className='rectangle' alt='rectangle'></img><img src={ellipse} className='ellipse' alt='ellipse  '></img></div>
      </div>

    <div className='cardbrand'>{brandhere}</div>

    <div>
      <form className='forproductsadd'>
        <input type='button' name='addsub' className='minusbutton minus' value='-' onClick={handleminusClick} />
        <label for='addsub' className='numberofproducts'>{count}</label>
        <input type='button' name='addsub' className='plusbutton plus' value='+' onClick={handleAddClick} />
      </form>
      {/* <div className='minusbutton'><button className='minus'>-</button></div>
      <div className='numberofproducts'>{numberofproducts}</div>
      <div className='plusbutton'><button className='plus' onClick={addproduct}>+</button></div> */}
    </div>

</div>

<div className='savefifteen'>Save 15%</div>
  <div className='price'>₹{productprice}</div>

  <div className='oldmrp'>
    <div><button className='dustbinbutton' onClick={handledeleteclick}><img src={dustbin} className='dustbinimage' alt='dustbin'></img></button></div>
    <div>MRP ₹{oldmrp}</div>
  <hr></hr>
  </div>
    </div>
  )
}

export default Cardcomponent
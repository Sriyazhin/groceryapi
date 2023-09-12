
import rectangle from './assets/images/Rectangle.png';
import ellipse from './assets/images/Ellipse.png';
import offerpercent from './assets/images/couponpercent.png';
import vector from './assets/images/Vector.png';
import codimage from './assets/images/codavailable.png';
import returnimage from './assets/images/noreturn.png';
import shippingimage from './assets/images/freedelivery.png';
import paymentsimage from './assets/images/securepayment.png';
import contactlessimage from './assets/images/contactlessdelivery.png';
import dustbin from './assets/images/dustbin.png';

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cardcomponent from './assets/components/Cardcomponent';
import Offercomponent from './assets/components/Offercomponent';
import Servicecomponent from './assets/components/Servicecomponent';

const Calculations = () =>{
    const [newcard,setNewcard] = useState([]);
    const [discount,setDiscount] = useState(0);

    const offerdetailshere = [{codehere:'SANCHU200',offerpercentage:'Get 50% Off',valuehere:200},
  {codehere:'SANCHU100',offerpercentage:'Get 20% Off',valuehere:100}];

  const servicedetailshere = [{serviceimage:codimage,servicetitle:'COD AVAILABLE'},
  {serviceimage:returnimage,servicetitle:'NO EXCHANGE & RETURNS'},{serviceimage:shippingimage,servicetitle:'FREE SHIPPING'},
  {serviceimage:paymentsimage,servicetitle:'SECURE PAYMENTS'},{serviceimage:contactlessimage,servicetitle:'CONTACT-LESS DELIVERY'},
  {serviceimage:contactlessimage,servicetitle:'CONTACT-LESS DELIVERY'}]

  const shipfee=10;
  const gstfee=10;
  const navigate = useNavigate();

    useEffect(() => {
        getcard();
        }, []);
        console.log(newcard,'new');
    
        const getcard = () =>{
          axios.get('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields')
          .then(res=>setNewcard(res.data))
        }

        const deletecard = (cardid) => {
            axios.delete(`https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields/${cardid}`)
            .then(res=>getcard())
        }
        const handleAddClick = (index) => {
            const updateproduct = [...newcard];
            newcard[index].count=newcard[index].count + 1;
            setNewcard(updateproduct);
            };

        const handleminusClick = (index) => {
            const updateproduct = [...newcard];
            if(newcard[index].count>1){
                newcard[index].count=newcard[index].count - 1;
              setNewcard(updateproduct);
            }
          };

        const mrpvalue = (newcard)=>{
            let mrp=newcard.reduce((total,priceofproduct)=>total+(priceofproduct.oldmrp*priceofproduct.count),0);
          // for(let i=0;i<carddetailshere.length;i++){
          // mrp=mrp+ carddetailshere[i].productprice;
          // }
          return mrp;
          };

          const discountvalue = (newcard)=>{
            let sellingprice=newcard.reduce((total,priceofproduct)=>total+(priceofproduct.productprice*priceofproduct.count),0);
            let reducedprice = mrpvalue(newcard)-sellingprice;
            return reducedprice;
           };
          
           const handleChange = e => {
            const target = e.target.value;
            console.log(target,'target');
            setDiscount(target);
          };
           
           const subtot=(newcard)=>{
            let subtotal=mrpvalue(newcard)-discountvalue(newcard)-discount+shipfee;
            return subtotal;
           };
          
           const ordertotal=(newcard)=>{
            let ordertot=subtot(newcard)+gstfee;
            return ordertot;
           };

return(
<div className='wholepart'>
      <div className='myshoppingcart'>MY SHOPPING CART</div>
          <div className='cardsandcalculation'>
            <div className='cardshere'>
            {newcard.map(({imagename,count,id,productprice,title,brand,oldmrp},i) => {
              return(
                <Cardcomponent key={i} count={count} cardimagehere={imagename} handledeleteclick={()=>{deletecard(id)}}  dustbin={dustbin} handleAddClick={()=>handleAddClick(i)} handleminusClick={()=>handleminusClick(i)} productprice={productprice}  oldmrp={oldmrp}  titlehere={title} brandhere={brand} rectangle={rectangle} ellipse={ellipse} />
              );
            })
            }
              </div>      
          
          <div className='forcalculation'>

            <div className='forapplycoupon'>
            <div className='offerpercent'><img src={offerpercent} height='20px' alt='offerpercent'></img></div>
            <div className='applycoupon'>Apply Coupons Code</div>
            <div className='vectorsymbol'><img src={vector} alt='vector'></img></div>
            </div>  

            <div>
              {offerdetailshere.map(({codehere,offerpercentage,valuehere},i) => {
                return(
                <Offercomponent key={i} codehere={codehere} offerpercentage={offerpercentage} value={valuehere} handleOfferChange={handleChange} />
                );
              })
              }
              
              </div>

            <div className='summaryandlistbox'>
              <div className='ordersummary'>ORDER SUMMARY</div>
              
              <div className='calculationlist'>
                <ul>
                  <li>MRP value</li>
                  <li>Discount Price</li>
                  <li>Cart value</li>
                  <li>Promo Code Discount</li>
                  <li>Shipping Fee</li>
                  <li>Sub- Total</li>
                  <li>GST (12%)</li>
                  <li id='ordertotal'>Order Total</li>
                </ul>
                
                <ul>
                  <li> ₹{mrpvalue(newcard)}</li>
                  <li id='dis'>-₹{discountvalue(newcard)}</li>
                  <li> ₹{mrpvalue(newcard)-discountvalue(newcard)}</li>
                  <li id='dis'>-₹{discount}</li>
                  <li>₹{shipfee}</li>
                  <li>₹{subtot(newcard)}</li>
                  <li>₹{gstfee}</li>
                  <li id='ordertotal'>₹{ordertotal(newcard)}</li>
                </ul>
              </div>
            </div>
            <div className='checkout'>PROCEED TO CHECKOUT</div>
          </div>

        </div>
        
        <div className='services'>
          {servicedetailshere.map(({serviceimage,servicetitle},i) => {
            return(
              <Servicecomponent serviceimage={serviceimage} servicetitle={servicetitle} />
            );
          }
          
          )}
          
        </div>
        <div><button onClick={()=>{navigate('/createhere')}}>CREATE</button></div>
  </div>
);
}
export default Calculations;
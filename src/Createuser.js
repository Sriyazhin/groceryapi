import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';

const Createuser = () =>{
    const [imagename,setimagename] = useState('');
    const [productprice,setproductprice] = useState('');
    const [count,setcount] = useState(1);
    const [oldmrp,setoldmrp] = useState('');
    const [title,settitle] = useState('');
    const [brand,setbrand] = useState('');
    const navigate = useNavigate();

    const Createuser = () => {
        axios.post('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields',{imagename:imagename,productprice:productprice,count:count,oldmrp:oldmrp,title:title,brand:brand})
          .then(navigate('/'));

    }
    return(
<div>
            <form className="formhere">
            <input type='text' className="manipulateimage" placeholder="Imagename" value={imagename} onChange={(e)=>setimagename(e.target.value)} />
            <input type='number' className="manipulatepp" placeholder="Productprice" value={productprice} onChange={(e)=>setproductprice(e.target.value)} />        
            <input type='number' className="manipulatecount" placeholder="Count" value={count} onChange={(e)=>setcount(e.target.value)} />
            <input type='number' className="manipulateoldmrp" placeholder="Oldmrp" value={oldmrp} onChange={(e)=>setoldmrp(e.target.value)} />
            <input type='text' className="manipulatetitle" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)} />        
            <input type='text' className="manipulatebrand" placeholder="Brand" value={brand} onChange={(e)=>setbrand(e.target.value)} />
        
            <button className="forcreatebutton" onClick={Createuser}>CREATE</button>
            </form>
        </div>
    );
}
export default Createuser;

import { useEffect,useContext, useState } from 'react';
 import country from '../../data/country.json'
import Image from 'next/legacy/image'
//import {Context} from '../../pages/App'
import style from './index.module.css'
export default ()=>{
   // const[country,setCountry]=useState([])

   //const {state,dispatch}=useContext(Context)
   //let country=state.country

   // useEffect(()=>{
   //    fetch('api/country/').then(res=>res.json()).then(res=>setCountry(res.res))
   // },[])

    
    return <section className="p-3">
       <h3 className="text-center subheadings violet-color fw-bold">Popular Overseas Countries</h3>
    <ul className={style["w-layout-grid"]}>
       { country.length && country.map((item,index)=> <li key={index} className={style["one-country"]}>

<div className="">
   <div className="w-100 position-relative" style={{height:"200px"}}>
       <Image src={`/media/country/${item.image}`} layout="fill" alt={item.Name}/>
    </div>
   <div className="p-2">
         <h5 className="violet-color ">{item.Name}</h5>
         {item.Comments.map((item2,index2)=> 
         <div key={index2} className="">
            <div className="d-flex align-items-center gap-3">
               <div className={style["purple-sep-small"]}></div>
               <div key={index2} className="div-block-38">
                  <p className="mb-0 comments-country"><strong className="fw-normal">{item2}</strong></p>
               </div>
            </div>
   </div>)}
   </div>
</div>

</li>)}
      
    </ul>
 </section>
}
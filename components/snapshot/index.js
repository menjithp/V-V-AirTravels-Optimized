import snapshot from '../../data/snapshot.json'
import { useEffect,useState,useContext } from 'react';

//import {Context} from '../../pages/App'


import style from './index.module.css'

export default () => {


// const {state,dispatch}=useContext(Context)
//    let snapshot=state.snapshot
   let impact=snapshot.filter(item=>item.type==="Impact")
   let office=snapshot.filter(item=>item.type==="Office")
 


  return (
    <section className="snapshot">
      <h4 className="text-center violet-color subheadings">Our snapshot</h4>
        <div className="row grey-bg p-2 m-0 flex-wrap">
              <div className="col-6 justify-content-center align-items-center">
                <h5 className="text-center violet-color  ">Impact</h5>
                <ul className="p-3 gap-3 d-flex flex-wrap justify-content-center align-items-center">
                {impact.length && 
                  impact.map((item,index)=> <li key={index} className={style.static__single}>
                    <h3>{item.value}</h3>
                    <span className={style.straight__line}></span>
                    <h4>{item.Name}</h4>
                </li>)
                }
                </ul>
              </div>
              <div className="col-6 justify-content-center align-items-center">
                <h5 className="text-center violet-color ">Office</h5>
                <ul className="p-3 gap-3 d-flex flex-wrap justify-content-center align-items-center">
              { office.length &&
                  office.map((item,index)=> <li key={index} className={style.static__single}>
                    <h3>{item.value}</h3>
                    <span className={style.straight__line}></span>
                    <h4>{item.Name}</h4>
                </li>)
                }
              </ul>
              </div>
        </div>
    </section>
  );
};
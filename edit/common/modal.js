import { useEffect } from 'react'

import style from '../index.module.css'
export default ({children,show,close})=>{


 
return <>
<div  className={`modal-backdrop show fade `} style={{zIndex:show?400:-400,opacity:show?0.5:0}} ></div>
<div  className={`modal fade ${show?"show":""}`} style={{display:show?"block":"none"}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" >
    <div className="modal-content">
      <div className={` modal-body ${style["edit-modal"]}`}  style={{maxHeight:"80vh"}}>
      {children}
      </div>
    </div>
  </div>
</div>
    </>
  
  
}
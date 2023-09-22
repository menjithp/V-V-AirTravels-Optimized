import { useEffect } from "react"


export default ({data})=>{

  const {state,dispatch}=data
  const{background,message,show}=state.toast


  useEffect(()=>{
    let Toast=require('bootstrap').Toast
    window.Toast=new Toast(document.getElementById('myToast'),{autohide:true,delay:2500})
  },[])

  useEffect(()=>{
    window.Toast.show()

  },[show])

    return  <div role="alert" id="myToast" aria-live="assertive" 
    style={{color:"white",width:"fit-content",
    backgroundColor:background,
    top:"20%",right:"25%",zIndex:1000,
    padding:message ?"0.4rem":0,
    border:"none",
    boxShadow:"none"}} aria-atomic="true"
     className="toast fw-bold letter-spacing-1 position-fixed"
      >
    <div className="toast-body" style={{borderRadius:"none",padding:0}}>
      {message}
    </div>
    </div>
}
import {useCallback, useEffect,useRef} from 'react'
import {signOut} from 'next-auth/react'
import Image from 'next/legacy/image'
export default ({data})=>{

  const {state,dispatch,value}=data

  const ref=useRef()
  const callback=useCallback((e)=>{
      if (ref.current.contains(e.target) || document.querySelector(".hamburger").contains(e.target))return
      dispatch({type:"SIDEBAR",data:false})
  },[ref,dispatch]) 


useEffect(()=>{
  document.addEventListener('click',callback)
  return ()=>{
    document.removeEventListener('click',callback)
  }
 
},[])

    return <><div ref={ref} className="sidebar zindex-100 d-flex flex-column flex-shrink-0 p-3 bg-light position-fixed start-0 bottom-0" 
    style={{width: "280px",top:"2.5rem"}}>
          <ul className="nav nav-pills flex-column mb-auto">
            {value.map((item,index)=><li key={index} className="nav-item">
              <a href="#" onClick={()=>dispatch({type:"PAGE",data:item})} 
              className={` fw-bold letter-spacing-desc violet-color nav-link ${state.page===item?"active":""}`} aria-current="page">
                {item}
              </a>
            </li>)
            }
          </ul>
          <hr/>
          <div className="dropdown" style={{zIndex:10000}}>
  <a href="#" onClick={()=>{

    const ele=document.querySelector(".dropdown-menu-custom")
    if(ele.style.display==="block")ele.style.display="none"
    else ele.style.display="block"

  }} className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" aria-expanded="false">
  <Image src={state.session?.user.image} alt="" width={32} height={32} className="rounded-circle me-2"/>
    <strong>{state.session?.user.name}</strong>
  </a>
  <ul style={{bottom: "17px",left: "42px",background: "white",position:"absolute",display:"none"}} 
  className="dropdown-menu-custom box-shadow-basic w-fitcontent p-2" aria-labelledby="dropdownUser2">
    <li><a className="dropdown-item" onClick={signOut} href="#">Sign out</a></li>
  </ul>
</div>



  </div>


  </>
}
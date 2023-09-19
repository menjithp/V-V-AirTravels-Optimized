import {GiHamburgerMenu} from 'react-icons/gi'

import  Button from '@/elements/Button'

export default ({data})=>{
const{state,dispatch,title,add_function}=data


    return <>
    <header className="bg-light violet-color text-white position-fixed start-0 end-0 top-0 zindex-300 d-flex start-0 align-items-center justify-content-between px-2">
         <button onClick={()=>dispatch({type:"SIDEBAR_VICEVERSA"})} className="hamburger me-4 violet-color " style={{border:"none",padding:"10px",cursor:"pointer",background:"none",color:"white"}}>
             <GiHamburgerMenu size={20}/>
        </button>
        <h3 style={{letterSpacing:"1px"}} className="violet-color text-center fw-bold flex-grow-1">{title}</h3>

        <Button className="mt-0" onClick={add_function}>Add</Button>
      
    </header>
    <div style={{marginTop:"5rem"}}/>
    </>
}
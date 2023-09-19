import {RiWhatsappFill} from 'react-icons/ri'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'

export default ({state})=>{

    return <footer className=" bg-dark p-3">
        <div className="d-md-flex justify-content-around w-100">
       <a href={`https://wa.me/${state.Whatsapp}`} className="d-flex gap-3 justify-content-center w-100 text-center">
                     <div className="text-white"><RiWhatsappFill size={30}/></div>
                     <p className="text-white" >{state.Whatsapp}</p>
        </a>
        <a href={`tel:+91${state.Mobile}`} target="_blank" className="d-flex gap-3 justify-content-center w-100 align-self-end">
                     <div className="text-white"><BsFillTelephoneForwardFill size={25}/></div>
                     <p className="text-white" >{state.Mobile}</p>
                  </a>
                  <br />
        </div>
           
                <small style={{fontSize:"10px"}} className="mt-4 mb-3 mx-auto d-block text-white text-center" > ©{state.Name}. ALL RIGHTS RESERVED. </small>
           
        </footer>
}
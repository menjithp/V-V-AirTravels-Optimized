import {RiWhatsappFill} from 'react-icons/ri'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
//import { Context } from '../../pages/App'
import { useContext } from 'react'

import newstate from '../../data/general'
export default ()=>{

  // const {state,dispatch}=useContext(Context);
  // const newstate=state.general
    return <footer className=" bg-dark p-3">
        <div className="d-md-flex justify-content-around w-100">
       <a href={`https://wa.me/${newstate.Whatsapp}`} className="d-flex gap-3 justify-content-center w-100 text-center">
                     <div className="text-white"><RiWhatsappFill size={30}/></div>
                     <p className="text-white" >{newstate.Whatsapp}</p>
        </a>
        <a href={`tel:+91${newstate.Mobile}`} target="_blank" className="d-flex gap-3 justify-content-center w-100 align-self-end">
                     <div className="text-white"><BsFillTelephoneForwardFill size={25}/></div>
                     <p className="text-white" >{newstate.Mobile}</p>
                  </a>
                  <br />
        </div>
           
                <small style={{fontSize:"10px"}} className="mt-4 mb-3 mx-auto d-block text-white text-center" > ©V.V.AIR TRAVELS. ALL RIGHTS RESERVED. </small>
           
        </footer>

}
//          <div className="container">
//             <div className="contact-footer d-sm-flex justify-content-between">
//                <div className="mobile-view">
//                   <a href={`https://wa.me/${newstate.Whatsapp}`} className="d-flex gap-3">
//                      <div className="text-white"><RiWhatsappFill size={30}/></div>
//                      <p className="text-white" >{newstate.Whatsapp}</p>
//                   </a>
//                </div>
               
//                <div>
//                   <a href={`tel:+91${newstate.Mobile}`} target="_blank" className="d-flex gap-3">
//                      <div className="text-white"><BsFillTelephoneForwardFill size={25}/></div>
//                      <p className="text-white" >{newstate.Mobile}</p>
//                   </a>
//                </div>
//             </div>
//             <br />
//             <div>
//                <p className="footer-font text-white text-center" > ©V.V.AIR TRAVELS. ALL RIGHTS RESERVED. </p>
//             </div>
//          </div>
//     </footer>
// }
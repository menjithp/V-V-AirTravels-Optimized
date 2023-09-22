import {useContext,useState,useRef,useEffect} from 'react'
// import {Context} from '../App'

// import Redirect from './redirect'

import Button from '../../elements/Button'
import Image from 'next/legacy/image'
import Header from '../common/header'

import {useput} from '../../hooks/api'



export  default ({data})=>{

    const {state,dispatch}=data
    const [general,setGeneral]=useState(state.general)

    const upload=async(e)=>{
        e.preventDefault();
        let form=new FormData()
        form.append("General",JSON.stringify(general))
        if (general.imagedata)form.append("General",general.imagedata)
        dispatch({type:"LOADER",data:true})
        try{
            let response=await useput("/api/edit/general",form)
            if(response.status===200){
                dispatch({type:"LOADER",data:false})
                dispatch({type:"GENERAL_UPDATE",data:response.result})
                dispatch({type:"TOAST",data:{show:!state.toast.show,message:"General updated successfully",background:"green"}})
    
            }
            else{
                dispatch({type:"LOADER",data:false})
                dispatch({type:"TOAST",data:{show:!state.toast.show,message:response.message||response.description.message,background:"red"}})
            }
        }catch(e){
            dispatch({type:"LOADER",data:false})
            dispatch({type:"TOAST",data:{show:!state.toast.show,message:e.message,background:"red"}})
    
        }
    }

    const eventhandler=(e)=>{
        let obj={...general}
        if(e.target.name==="imageurl"){
            obj["imagedata"]=e.target.files[0]
            if(e.target.files[0])obj[e.target.name]=URL.createObjectURL(e.target.files[0])
        }
        else obj[e.target.name]=e.target.value 
        setGeneral(obj)
}


return <form className="row me-0 justify-content-center gap-2 mb-5" onSubmit={upload}>
         <Header data={{state,dispatch,title:"General edit"}}/>

    <div className="col-md-5">
        <label className="col-md-3">Company Name: </label>
        <input className="col-md-9" required type="text" name="Name" value={general?.Name} onChange={eventhandler} />
    </div>
    <div className="col-md-5 ">
        <label className="col-md-3">Company Quote: </label>
        <input className="col-md-9" required type="text" name="companyQuote" value={general?.companyQuote} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">Company Description: </label>
        <textarea style={{minHeight:"100px"}}  className="col-md-9" required type="text" name="companyDesc" value={general?.companyDesc} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">Instagram: </label>
        <input className="col-md-9" type="text" name="Instagram" value={general?.Instagram} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">Facebook: </label>
        <input className="col-md-9" type="text" name="Facebook" value={general?.Facebook} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">LinkedIn: </label>
        <input className="col-md-9" type="text" name="LinkedIn" value={general?.LinkedIn} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">Whatsapp: </label>
        <input className="col-md-9"  type="text" name="Whatsapp" value={general?.Whatsapp}  onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">Mobile: </label>
        <input className="col-md-9" type="text" name="Mobile"  value={general?.Mobile} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">Company Address: </label>
        <textarea className="col-md-9" rows={4} type="address" name="Address" value={general?.Address} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">AgentName: </label>
        <input className="col-md-9" type="text" name="AgentName" value={general?.AgentName} onChange={eventhandler} />
    </div>
    <div className="col-md-5  ">
        <label className="col-md-3">Upload new Map Image: </label>
        <input className="ps-0 col-md-9" type="file" name="imageurl" onChange={(e)=>{
            eventhandler(e)
        }}/>
    </div >
    <div className="col-md-5  align-items-center ">
        <label>Uploaded Map Image: </label>
        <div className="col-md-9" style={{height:"50px",width:"80px",position:"relative"}}>
           { <Image
           src={general.imageurl.includes('blob')?general.imageurl:general.imageurl+general._id+"&cache:"+general.updatedAt} 
            className={`general_image`}
             onError={(e)=>{
                e.target.style.textIndent="-10000px"
               }}
               layout="fill"
             alt={`vv-airtravels map location`} />}
        </div>
    </div>
    
    <div className="position-fixed bottom-0 start-0 end-0 bg-light">
    <Button className="mx-auto d-block" type="submit">Submit</Button>
    </div>

</form>


}



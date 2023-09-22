import {useContext,useState,useRef,useEffect} from 'react'
// import {Context} from '../App'
// import Redirect from './redirect'

import Card from './card'

import Header from '../common/header'
import Modal from '../common/modal'
import {usedelete, usepost,useput} from '../../hooks/api'


export  default ({data})=>{

const {state,dispatch}=data
const [modal,setmodal]=useState(false)
const newitem_={Name:"",type:"",value:""}
const[newitem,setnewitem]=useState(newitem_)

const [snapshot,setSnapshot]=useState(state.snapshot)


useEffect(()=>{
    setSnapshot(state.snapshot)
},[state.snapshot])



const eventhandler=(e,item,index)=>{
    let obj=[...snapshot]
    obj[index][e.target.name]=e.target.value
    setSnapshot(obj)
}
const new_eventhandler=(e,item)=>{
    let obj={...newitem}
    obj[e.target.name]=e.target.value
    setnewitem(obj)
}


const handledelete=async(e,item)=>{
    e.preventDefault()
    dispatch({type:"LOADER",data:true})

    try{
        let response=await usedelete("/api/edit/snapshot?_id="+item._id)
        if(response.status===200){
            dispatch({type:"LOADER",data:false})
            dispatch({type:"SNAPSHOT_DELETE",data:item})
            dispatch({type:"TOAST",data:{show:!state.toast.show,message:"Snapshot deleted successfully",background:"green"}})

        }else{
            dispatch({type:"LOADER",data:false})
            dispatch({type:"TOAST",data:{show:!state.toast.show,message:response.message||response.description.message,background:"red"}})
   
        }

    }catch(e){
        dispatch({type:"LOADER",data:false})
        dispatch({type:"TOAST",data:{show:!state.toast.show,message:e.message,background:"red"}})

    }

}


const handleupload=async(e,item)=>{
    e.preventDefault()
    const form=new FormData();
    if(item.imagedata)form.append("Snapshot",item.imagedata)
    form.append("Snapshot",JSON.stringify(item))
    dispatch({type:"LOADER",data:true})
    let response=await useput("/api/edit/snapshot",form)

    try{
    if(response.status===200){
        dispatch({type:"LOADER",data:false})
        dispatch({type:"SNAPSHOT_UPDATE",data:response.result})
        dispatch({type:"TOAST",data:{show:!state.toast.show,message:"snapshot updated successfully",background:"green"}})

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

const new_handleupload=async(e,item)=>{
    e.preventDefault()
    setmodal(false);
    setnewitem(newitem_)
    

    const form=new FormData();
    if(item.imagedata)form.append("Snapshot",item.imagedata)
    form.append("Snapshot",JSON.stringify(item))
    dispatch({type:"LOADER",data:true})
    let response=await usepost("/api/edit/snapshot",form)

    try{

    if(response.status===200){
        dispatch({type:"LOADER",data:false})
        dispatch({type:"SNAPSHOT_APPEND",data:response.result})
        dispatch({type:"TOAST",data:{show:!state.toast.show,message:"snapshot Added successfully",background:"green"}})

    }
    else{
        dispatch({type:"LOADER",data:false})
        dispatch({type:"TOAST",data:{show:!state.toast.show,message:response.message||response.description.message,background:"red"}})
    }
}catch(e){
    dispatch({type:"LOADER",data:false})
    dispatch({type:"TOAST",data:{show:!state.toast.show,message:response.message||response.e.message,background:"red"}})

}
}




    return <section className="">
             <Header data={{state,dispatch,title:"Snapshot edit",add_function:()=>setmodal(true)}}/>

        <ul className="row me-0 gap-3 p-2 justify-content-center">
        {
            snapshot.map((item,index)=>{
               return <li className="col-md-3 box-shadow-basic p-2" key={item._id||item._temp}>
                  <Card data={{item,eventhandler,index,handleupload,handledelete}}/>
                </li>
            })
        }
    </ul>
    {modal &&<Modal show={modal} close={()=>setmodal(false)}>
   <Card 
   data={{item:newitem,
   eventhandler:new_eventhandler,
   index:null,
   handleupload:new_handleupload,
   handledelete:()=>{setmodal(false);setnewitem(newitem_)}}}/>
   </Modal>}
    </section>
}
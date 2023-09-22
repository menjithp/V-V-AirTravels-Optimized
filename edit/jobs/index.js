import {useContext,useState,useRef,useEffect} from 'react'
// import Redirect from './redirect'


import Header from '../common/header'
import {usedelete, usepost,useput} from '../../hooks/api'


import Card from './card'
import Modal from '../common/modal'


export  default ({data})=>{

    const {state,dispatch}=data
    const newitem_={Name:"",imageurl:""}
    const [jobs,setJobs]=useState(state.jobs)
    const[newitem,setnewitem]=useState(newitem_)
    const [modal,setmodal]=useState(false)

    useEffect(()=>{
        setJobs(state.jobs)
    },[state.jobs])


const eventhandler=(e,index,item)=>{
    let obj=[...jobs]

    if(e.target.name==="imageurl"){
        obj[index]["imagedata"]=e.target.files[0]
        if(e.target.files[0])obj[index][e.target.name]=URL.createObjectURL(e.target.files[0])
    }else  obj[index][e.target.name]=e.target.value

    setJobs(obj)
}

const new_eventhandler=(e,item)=>{
    let obj={...newitem}

    if(e.target.name==="imageurl"){
        obj["imagedata"]=e.target.files[0]
        if(e.target.files[0])obj[e.target.name]=URL.createObjectURL(e.target.files[0])
    }else  obj[e.target.name]=e.target.value

    setnewitem(obj)
}

const handledelete=async(e,item)=>{
    e.preventDefault()
    dispatch({type:"LOADER",data:true})

    try{
        let response=await usedelete("/api/edit/jobs?_id="+item._id)
        if(response.status===200){
            dispatch({type:"LOADER",data:false})
            dispatch({type:"JOBS_DELETE",data:item})
            dispatch({type:"TOAST",data:{show:!state.toast.show,message:"Jobs deleted successfully",background:"green"}})

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
    if(item.imagedata)form.append("Jobs",item.imagedata)
    form.append("Jobs",JSON.stringify(item))
    dispatch({type:"LOADER",data:true})
    let response=await useput("/api/edit/jobs",form)

    try{
    if(response.status===200){
        dispatch({type:"LOADER",data:false})
        dispatch({type:"JOBS_UPDATE",data:response.result})
        dispatch({type:"TOAST",data:{show:!state.toast.show,message:"Jobs updated successfully",background:"green"}})

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
    if(item.imagedata)form.append("Jobs",item.imagedata)
    form.append("Jobs",JSON.stringify(item))
    dispatch({type:"LOADER",data:true})
    let response=await usepost("/api/edit/jobs",form)

    try{

    if(response.status===200){
        dispatch({type:"LOADER",data:false})
        dispatch({type:"JOBS_APPEND",data:response.result})
        dispatch({type:"TOAST",data:{show:!state.toast.show,message:"Jobs Added successfully",background:"green"}})

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
         <Header data={{state,dispatch,title:"Jobs edit",add_function:()=>setmodal(true)}}/>

    <ul className=" row me-0 p-2 gap-4 justify-content-center">
        {jobs.map((item,index)=><li className="col-5 box-shadow-basic p-2" key={item._id||item._temp}>
            <Card data={{item,eventhandler,index,handleupload,handledelete}}/>
        </li>)}
    </ul>
    {modal && <Modal show={modal} close={()=>setmodal(false)}>
   <Card 
   data={{item:newitem,
   eventhandler:new_eventhandler,
   index:null,
   handleupload:new_handleupload,
   handledelete:()=>{setmodal(false);setnewitem(newitem_)}}}/>
</Modal>}
</section>

}
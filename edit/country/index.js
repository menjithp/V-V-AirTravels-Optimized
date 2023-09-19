import {useContext,useState,useRef,useEffect} from 'react'

import Card from './card'


import Modal from '../common/modal'
import {usedelete, usepost,useput} from '../../hooks/api'
import Header from '../common/header'

export  default ({data})=>{

     const {state,dispatch}=data
     const[country,setCountry]=useState(state.country)
     const[modal,setmodal]=useState(false)
     const newitem_={Name:"",Comments:[],imageurl:""}
     const[newitem,setnewitem]=useState(newitem_)


     useEffect(()=>{
         setCountry(state.country)
     },[state.country])

     const new_eventhandler=(e)=>{
         e.preventDefault();
         let obj={...newitem}
         if(e.target.name==="imageurl"){
            obj["imagedata"]=e.target.files[0]
            if(e.target.files[0])obj[e.target.name]=URL.createObjectURL(e.target.files[0])            
        }
        else if(e.target.name==="Comments"){
            obj[e.target.name]=e.target.value.split("\n")
        }
        else obj[e.target.name]=e.target.value
      
        setnewitem(obj)
     }

   
   

    const eventhandler=(e,index)=>{
            let obj=[...country]
            if(e.target.name==="imageurl"){
                obj[index]["imagedata"]=e.target.files[0]
                if(e.target.files[0])obj[index][e.target.name]=URL.createObjectURL(e.target.files[0])
            }
            else if(e.target.name==="Comments"){
                obj[index][e.target.name]=e.target.value.split("\n")
            }
            else obj[index][e.target.name]=e.target.value
           
            setCountry(obj)            
    }
    const handledelete=async(e,item)=>{
        e.preventDefault()
        dispatch({type:"LOADER",data:true})

        try{
            let response=await usedelete("/api/edit/country?_id="+item._id)
            if(response.status===200){
                dispatch({type:"LOADER",data:false})
                dispatch({type:"COUNTRY_DELETE",data:item})
                dispatch({type:"TOAST",data:{show:true,message:"Country deleted successfully",background:"green"}})
    
            }else{
                dispatch({type:"LOADER",data:false})
                dispatch({type:"TOAST",data:{show:true,message:response.message||response.description.message,background:"red"}})
       
            }

        }catch(e){
            dispatch({type:"LOADER",data:false})
            dispatch({type:"TOAST",data:{show:true,message:e.message,background:"red"}})
   
        }

    }

  
    const handleupload=async(e,item)=>{
        e.preventDefault()
        const form=new FormData();
        if(item.imagedata)form.append("Country",item.imagedata)
        form.append("Country",JSON.stringify(item))
        dispatch({type:"LOADER",data:true})
        let response=await useput("/api/edit/country",form)

        try{
        if(response.status===200){
            dispatch({type:"LOADER",data:false})
            dispatch({type:"COUNTRY_UPDATE",data:response.result})
            dispatch({type:"TOAST",data:{show:true,message:"Country updated successfully",background:"green"}})

        }
        else{
            dispatch({type:"LOADER",data:false})
            dispatch({type:"TOAST",data:{show:true,message:response.message||response.description.message,background:"red"}})
        }
    }catch(e){
        dispatch({type:"LOADER",data:false})
        dispatch({type:"TOAST",data:{show:true,message:e.message,background:"red"}})

    }
    }
    
    const new_handleupload=async(e,item)=>{
        e.preventDefault()
        setmodal(false);
        setnewitem(newitem_)
        

        const form=new FormData();
        if(item.imagedata)form.append("Country",item.imagedata)
        form.append("Country",JSON.stringify(item))
        dispatch({type:"LOADER",data:true})
        let response=await usepost("/api/edit/country",form)

        try{

        if(response.status===200){
            dispatch({type:"LOADER",data:false})
            dispatch({type:"COUNTRY_APPEND",data:response.result})
            dispatch({type:"TOAST",data:{show:true,message:"Country Added successfully",background:"green"}})

        }
        else{
            dispatch({type:"LOADER",data:false})
            dispatch({type:"TOAST",data:{show:true,message:response.message||response.description.message,background:"red"}})
        }
    }catch(e){
        dispatch({type:"LOADER",data:false})
        dispatch({type:"TOAST",data:{show:true,message:response.message||response.e.message,background:"red"}})

    }
    }

    return <section className="">       
     <Header data={{state,dispatch,title:"Country edit" ,add_function:()=>setmodal(true)}}/>
    <ul className="row justify-content-center gap-4 my-4 mx-md-4 mx-2 ">
          { country.map((item,index)=>
        <li className="box-shadow-basic col-md-5 p-4 " key={item._id||item._temp}>
           <Card data={{item,eventhandler,index,handleupload,handledelete}}/>
       </li>  )}
    </ul>

    {<Modal show={modal} close={()=>setmodal(true)}>
   <Card 
   data={{item:newitem,
   eventhandler:new_eventhandler,
   index:null,
   handleupload:new_handleupload,
   handledelete:()=>{setmodal(false);setnewitem(newitem_)}}}/>
</Modal>}
    </section>
}
import Sidebars from "@/edit/common/sidebar"

import Country from './country'
import Snapshot from './snapshot'
import Jobs from './jobs'
import General from './general'


import Header from './common/header'
import style from './index.module.css'

import {useReducer,useEffect,useMemo} from 'react'


import Loader from '../elements/loader'
import Toast from '../elements/toast'

import { useSession,signIn } from 'next-auth/react';
import { Router } from "next/router"






export default({props})=>{

    const initialstate=useMemo(()=>({
        sidebar:false,
        page:"Country",
        country:props.country,
        snapshot:props.snapshot,
        jobs:props.jobs,
        general:props.general,
        loader:false,
        toast:{show:false,message:"",background:""},
        session:null
    }),[])


   

    const [state,dispatch]=useReducer(reducer,initialstate)



    const {data:session,status}=useSession()


    useEffect(()=>{
        if (status==="authenticated"){
            dispatch({type:"SESSION",data:session})
        }
    },[status])
   
    if(status==="loading")return null
    else if (status=="unauthenticated"){
        Router.push("/login")
        return <p className="text-danger"> Please login to access admin page.You are redirecting to login page .........</p>
        
    }
    
   
    return <section className={style.edit}>
        {state.loader && <Loader />}

  

        <Toast data={{state,dispatch}}/>
        {state.sidebar && <Sidebars data={{state,dispatch,value:["Country","Snapshot","Jobs","General"]}} />}
        {state.page==="Country" && <Country data={{state,dispatch}}/>}
        {state.page==="Jobs" && <Jobs data={{state,dispatch}}/>}
        {state.page==="Snapshot" && <Snapshot data={{state,dispatch}}/>}
        {state.page==="General" && <General data={{state,dispatch}}/>}
    </section>
}

const reducer=(state,action)=>{
    let index,copy;
switch (action.type){
    case "PAGE":
        return {...state,page:action.data}
    case "SIDEBAR":
        return{...state,sidebar:action.data}
    case "SIDEBAR_VICEVERSA":
        return{...state,sidebar:!state.sidebar}
    case "LOADER":
        return{...state,loader:action.data}
    case "TOAST":
        return {...state,toast:action.data}
    case "SESSION":
        return {...state,session:action.data}
    case "COUNTRY_UPDATE":
         index=state.country.findIndex(item=>item._id===action.data._id)
         copy=[...state.country]
        copy[index]=action.data
        return {...state,country:copy}
    case "JOBS_UPDATE":
         index=state.jobs.findIndex(item=>item._id===action.data._id)
         copy=[...state.jobs]
        copy[index]=action.data
        return {...state,jobs:copy}
    case "SNAPSHOT_UPDATE":
         index=state.snapshot.findIndex(item=>item._id===action.data._id)
         copy=[...state.snapshot]
        copy[index]=action.data
        return {...state,snapshot:copy}
    case "GENERAL_UPDATE":
        return{...state,general:action.data}
    case "COUNTRY_APPEND":
        return {...state,country:[...state.country,action.data]}
    case "JOBS_APPEND":
            return {...state,jobs:[...state.jobs,action.data]}
    case "SNAPSHOT_APPEND":
        return {...state,snapshot:[...state.snapshot,action.data]}
    case "COUNTRY_DELETE":
        return {...state,country:state.country.filter(item=>item._id!=action.data._id)}
    case "JOBS_DELETE":
        return {...state,jobs:state.jobs.filter(item=>item._id!=action.data._id)}
    case "SNAPSHOT_DELETE":
        return {...state,snapshot:state.snapshot.filter(item=>item._id!=action.data._id)}
    }
    return state
}
import Edit from '../edit'

import Country from '../data/country.json'
import initialGeneral from '../data/general.json'
import Jobs from '../data/jobs.json'
import Snapshot from '../data/snapshot.json'

import {useget} from '../hooks/api'
import country from '@/components/country'


export default(props)=>{


    return <Edit props={props}/>
}

export async function getServerSideProps() {

   return { props:await getData()}
}

export const  getData=async()=>{
    let country=await useget(process.env.NEXT_PUBLIC_API_URL+"/api/edit/country")
    if (country.status===200)country=country.result
    else country=[]
    let jobs=await useget(process.env.NEXT_PUBLIC_API_URL+"/api/edit/jobs")
    if (jobs.status===200)jobs=jobs.result
    else jobs=[]
    let snapshot=await useget(process.env.NEXT_PUBLIC_API_URL+"/api/edit/snapshot")
    if (snapshot.status===200)snapshot=snapshot.result
    else snapshot=[]
    let general=await useget(process.env.NEXT_PUBLIC_API_URL+"/api/edit/general")
    if (general.status===200)general=general.result[0]
    else general=initialGeneral
    
    return  { country,general,jobs,snapshot } 
}
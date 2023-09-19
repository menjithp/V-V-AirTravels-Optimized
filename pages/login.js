

import Button from '@/elements/Button'

import Image from 'next/legacy/image'

import { useSession,signIn } from 'next-auth/react';
import Router from 'next/router';

export default ()=>{

    let redirecturl;
    // if (typeof window!=="undefined"){
    //     let {callbackUrl}=Router.query
    //     redirecturl=callbackUrl
    // }

    const {status}=useSession()

    if (status==="authenticated"){
        Router.push('/edit');
    }
    else if(status==="loading")return null
    else if (status=="unauthenticated")

    return <section className="">
        <h3 className="text-center fw-bold p-2 violet-color ">Welcome ,</h3>
       
        <form onSubmit={(e)=>e.preventDefault()}
        className="position-absolute top-0 bottom-0 start-0 end-0 flex-column d-flex justify-content-center align-items-center">
        <h5 className="text-center">Login</h5>
            
            <Button className="d-flex gap-3 align-items-center" onClick={()=>
                signIn("google",{callbackUrl:redirecturl?redirecturl:"/edit"})}>
                <Image src="/google_logo.png" height={20} width={20}/>Continue With Google</Button>
        </form>
    </section>
}


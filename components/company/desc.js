import {BsFacebook,BsInstagram,BsLinkedin,BsWhatsapp} from 'react-icons/bs'


export default ({state})=>{
 
    return <section className="">
        <article>
            <h3 className="subheadings text-center fw-bold violet-color">Want to Work abroad?</h3>
            <p className="letter-spacing-desc"> <strong className="fs-5 d-inline fw-bolder">{state.Name}</strong>
            <strong className="fw-normal">{state.companyDesc}</strong> </p>

            <div className="d-flex gap-4 align-items-center">
                <a href={state.Facebook}><BsFacebook  className="facebook" size={25} /></a>
                <a href={state.Instagram}><BsInstagram className="instagram" size={25}/></a>
                <a href={state.LinkedIn}><BsLinkedin className="Linkedin" size={25}/></a>
                <a href={state.Whatsapp}><BsWhatsapp  className="whatsapp-link" size={25}/></a>
            </div>
        </article>
    </section>
}
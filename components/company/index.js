import Jobs from './jobs'
import Desc from './desc'

export default ({state})=>{

    return <section
     className="mt-5 py-5 py-md-4 position-relative d-md-flex justify-content-between w-100">
        <div className="px-4 col-md-5 zindex-100 position-relative"><Desc state={state.general} /></div>
        <div className="px-4 col-md-7 zindex-100 position-relative"><Jobs state={state.jobs}/></div>
    </section>
}
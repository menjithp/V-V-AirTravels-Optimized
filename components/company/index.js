import Jobs from './jobs'
import Desc from './desc'

export default ()=>{

    // style={{background:"transparent url(/media/intro/intro1.jpg) no-repeat",backgroundSize:"cover"}}
    return <section
     className="mt-5 py-4 position-relative d-md-flex justify-content-between w-100">
        <div className="px-4 col-md-5 zindex-100 position-relative"><Desc /></div>
        <div className="px-4 col-md-7 zindex-100 position-relative"><Jobs /></div>
        {/* <div className="position-absolute top-0 start-0 bottom-0 end-0 "></div> */}
    </section>
}
import Map from './map'
import Address from './address'

export default ()=>{



    return<section className="">
        <h4 className="subheadings text-center violet-color">Office Location & Contact Point</h4>
        <div className="row grey-bg p-2 m-0 align-items-center ">
        <div className="col-md-6 p-5 mx-auto d-flex justify-content-center"><Address/></div>
        <div className="col-md-6 p-2 mx-auto d-flex justify-content-center"><Map/></div>
        </div>
        </section>
}
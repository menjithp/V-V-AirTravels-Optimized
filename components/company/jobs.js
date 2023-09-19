import {FaGreaterThan,FaLessThan} from 'react-icons/fa'
import Image from 'next/legacy/image'


export default ({state})=>{



return <section className="w-100">
  <h3 className="subheadings text-center fw-bold violet-color">Occupations In Demand</h3>
    
<div id="carouselExampleDark" className="carousel observe-card-container carousel-dark slide" data-bs-ride="carousel">
 
  <div className="carousel-inner position-relative">
  <div className="carousel-indicators">
      {state.length && state.map((item,index)=><div key={index}>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={`${index===0?"active":""} bg-dark`} aria-current="true" aria-label={`Slide ${index}`}></button>
      </div>)}
  </div>
{state.length && state.map((item,index)=><div key={index} 
className={`carousel-item pb-5 ${index===0 ?"active":""}`} data-bs-interval={3000}>
        <div className="position-relative overflow-hidden" style={{width:"75%",margin:"auto",height:"300px"}}  >
                <Image  src={item.imageurl+item._id} alt={item.Name} layout="fill" />
                <div className="carousel-caption pb-0 w-100 d-md-block">
                        <h4 className="violet-color mb-0 fw-bold letter-spacing-1">{item.Name}</h4>
                </div>
        </div>
    </div>

)}

<button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <FaLessThan size={15}/>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <FaGreaterThan size={15}/>
    <span className="visually-hidden">Next</span>
  </button>

  </div>
 
</div>
</section>

}
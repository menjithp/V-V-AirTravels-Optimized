
import style from './index.module.css'

export default ({state}) => {


   let impact=state.filter(item=>item.type==="Impact")
   let office=state.filter(item=>item.type==="Office")
 


  return (
    <section className="snapshot">
      <h3 className="text-center violet-color subheadings fw-bold">Immigration snapshot</h3>
        <div className="row grey-bg p-2 m-0 flex-wrap">
              <div className="col-6 justify-content-center align-items-center">
                <h4 className="text-center violet-color  ">Impact</h4>
                <ul className="p-3 gap-3 d-flex flex-wrap justify-content-center align-items-center">
                {impact.length && 
                  impact.map((item,index)=> <li key={index} className={style.static__single}>
                    <p className="p-0 m-0 fw-bold fs-5" >{item.value}</p>
                    <span className={style.straight__line}></span>
                    <h5 >{item.Name}</h5>
                </li>)
                }
                </ul>
              </div>
              <div className="col-6 justify-content-center align-items-center">
                <h4 className="text-center violet-color ">Office</h4>
                <ul className="p-3 gap-3 d-flex flex-wrap justify-content-center align-items-center">
              { office.length &&
                  office.map((item,index)=> <li key={index} className={style.static__single}>
                    <p className=" p-0 m-0 fw-bold fs-5">{item.value}</p>
                    <span className={style.straight__line}></span>
                    <h5 >{item.Name}</h5>
                </li>)
                }
              </ul>
              </div>
        </div>
    </section>
  );
};
import Image from 'next/legacy/image'
export default ({state})=>{
  let lat=11.374307735428973
  let long=78.00465513540651

  return (
      
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${lat},${long}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* <Image src={`/api/image/general?_id=${newstate._id}`} alt="Google Maps" /> */}
      <div className="position-relative" style={{height:"200px",width:"400px"}}>
      <Image src={state.imageurl+state._id} alt="Google Maps" layout="fill"/>

      </div>
    </a>
  );
}
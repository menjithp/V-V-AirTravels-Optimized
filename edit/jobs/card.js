import Image from 'next/legacy/image'
import Button from '@/elements/Button'

export default({data})=>{
    const {item,eventhandler,index,handledelete,handleupload}=data
    return <form className="row  position-relative one-job gap-2" onSubmit={(e)=>{e.preventDefault();handleupload(e,item)}}>

    <div>
        <label>Job</label>
        <input type="text" name="Name" required value={item.Name} onChange={(e)=>eventhandler(e,index,item)}/>
    </div>
    <div>
        <label>Upload Job Image</label>
        <input type="file" name="imageurl"  onChange={(e)=>eventhandler(e,index,item)}/>
    </div>
    <div className="">
        <label>Uploaded Image</label>
        <div style={{height:"50px",width:"80px",position:"relative"}}>
                {item.imageurl &&<Image  className={`jobimage${index}`} 
                src={item.imageurl.includes('blob')?item.imageurl:item.imageurl+item._id} 
                    onError={(e)=>{
                        e.target.style.textIndent="-10000px"
                    }}
                    layout="fill"
                alt={`job-image ${item.Name}`}/>
}
        </div>
    </div>
    <div className="d-flex justify-content-center gap-3">
        <Button type="Submit">Save</Button>
        <Button className="text-danger" onClick={(e)=>handledelete(e,item)} >Delete</Button>
    </div>
    </form>
}
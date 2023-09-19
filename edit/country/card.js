import Image from 'next/legacy/image'
import Button from '@/elements/Button'

export default({data})=>{
    const {item,eventhandler,index,handledelete,handleupload}=data
   return <form  onSubmit={(e)=>{e.preventDefault();handleupload(e,item)}}>
    <div>
        <label>Country Name: </label>
        <input required type="text" name="Name" value={item.Name} onChange={(e)=>eventhandler(e,index)}/>
    </div>
    <div className="">
        <label >Country Comments: </label>
        <textarea className="flex-grow-1"  style={{width:"100%",minHeight:"100px"}} type="text" name="Comments" value={item.Comments.join("\n")}
            onChange={(e)=>eventhandler(e,index)}/>
    </div>
    <div>
        <label >Upload new Image: </label>
        <input type="file" name="imageurl" onChange={(e)=>{
            eventhandler(e,index)
        }}></input>
    </div>
    <div className="col-md-6">
        <label >Uploaded Image: </label>
            <div style={{height:"50px",width:"80px",position:"relative"}}>
            {  <Image
                    onError={(e)=>{
                    e.target.style.textIndent="-10000px"
                    }}
                    layout="fill"
                    className={`countryimage${index}`}
                    name="image" 
                    src={!item.imageurl?"":item.imageurl.includes('blob')?item.imageurl:item.imageurl+item._id} 
                    alt={`overseas countries ${item.Name}`} />  
                }

            </div>                            
    </div>
    
    <span className="d-flex gap-3 justify-content-center">
    <Button type="submit">Save</Button>
    <Button className="text-danger" onClick={(e)=>handledelete(e,item)} >Delete</Button>

    </span>

</form>
}
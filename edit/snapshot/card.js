import Image from 'next/legacy/image'
import Button from '@/elements/Button'

export default({data})=>{
    const {item,eventhandler,index,handledelete,handleupload}=data
    return  <form className="" onSubmit={(e)=>{e.preventDefault();handleupload(e,item)}}>
        
    <div className="">
        <label>Name: </label>
        <input required type="text" name="Name" value={item.Name} onChange={(e)=>eventhandler(e,item,index)}/>
    </div>
    <div className="">
        <label>Value: </label>
        <input type="text" name="value" value={item.value} onChange={(e)=>eventhandler(e,item,index)}/>
        </div>
<div className="">
    
    <label>Select Snapshot type: </label>
    <select required name="type" value={item.type} onChange={(e)=>eventhandler(e,item,index)}>
            <option disabled value="">please select snapshot type</option>
            <option  value="Impact">Impact</option>
            <option  value="Office">Office</option>
        </select>
    </div>

<div style={{justifySelf:"flex-end"}} className="d-flex justify-content-center gap-3">
    <Button type="submit">Save</Button>
    <Button className="text-danger" onClick={(e)=>handledelete(e,item)}>Delete</Button>
</div>
</form>
}
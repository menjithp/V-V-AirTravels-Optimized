export const  useget=async(api)=>{

    let response=await fetch(api)
    response=await response.json()
    return response
}

export const  usepost=async(api,form)=>{

    let response=await fetch(api,{method:"POST",body:form})
    response=await response.json()
    return response
}

export const  useput=async(api,form)=>{
    let response=await fetch(api,{method:"PUT",body:form})
    response=await response.json()
    return response
}
export const  usedelete=async(api)=>{
    let response=await fetch(api,{method:"DELETE"})
    response=await response.json()
    return response
}
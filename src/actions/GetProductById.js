export const getProductByIdAction=async(id)=>{
    const resp=await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const body=await resp.json()
    console.log(body)
    if(resp.ok){
        return body
    }
    return null
}
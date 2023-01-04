
export const getProductsAcction=async()=>{
    const resp=await fetch('https://api.escuelajs.co/api/v1/products')
    const body=await resp.json()
    if(resp.ok){
        return body
    }
    return []
}
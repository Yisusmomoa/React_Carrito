
export const getProductsAcction=async(offset)=>{
    console.log(offset)
    const resp=await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`)
    const body=await resp.json()
    if(resp.ok){
        return body
    }
    return []
}
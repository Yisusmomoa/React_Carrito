import {fetchs} from '../access/fetchs'

export const loginAction=async (user)=>{
    console.log("login accion")
    const resp=await fetchs('login', user, 'POST')
    const body=await resp.json()
    if(resp.ok){
        console.log("login con exito")
        console.log(body)
        return body
    }
    console.log("Error registro")
    
    return null
}
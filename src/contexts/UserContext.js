// guardar la información del usuario autenticado

import React, { createContext,useState, useEffect } from "react";
import { loginAction } from "../actions/LoginAction";


const UserContext=createContext()

/**
 * este usercontext tiene 2 propiedades utiles 
 * un provider y un consumer
 * cuando usamos hooks nos importa el provider, porque react nos brida un hook para manejarla
 * 
 */

const UserProvider=({children})=>{
    const [user, setUser]=useState(null)
    
    const login=async (puser)=>{
      const res=await loginAction(puser)
      if(res!=null){
        setUser(res)
        sessionStorage.setItem('user', JSON.stringify(res))
        return true
      }
      return false
    }
    useEffect(() => {
      if(sessionStorage.getItem('user')){
        setUser(JSON.parse(sessionStorage.getItem('user')))
      }
    }, []);
    const logout=()=>setUser(null)
    const data={user, login, logout}

    return (
      <UserContext.Provider value={data}>
        {children}
      </UserContext.Provider>
    ) 
}

export {UserProvider}
export default UserContext;

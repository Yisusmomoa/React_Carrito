import { useEffect,useRef, useState } from 'react';
const baseUrl=process.env.REACT_APP_API_URL

const UseFetch=(url)=>{
    // const url=`${baseUrl}/users/${endpoint}`
    const [state, setState]=useState({
        data:null,
        loading:true,
        error:null
    })

    useEffect(() => {
        setState({data:null, loading:true, error:null})
        fetch(url)
        .then(res=>res.json)
        .then(data=>{
            setState({
                loading:false,
                error:null,
                data
            })
        })
        .catch(err=>{
            setState({
                loading:false,
                error:err,
                data:null
            })
        })
    }, []);

    return state
}

export default UseFetch;

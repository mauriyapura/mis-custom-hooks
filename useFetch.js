import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true, error: true});

    const isMounted = useRef(true);

    useEffect(() => {
        return ()=>{
            isMounted.current = false;
            console.log("Limpiando")
        }        
    }, [])

    useEffect(()=>{
        console.log("ejecutando fetch")
        setState({data: null, loading:true, error:null})
        fetch(url)
            .then(res=> res.json())
            .then(data=>{               

                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }                
            })

    }, [url])

    return state
    
}

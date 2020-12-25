import React,{useCallback,useState} from "react";

const counter = function () {
     const [num, setNum] = useState<number>(0)
    const handleAdd = useCallback(() => {
       setNum(pre=>pre+1) 
    }, [])
    const handleRemove = useCallback(() => {
       setNum(pre=>pre-1) 
    },[])
    return (
        <>
            <button onClick={ handleAdd }>+</button>
            <button onClick={ handleRemove }>-</button>
            <span>{ num }</span>
        </>
    )
}

export default counter;
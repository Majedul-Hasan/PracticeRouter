import React,{useRef,useEffect,useState} from 'react';
import "./Component.css";

const Ref=()=>{
    const renderCount = useRef(0);
    const [name,setName] = useState("");
    useEffect(()=>{
        renderCount.current= renderCount.current+1

    })
    return(

        <div>
            <input type="text" name="myname" onChange={event=>setName(event.target.value)}></input>
            <h4>My name is {name}</h4>
            <p className="charCount">Total Characters are {renderCount.current}</p>
        </div>

    )
}

export default Ref;
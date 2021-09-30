import React from 'react';



const Child=(props)=>{
    const triggerEvent=(e)=>{
         props.parentCallBack(e.target.myname.value,e.target.myemail.value);
         e.preventDefault();

    }
    return(
        <div>
        <h3> This is child component</h3>
         <form onSubmit={triggerEvent}>
             <input type="text" name="myname" placeholder="Enter name"></input><br/><br/><br/>
             <input type="text" name="myemail" placeholder="Enter Email"></input><br/><br/><br/>
             <input type="submit" value="submit"></input><br/><br/><br/>

         </form>
        </div>
    )
}

export default Child;
import React, { useState } from "react";
import Child from "./Child";

const About = () => {
  const [name, setName] = useState("NA");
  const [email, setEmail] = useState("NA");

  const logCheck = () => {
    console.log("I am in about page");
  };

  const handleCallBack = (ename, email) => {
    setName(ename);
    setEmail(email);
    //preventDefault();
  };
  const handleSubmit = (event) => {
    setName(event.target.myname.value);
    setEmail(event.target.myemail.value);
  };
  return (
    <div>
      <h1>About Page</h1>
      <Child parentCallBack={handleCallBack} />
      {/* <form onSubmit={handleSubmit}>
            <input type="text" name="myname" placeholder="name here"></input> <br/><br/><br/>
            <input type="text" name="myemail" placeholder="email here"></input><br/><br/><br/>
            <input type="submit" value="submit"></input><br/><br/><br/>
        </form> */}
      <h4>{name}</h4>
      <h4>{email}</h4>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import "./cs.css"

export default function Application (){
    const [userName, setuserName]=useState("");
    const [userEmail, setuserEmail]=useState("");
    
    const [loginresult,setloginresult]=useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if (storedUser) {
            setuserName(storedUser);
            setloginresult("Welcome back, " + storedUser);
        }
    }, []);

     const handler=(e)=>{
          e.preventDefault();
        
           
                if(userName === "demo" && userEmail === "demo@gmail.com"){
                    setloginresult("u r successfully login")
                    console.log(userName)
                    console.log(userEmail)
                }
                else{
                    setloginresult("Invalid crienditail ")
                }
            }

    return(
        <form action="" onSubmit={handler}>
            <input type="text" value={userName} 
            onChange={(e)=> setuserName(e.target.value)}/>
            <br/>

                
                 <input type="text" value={userEmail} 
            onChange={(e)=> setuserEmail(e.target.value)}/>
            <br/>
            
                 

            <input type="submit" value="submit" className="submit" ></input>


            

                 <h6> This is your userName : <strong>{userName}</strong></h6>
                <h6>This is your userEmail :<strong> {userEmail}</strong></h6>
                 
                 <h5>Result : <strong> {loginresult} </strong></h5>
            

            
        </form>
        
    )



}
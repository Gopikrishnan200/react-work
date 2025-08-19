import React, { useEffect, useState } from "react";
import "./cs.css"


const imge={
    width: "300px",
    height: "260px",
    border: "2px solid black",
    borderRadius: '70%',  
}

export default function Application (){
    const [userName, setuserName]=useState("");
    const [userEmail, setuserEmail]=useState("");    
    const [loginresult,setloginresult]=useState("");

    const usernamess =["gopi","arch",'l3'];
    const email =["demo@gamil.com",'gopi@gmail.com',"gopik@gamil.com"]

    

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if (storedUser) {
            setuserName(storedUser);
            setloginresult("Welcome back, " + storedUser);
        }
    }, []);

     const handler=(e)=>{
          e.preventDefault();
        
           
                if(usernamess.includes(userName) && email.includes(userEmail)){
                    setloginresult(" ✅ You successfully login")
                    console.log(userName)
                    console.log(userEmail)
                }
                else{
                    setloginresult("Invalid crienditail ")
                }
            }

    return(
        <form action="" onSubmit={handler}>
            <h2 className="login">🔐 Login Form</h2>
            <img style={imge}
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80" 
          alt="Login Visual" 
        />


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
import { Component, useState } from "react";

function Core({value}) {
    const mystyle={
         color: "white",
         backgroundColor: "DodgerBlue",
         padding: "10px",
         fontFamily: "Sans-Serif",
         position: "relative",
         left: "20px"
    

}




    const[ color, setcolor]=useState("red")


    const Hanger = ()=>{
        if (color ==="orange"){
            setcolor("red")
        }else{
            setcolor("orange")
        }
    }

    return(<>
    <h2>The Car is {color}</h2>
     <button onClick={Hanger} style={ mystyle } >{value}</button>
    
    </>)

}

export class Hell extends Component{
    render(){
        return(<>
        <Core value="Gopi"/>
       
        
        
        </>)
    }
}
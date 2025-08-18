import { Component } from "react";
const mystle={
         color: "white",
         backgroundColor: "DodgerBlue",
         padding: "10px",
         fontFamily: "Sans-Serif",
         position: "relative",
         left: "20px"
    

}

class Gopi extends Component{
    render(){
        return(<>
        <h1>Hi i am gopi from tvm</h1></>)
    }
}
class Hello extends Component{
    constructor( props) {
        super (props);
        this.state={
            color:"orange",
            model:"2025",
            year:"1893"
        }
    }
    
    Handle=()=>{
       if(this.state.color ==="red"){
        this.setState({color:"orange"})

       }else{
        this.setState({color:"red"})
       }
        
      
        
    }
    
    render(){
        return (<>
           <h1>Hi i am mango my color is  {this.props.color}</h1>
           
           <h1>i am {this.state.model}  From {this.state.color} </h1>
           <button onClick={this.Handle} style={ mystle }>click change</button>
           <Gopi />
        </>)
    }
}
   

export default Hello;
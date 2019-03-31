import React, {Component} from "react";
import Header1 from "../src/components/Header1";

class Hackathon extends Component{
    stop(){
      alert("stop")
    }
    render() {
        return(
      <div>
       <Header1/>
      </div>

        )
    }
}
const styles = {
  container:{
  backgroundColor:""
},

}
export default Hackathon;

import React, {Component} from "react";

class Header1 extends Component{
    stop(){
      alert("stop")
    }
    render() {
        return(
            <div style={styles.container}>
                <button onClick={()=>{this.stop()}}> ghgfh</button>
                <img src="./static/logoEurope.png"  />

            </div>

        )
    }
}
const styles = {
  container:{
  backgroundColor:"black",
  height: "90px",


},

}
export default Header1;

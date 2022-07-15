import React from 'react';
import './Box.css';

class Box extends React.Component{
    constructor(props){
      super(props);
      this.audio= React.createRef();
      
      window.document.addEventListener("keydown", (e)=>{
        if(e.key.toUpperCase()===this.props.text){
          this.audio.current.play();
        }
      });
    }
    
    playSound=()=>{
      this.audio.current.play();
      this.audio.current.parentNode.parentNode.parentNode.querySelector("h1").innerText= this.audio.current.parentNode.id;
    }
    
    render(){
      return(
        <div className="drum-pad" id={this.props.iD} onClick={this.playSound}>
          {this.props.text}
          <audio className="clip" id={this.props.text} ref={this.audio} src={this.props.audio} />
        </div>
      );
    }  
  }

export default Box;
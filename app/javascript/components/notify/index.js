import React from 'react';
// import styling from 'styled-components';
import { Success, Err, Info } from '../../home/style';
import ee from 'event-emitter';


const emitter = new ee();

export const note = (msg)=>{
  emitter.emiit('notification', msg);
}

 export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      top: -100,
      msg: '',
    };

    this.timeout = null;
    emitter.on('notification',(msg) =>{
        this.onShow(msg);
    });
  }

  onShow =(msg) => {
      if(this.timeout){
        clearTimeout(this.timeout);
        this.setState({ top: -100 }, () => {
          this.timeout = setTimeout(()=>{
            this.showNotification(msg);
          }, 500)
        });
      }else{
        this.showNotification(msg);
      }
  }

  showNotification = (msg) => {
    this.setState({
      top:16,
      msg
    }, () => {
        this.timeout = setTimeout(()=>{
          this.setState({
            top: -100,
          })
        }, 3000);
    });
  }

  render(){
    return(
      <>
      <Success top={this.state.top}>Hello World</Success>
      </>
    )
  }

}

// export default Display;



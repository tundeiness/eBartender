import React from 'react';
// import styling from 'styled-components';
// import { Success, Err, Info } from '../../home/style';
import ee from 'event-emitter';
// import Alert from 'react-bootstrap/Alert';
import  Toast from 'react-bootstrap/Toast';


const emitter = new ee();

export const note = (msg)=>{
  emitter.emiit('notification', msg);
}

export const DangerNotification = () => {

  return(
    <>
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert>
    </>
  )
}

export const ToastSuccess = (msg) => {

  return(
    <>
      <Toast style={{ backgroundColor: 'green' }} delay={2000} autohide>
        <Toast.Header>
          <img src='../../assets/check.svg' className='rounded mr-2' alt=''/>
          <strong>Success</strong>
        </Toast.Header>
        <Toast.Body> { msg }</Toast.Body>
      </Toast>
    </>
  )
}

export const ToastError = (msg) => {

  return(
    <>
      <Toast style={{ backgroundColor: 'red' }} delay={2000} autohide>
        <Toast.Header>
          <img src='../../assets/error.svg' className='rounded mr-2' alt=''/>
          <strong>Error</strong>
        </Toast.Header>
        <Toast.Body> {msg} </Toast.Body>
      </Toast>
    </>
  )
}

//  export class Display extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       top: -100,
//       msg: '',
//     };

//     this.timeout = null;
//     emitter.on('notification',(msg) =>{
//         this.onShow(msg);
//     });
//   }

//   onShow =(msg) => {
//       if(this.timeout){
//         clearTimeout(this.timeout);
//         this.setState({ top: -100 }, () => {
//           this.timeout = setTimeout(()=>{
//             this.showNotification(msg);
//           }, 500)
//         });
//       }else{
//         this.showNotification(msg);
//       }
//   }

//   showNotification = (msg) => {
//     this.setState({
//       top:16,
//       msg
//     }, () => {
//         this.timeout = setTimeout(()=>{
//           this.setState({
//             top: -100,
//           })
//         }, 3000);
//     });
//   }

//   render(){
//     return(
//       <>
//       <Success top={this.state.top}>Hello World</Success>
//       </>
//     )
//   }

// }

// export default Display;



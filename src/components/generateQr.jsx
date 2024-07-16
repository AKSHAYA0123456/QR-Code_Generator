import React, { Component } from 'react';
import { QRCode } from 'react-qrcode-logo';
const defURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
class GenerateQr extends Component {
    state = {  } 
    render() { 
        return (
            <QRCode fgColor='#ffffff' bgColor='rgba(0,0,0,0)' size='190' value={this.props.url || defURL} />
        );
    }
}
 
export default GenerateQr;
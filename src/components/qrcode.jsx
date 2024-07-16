import React, { Component } from 'react';
import GenerateQr from './generateQr';

class Qrcode extends Component {
    state = {}
    render() {
        return <div className='qrArea'>
            <div className='firstCircle'></div>
            <GenerateQr url={this.props.url}/>
            <div className='secondCircle'></div>
        </div>;
    }
}

export default Qrcode;
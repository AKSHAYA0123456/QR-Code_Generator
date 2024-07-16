import React, { Component, useState } from 'react';
import Qrcode from './qrcode';
import GeneratorBtn from './button';
const [data, setData] = useState;

class Card extends Component {
    state = {} 
    
render() {
    return <main>
        <Qrcode />
        <div className='textArea'>
            <div className='heading'>Improve your frontend skills by building projects</div>
            <div className='inputUrl'>
                <input type='url' >

                </input>
            </div>
            <div className='note'> Input the URL to generate QR code</div>
        </div>
        <GeneratorBtn />
    </main>
}
}

export default Card;
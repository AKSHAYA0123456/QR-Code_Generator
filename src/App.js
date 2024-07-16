import React, {useState} from 'react';
import Qrcode from './components/qrcode';
import './App.css';

function App() {
  const [data, setData] = useState();
  function getUrl(event){
    setData(event.target.value);
  }
  
  return (
    <div className="App">
      <main>
        <Qrcode url={data}/>
        <div className='textArea'>
            <div className='heading'>Generate QR code for your url</div>
            <div className='inputUrl'>
                <input className='urlInput' type='url' placeholder='Enter any URL or Text' onChange={getUrl}/>
            </div>
            <div className='note'>Scan the QR Code to go to the URL and share with friends</div>
        </div>
    </main>
    </div>
  );
}

export default App;

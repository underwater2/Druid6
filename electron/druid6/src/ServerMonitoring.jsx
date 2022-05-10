import {useState} from 'react';
import FileUpload from './FileUpload.jsx';

export default function ServerMonitoring() {
  
  const {ipcRenderer} =window.require("electron");
  const sendMain = () => {
    ipcRenderer.send("SEND_MAIN_PING", 'send what');
  }
  const [cpuUsage,setCpuUsage] = useState('');
  ipcRenderer.on("reply",(event,arg)=>{
    console.log('asd?');
    setCpuUsage(arg);
  })
  return (
    <div>
      <h1>ServerMonitoring</h1>
      <div id='text-box'>{cpuUsage}</div>
        <button onClick={sendMain}>Send Mail</button>
        <FileUpload />
      
    </div>
  );
}

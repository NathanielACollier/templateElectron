import {app, BrowserWindow} from 'electron';

let mainWindow: BrowserWindow = null;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({width: 800, height: 600});
    
});
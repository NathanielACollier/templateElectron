import {app, BrowserWindow} from 'electron';

let mainWindow: Electron.BrowserWindow = null;

app.on('ready',()=>{
    createWindow();
});

app.on('window-all-closed', ()=>{
    if( process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () =>{
    if( mainWindow == null ){
        createWindow();
    }
});

// some electron typings bug prevents just process.on("<event name>")
(process as NodeJS.EventEmitter).on('exit', (code) => {
    console.log('exit');
});

function createWindow(){
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL("http://google.com");
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed',()=>{
        mainWindow = null;
    });
}

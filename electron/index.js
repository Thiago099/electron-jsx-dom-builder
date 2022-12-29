const { app, BrowserWindow } = require('electron');



let win;

path = require('path');

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
        }
        
    });

    const isDev = require('electron-is-dev');
    if (isDev) {
        require('electron-reloader')(module);
        win.loadURL('http://127.0.0.1:5173/index.html')
    }
    else {
        win.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
    }
    win.setMenu(null);


});
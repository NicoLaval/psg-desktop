const { app, BrowserWindow } = require('electron');
const path = require('path');

let win = null;
global.env = {};

function createWindow() {
	win = new BrowserWindow({});

	win.maximize();
	if (process.env.ELECTRON_ENV === 'development') {
		global.env.fsPath = './public/local-data/';
		win.webContents.openDevTools();
		win.loadURL('http://localhost:3000');
	} else {
		global.env.fsPath = 'D:/psg-desktop-data/';
		win.loadURL(path.join(__dirname, '/build/index.html'));
	}

	// Remove window once app is closed
	win.on('closed', function() {
		win = null;
	});
}

app.on('ready', function() {
	createWindow();
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

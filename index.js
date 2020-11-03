const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    icon: path.join(__dirname, './assets/icon.png'),
    width: 800,
    height: 600,
    minWidth: 300,
    minHeight: 300
  })
  
  // hide toolbar
  win.setMenuBarVisibility(false);

  // loads apple music webplayer
  win.loadURL('http://music.apple.com')
  // injects css
  win.webContents.on('did-finish-load', function() {
    fs.readFile(__dirname+ '/styles.css', "utf-8", function(error, data) {
      if(!error){
      var formatedData = data.replace(/\s{2,10}/g, ' ').trim()
      win.webContents.insertCSS(formatedData)
      }
    })
  })
  // nukes electron when close button clicked
  // idk if this is the best way to handle it but otherwise you cant exit while music is playing
  win.on('close', () => {
    app.exit()
  })
}
// enables DRM and opens window
app.on('widevine-ready', createWindow)
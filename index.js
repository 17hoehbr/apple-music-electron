const { app, BrowserWindow } = require('electron');
require('v8-compile-cache');

// Check for updates
const { autoUpdater } = require("electron-updater");
app.on('ready', function() {
  autoUpdater.checkForUpdatesAndNotify();
});

// Logging
const log = require("electron-log");
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

// Cache
const express = require("express");
const fileCacheMiddleware = require("express-asset-file-cache-middleware");

const cache = express();

cache.get(
  "/assets/:asset_id",
  async (req, res, next) => {    
    res.locals.fetchUrl = [
      'http://musi.sh'
    ];
    next();
  },
  (req, res) => {
    res.set({
      "Content-Type": res.locals.contentType,
      "Content-Length": res.locals.contentLength
    });
    res.end(res.locals.buffer, "binary");
  }
);

cache.listen(3000);

// Create window
function createWindow() {
  const windowStateKeeper = require('electron-window-state');
  // Window state
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
  // Create the browser window.
  const path = require('path');
  const win = new BrowserWindow({
    icon: path.join(__dirname, 'icon.png'),
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    minWidth: 350,
    minHeight: 100,
    // hide until ready
    show: false,
    // Enables DRM
    webPreferences: {
      plugins: true,
      sandbox: true
    }
  });
  // Let us register listeners on the window, so we can update the state
  // automatically (the listeners will be removed when the window is closed)
  // and restore the maximized or full screen state
  mainWindowState.manage(win);
  // hides toolbar
  win.setMenuBarVisibility(false);
  // allows you to open toolbar by pressing alt
  win.setAutoHideMenuBar(true);
  // load Apple Music based on the store value
  // use http instead of https to fix adam id bug
  win.loadURL("http://musi.sh");
  // shows when ready
  win.once('ready-to-show', () => {
    win.show()
  })
  // nukes electron when close button clicked
  win.on('close', () => {
    app.exit();
  });
}

// enables DRM and opens window
app.on('widevine-ready', createWindow);

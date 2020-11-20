const { app, BrowserWindow, nativeTheme, Menu } = require('electron');

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

// electron-store
const Store = require("electron-store");
const storeSchema = {
  beta: {
    type: 'boolean',
    default: true
  },
  darkmode: {
    type: 'boolean',
    default: null
  }
};
const store = new Store(storeSchema);

// Custom menu
const menuSchema = [{
  label: "Settings",
  submenu: [{
      click: () => {
        store.set("beta", !store.get("beta")); // change beta setting on click
        app.relaunch();
        app.exit(); // restarts the app
      },
      type: "checkbox",
      label: "Use beta version",
      enabled: true,
      checked: store.get("beta")
    },
    {
      label: "Dark mode",
      type: "checkbox",
      enabled: true,
      checked: store.get("darkmode") === null ? nativeTheme.shouldUseDarkColors : store.get("darkmode"),
      click: () => {
        if (store.get("darkmode") === null) {
          store.set("darkmode", !nativeTheme.shouldUseDarkColors)
        } else store.set("darkmode", !store.get("darkmode"))
        nativeTheme.themeSource = store.get("darkmode") ? "dark" : "light"
      }
    }
  ]
}];
const menu = Menu.buildFromTemplate(menuSchema);
Menu.setApplicationMenu(menu);

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
      nodeIntegration: false,
      contextIsolation: true,
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
  win.loadURL(store.get("beta") ? "https://beta.music.apple.com" : "https://music.apple.com");
  // dark mode setting
  switch (store.get("darkmode")) {
    case null:
      nativeTheme.themeSource = "system";
      if (nativeTheme.shouldUseDarkColors) win.setBackgroundColor('#1f1f1f');
      break;
    case true:
      nativeTheme.themeSource = "dark";
      win.setBackgroundColor('#1f1f1f');
      break;
    default:
      nativeTheme.themeSource = "light";
      break;
  }
  // injects css from styles.css
  const fs = require('fs');
  win.webContents.on('did-finish-load', function() {
    fs.readFile(__dirname + '/styles.css', "utf-8", function(error, data) {
      if (!error) {
        var formatedData = data.replace(/\s{2,10}/g, ' ').trim();
        win.webContents.insertCSS(formatedData);
      }
    });
  });
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

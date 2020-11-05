# apple-music-electron
![preview.png](https://raw.githubusercontent.com/17hoehbr/apple-music-electron/master/preview.png)
=======
A desktop client for Apple Music using Electron.

This is my first github project so expect bugs.

Essentially all this does is load the music.apple.com site in an electron wrapper, so features available will be limited to those on Apple's web interface.

Initially created for Linux since iTunes is not available, but also compiled for Windows for those who find iTunes too bloated. Unlike iTunes this app should comply with Windows 10's Dark Mode.
# Download
Downloads available on the [release page](https://github.com/17hoehbr/apple-music-electron/releases).

I recemmend using the Appimage since it supports automatic updates, whereas the other packages will not until I get them listed on package managers.

I highly recommend using TheAssassin's [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) to install & run the Appimage. This should fully incorporate it into your distros application menu.

# Building from source
Requirements: YARN https://classic.yarnpkg.com/en/docs/install

1. Clone project

```$ git clone https://github.com/17hoehbr/Apple-Music-Wrapper.git```

2. Navigate to folder 

```$ cd apple-music-linux```

3. Install dependencies

```$ yarn install```

4. Compile

```$ yarn dist```

Alternatively you can run the app directly from source using
```$ yarn start```

Additional outputs can be configured by modifying the target value in package.json. All options can be found here https://www.electron.build/configuration/linux

# Credits
Icon created by [Tristan Edwards](https://dribbble.com/tristanedwards) and used under the [CC Attribute license](https://creativecommons.org/licenses/by/3.0/). No modifications have been made.

DRM support is provided by a custom version of electron by [castlabs](https://github.com/castlabs/electron-releases/).

Used IsmaelMartinez' unofficial [teams-for-linux client](https://github.com/IsmaelMartinez/teams-for-linux) as a reference for package.json layout.
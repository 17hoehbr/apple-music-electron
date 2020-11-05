# apple-music-electron
![preview.png](https://raw.githubusercontent.com/17hoehbr/apple-music-electron/master/preview.png)
=======
A desktop client for Apple Music using Electron.

This is my first github project so expect bugs. This project was made possible thanks to the castlabs electron fork which adds DRM support: https://github.com/castlabs/electron-releases/

Essentially all this does is load the music.apple.com site in an electron wrapper, so features available will be limited to those on Apple's web interface.

Initially created for Linux since iTunes is not available, but also compiled for Windows for those who find iTunes too bloated. Unlike iTunes this app should comply with Windows 10's Dark Mode.

# Download
Currently the only package formats supported is AppImage and a windows installer. This is because both allow for automatic updates unlike traditional linux packages. I am working on getting this listed on the AUR for Arch based distros and creating a PPA for debian based ones, but in the meantime use either the AppImage or follow the instructions below to build your prefered package from source.

I highly recommend using TheAssassin's [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) to install & run app image programs. This should fully incorporate it into your distros application menu.

Downloads available on the [release page](https://github.com/17hoehbr/apple-music-electron/releases).

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

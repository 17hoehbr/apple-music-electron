# apple-music-linux
![screenshot of app window](https://github.com/17hoehbr/Apple-Music-Wrapper/preview.png)

A desktop client for Apple Music using Electron.

This is my first github project so expect bugs. This project was made possible thanks to the castlabs electron fork which adds DRM support: https://github.com/castlabs/electron-releases/

Essentially all this does is load the music.apple.com site in an electron wrapper, so features available will be limited to those on Apple's web interface.

# Download
Pre-compiled binaries are available here:
https://github.com/17hoehbr/Apple-Music-Wrapper/releases

# Building from source
Requirements: YARN https://classic.yarnpkg.com/en/docs/install

1. Clone project

```$ git clone https://github.com/17hoehbr/Apple-Music-Wrapper.git```

2. Navigate to folder 

```$ cd Apple-Music-Wrapper```

3. Install dependencies

```$ yarn install```

4. Compile

```$ yarn dist```

Alternatively you can run the app directly from source without compiling using
```$ yarn start```

Additional outputs can be configured by modifying the target value in package.json. All options can be found here https://www.electron.build/configuration/linux


# Apple-Music-Wrapper
A linux desktop client for Apple Music using Electron.

This is my first project so expect bugs. This project was made possible thanks to castlabs electron fork that adds DRM support: https://github.com/castlabs/electron-releases/

I made this specifically for linux but I could see it being useful for Windows users who don't want to deal with iTunes. I'll try compiling a Windows port asap.

# Known bugs:
- App sometimes does not close while music is playing. Try pausing the music before closing the app if this happens frequently.
- Occasionally clicking shuffle will error message "adamId: null not found". Either ignore it and click it again or click play then enable shuffle from the control bar instead.

# Download

https://github.com/17hoehbr/Apple-Music-Wrapper/releases

# Building from source

Requirements: YARN https://classic.yarnpkg.com/en/docs/install

1. Clone project

```$ git clone git@github.com:17hoehbr/Apple-Music-Wrapper.git```

2. Navigate to folder 

```$ cd Apple-Music-Wrapper```

3. Install dependencies

```$ yarn install```

4. Compile

```$ yarn dist```

This will automatically generate several package outputs. Additional outputs can be configured by modifying the target value in package.json. All options can be found here https://www.electron.build/configuration/linux


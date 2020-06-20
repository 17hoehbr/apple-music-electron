# Apple-Music-Wrapper
A desktop client for Apple Music using Electron.

This is my first project so expect bugs. This project was made possible thanks to the castlabs electron fork which adds DRM support: https://github.com/castlabs/electron-releases/

Originally made for Linux which does not have a native iTunes App, but I found it useful for Windows as well since it is much lighter than iTunes and supports dark mode.

Essentially all this does is load the music.apple.com site in an Electron Wrapper, so obviously features available will be limited to Apple's web interface. This means that functions such as adding songs to playlists are not available until Apple updates their website. If you primarily use your Mac or iOS device to manage playlists and are just looking to stream them from your PC then this app should work great, but if you plan on only using your PC you may want to look into switching to Spotify until Apple adds more features to their web interface.

# Known bugs:
- App cannot be closed while music is playing, you must pause the current song then close. Seems relatively easy to fix but I haven't figured out what's causing it or how to pause a music stream in electron.

# Download

Pre-compiled binaries are available here:
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

Additional outputs can be configured by modifying the target value in package.json. All options can be found here https://www.electron.build/configuration/linux


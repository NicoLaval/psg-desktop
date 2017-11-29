# PoC Survey Generator - Desktop

This project allows to display survey forms in a disconnected environnement thanks to the plugin [generated-survey](https://github.com/NicoLaval/generated-survey).

It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Electron](https://github.com/electron/electron).

It was packaged thanks to [Electron Builder](https://github.com/electron-userland/electron-builder) to build portable Windows application (.exe).
See the [doc](https://github.com/electron-userland/electron-builder/blob/master/docs/configuration/configuration.md#build-version-management) for more configuration.

 is used to display survey forms :



## Installation

```sh
git clone https://github.com/NicoLaval/psg-desktop.git
cd psg-desktop
yarn
```  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
An [Electron](https://github.com/electron/electron) windows will be displayed.<br>

Local app will perform thanks to files into `public/local-data` folder.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run build`

Builds the application in the `dist` folder.

Data are to be setted in an external folder:
- required external json configurations of the GeneratedSurvey React component have to be placed in the `D:/psg-desktop-data` folder.<br>
- output data will be exported in the `D:/psg-desktop-data/investigated.json` file.

## Example configuration files

For a quick start, after building app, you can directly copy configuration files setted in the `psg-desktop-data` folder to `D:/psg-desktop-data` folder and launch the app.

# 🌟 Ruby-chan 🌟

A simple but cute chatbot based on [Bard API](https://github.com/EvanZhouDev/bard-ai)

## 🔗 Link to my website

You can directly visit my website on https://ruby-chan.vercel.app/

## 💻 How to run my website locally

### 1. Requirements

-   Make sure you have both [Visual Studio Code](https://code.visualstudio.com/) and [NodeJS](https://nodejs.org/en/download) installed

    > <u>Notes</u>: Node **v18.16.1** is recommended. Type `node-v` in the terminal to check the current version

-   [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the repository or download my zip files from [Google Drive](https://drive.google.com/drive/folders/1TrPktqUMe6a5bjYBcYkUrzRFWAflvtqY?usp=sharing)

### 2. Setups (important!)

> These steps below are quite general, if you run into any problem, use the link above or try to look it up on google

#### The frontend (React, Tailwind CSS)

-   Open the terminal and direct to the `client` folder
-   `npm init -y` to initialize a node project
-   Go to `package.json` and add `"types": "module"` to enable ES6 syntax
-   `npm i` to install all the dependencies
-   `cd..` and then `npm create vite@latest your-project-name -- --template react`
-   `cd your-folder-name` and `npx tailwindcss init -p`
-   Go to `client/src/routes/RubyChat/components/InputBox.jsx` and change the `backendLocalURL` to `https://localhost:8080`
-   Run the frontend: `npm run dev`
-   Expected output:

```
$ npm run dev

> project-name@0.0.0 dev
> vite


  VITE v4.3.9  ready in 1066 ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

#### The backend (Express, Bard API)

-   Open another terminal and direct to the `server` folder
-   `npm init -y` -> `npm i` -> `npm run dev`
-   Go to `package.json` and add `"types": "module"` to enable ES6 syntax
-   Expected output:

```
> server@1.0.0 dev
> nodemon server.js

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Ruby's alive on port http://localhost:8080
```

### 3. Enjoy and have a wonderful conversation 🥳

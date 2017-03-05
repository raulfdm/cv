# Personal Curriculum

This is a simple project to put a static cv using as the main tool [pugjs](https://pugjs.org/)

## Running

1. Open your terminal and clone the project
```
$ git clone https://github.com/raulfdm/cv.git
```
2. Go to it folder `$ cd cv/` and run the following command:

```bash
#if you use Yarn
$ yarn install

#if you use NPM
$ npm install
```

3. After that, you will build the files and bootstrap the server with the following command:
```bash
#if you use Yarn
$ yarn sv

#if you use NPM
$ npm run-script sv
```

4. If you want deploy your project to [Github Pages](https://pages.github.com/), run the command:
```bash
#if you use Yarn
$ yarn build-deploy

#if you use NPM
$ npm run-script build-deploy
```

## Secret move

In this case, I create a two CVs, one for development jobs and the other to staff jobs. To change without type an url, you just need to press: `Shift+S+T+F` and you will be redirected to **cv staff**. If you wrong the "combo", you can reset pressing **Backspace** 3 times.
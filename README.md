# CV Online
> :briefcase: Easy to see it, easy to print it. Responsive and printable!

## Stack
- Task Runner: [Gulp](http://gulpjs.com/)
- CSS Toll: [PostCSS](https://github.com/postcss/postcss)
- HTML Template Engine: [PUG (ex Jade)](https://pugjs.org/)
- Transpiler: [Babel JS](https://babeljs.io/)

## Running

1. Open your terminal and clone the project
```sh
$ git clone https://github.com/raulfdm/cv.git
```
2. Go to it folder `$ cd cv/` and run the following command:

```sh
#if you use Yarn
$ yarn install

#if you use NPM
$ npm install
```

3. After that, you will build the files and bootstrap the server with the following command:
```sh
#if you use Yarn
$ yarn start

#if you use NPM
$ npm run-script start
```

4. If you want deploy your project to [Github Pages](https://pages.github.com/), run the command:
```sh
#if you use Yarn
$ yarn deploy

#if you use NPM
$ npm run-script deploy
```

## Secret move

In this case, I create a two CVs, one for development jobs and the other to staff jobs. To change without type an url, you just need to press: `Shift+S+T+F` and you will be redirected to **cv staff**. If you wrong the "combo", you can reset pressing **Backspace** 3 times.
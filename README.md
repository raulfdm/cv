# CV Online
> :briefcase: Responsive and Printable CV using React and rendering a static website with GatsbyJS!

[Check it on Action here.](https://raulfdmcv.surge.sh/)

## Dependencies
- [GatsbyJS](https://www.gatsbyjs.org/) - Generate static websites with React.
- [styled-components](https://www.styled-components.com/) - Styling React components 
- [Surge](https://surge.sh/) - Hosting static websites

## Running

1. Open your terminal and clone the project
```sh
$ git clone https://github.com/raulfdm/cv.git
$ cd cv/
```
2. Install all dependencies:

```sh
$ yarn install
```

3. Run locally:

```sh
$ yarn start
```

## Deploy

Currently I'm using [Surge.sh](https://surge.sh/) to host mine. However you can use whatever service you'd prefer.

To get the built files, run the command

```sh
yarn build
```

and a `public/` folder will be generated. This folder contain all files to deploy.

### Using Surge

If you want use Surge as well, open your `package.json` and on `deploy` script, change the final URL for yours:

```diff
  "scripts": {
    "prebuild": "rimraf public",
    "build": "gatsby build",
    "predeploy": "npm run build",
-    "deploy": "surge -p public/ -d https://raulfdmcv.surge.sh",
+    "deploy": "surge -p public/ -d https://my-own-url.surge.sh",
    "start": "gatsby develop",
    "format": "prettier --write 'src/**/*.js'"
  },
```

And then:

```sh
yarn deploy
```

Don't know much about Surge? [Check it here](https://surge.sh/help/getting-started-with-surge).

## License

[MIT](./License)

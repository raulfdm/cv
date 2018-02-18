import moment from 'moment';
export default [
  {
    id: 1,
    name: 'Tibia Character - GraphQL API',
    timeInit: moment('01/02/2017', 'DD/MM/YYYY'),
    timeEnd: moment('10/02/2017', 'DD/MM/YYYY'),
    description: [
      `This project was built in order to make easy to retrieve information about characters on Tibia (MMORPG). So, a POST method is send to the API with a character name in body content, which is used to make a data scraping and return the important data from it.`,
      `The API was built using NodeJS + ExpressJS and deployed on Heroku. You can consult the documentation and get more details about this project on https://github.com/raulfdm/tibia-api`,
    ],
  },
  {
    id: 2,
    name: 'TACO - Rest API',
    timeInit: moment('01/01/2017', 'DD/MM/YYYY'),
    timeEnd: moment('30/01/2017', 'DD/MM/YYYY'),
    description: [
      `The main goal of this project was to create a Restful API to be consumed from some client-side or service and to make easier to access all the information about the Brazilian Food Composition Table made by UNICAMP.`,
      `The API was built using NodeJS + ExpressJS and MongoDB and deployed on Heroku. You can consult the documentation on https://github.com/raulfdm/taco-api`,
    ],
  },
];

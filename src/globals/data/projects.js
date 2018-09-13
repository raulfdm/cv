import moment from 'moment';
export default [
  {
    id: 1,
    name: 'Tibia Character - GraphQL API',
    timeInit: moment('01/02/2017', 'DD/MM/YYYY'),
    timeEnd: moment('10/02/2017', 'DD/MM/YYYY'),
    description: [
      `This project was built in order to make easy to retrieve information about characters on Tibia (MMORPG). The user can send a GraphQL query containing the character name and the application will make a data-scrapping on the official game website, organize all those information and send it back.`,
      `The API was built using NodeJS + ExpressJS + GraphQL and deployed on Heroku. Documentation is available at  https://github.com/raulfdm/tibia-api.`,
    ],
  },
  {
    id: 2,
    name: 'TACO - Rest API',
    timeInit: moment('01/01/2017', 'DD/MM/YYYY'),
    timeEnd: moment('30/01/2017', 'DD/MM/YYYY'),
    description: [
      `The main goal of this project was to create a RESTful API to be consumed for some client-side or services and to make easier to access all the information about the Brazilian Food Composition Table (TACO) made by UNICAMP (University of Campinas).`,
      `The API was built using NodeJS + ExpressJS and MongoDB and deployed on Heroku. Documentation is available at https://github.com/raulfdm/taco-api.`,
    ],
  },
];

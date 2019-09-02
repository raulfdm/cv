const faker = require('faker');

const result = {
  headers: {
    name: faker.name.findName(),
    description: faker.lorem.sentence(10),
  },
  generalInfo: [
    {
      name: faker.random.word(),
      href: faker.internet.url(),
      label: faker.random.words(2),
    },
    {
      name: faker.random.word(),
      href: faker.internet.url(),
      label: faker.random.words(2),
    },
  ],
  careerSummary: faker.lorem.paragraphs(4),
  skills: [
    {
      name: faker.random.word(),
      list: [faker.random.words(1), faker.random.words(1), faker.random.words(1)],
    },
    {
      name: faker.random.word(),
      list: [faker.random.words(1), faker.random.words(1)],
    },
  ],
};

module.exports = result;

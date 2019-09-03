const faker = require('faker');

const toProperIsoString = (date = new Date()) => date.toISOString().replace(/T.*/g, '');

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
      list: [faker.hacker.noun(), faker.hacker.noun(), faker.hacker.noun()],
    },
    {
      name: faker.random.word(),
      list: [faker.hacker.noun(), faker.hacker.noun()],
    },
  ],
  experiences: [
    {
      companyName: faker.company.companyName(),
      role: faker.name.jobTitle(),
      startDate: toProperIsoString(faker.date.past()),
      endDate: toProperIsoString(faker.date.past()),
      description: faker.lorem.paragraphs(1),
    },
    {
      companyName: faker.company.companyName(),
      role: faker.name.jobTitle(),
      startDate: toProperIsoString(faker.date.past()),
      isActual: true,
      description: faker.lorem.paragraphs(1),
    },
  ],
  sideProjects: [
    {
      name: faker.system.fileName(),
      startDate: toProperIsoString(faker.date.past()),
      endDate: toProperIsoString(faker.date.past()),
      description: faker.lorem.paragraphs(1),
    },
    {
      name: faker.system.fileName(),
      startDate: toProperIsoString(faker.date.past()),
      description: faker.lorem.paragraphs(1),
      isActual: true,
    },
  ],

  formalEducation: [
    {
      courseName: faker.random.words(2),
      foundation: faker.company.companyName(),
      startDate: toProperIsoString(faker.date.past()),
      endDate: toProperIsoString(faker.date.past()),
    },
    {
      courseName: faker.random.words(2),
      foundation: faker.company.companyName(),
      startDate: toProperIsoString(faker.date.past()),
      isActual: true,
    },
  ],

  languages: [faker.random.words(1), faker.random.words(1)],
  interests: [
    faker.random.words(1),
    faker.random.words(1),
    faker.random.words(1),
    faker.random.words(1),
  ],
};

module.exports = result;

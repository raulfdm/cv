import moment from 'moment';
export default {
  it: [
    {
      id: 1,
      timeInit: moment('01/05/2017', 'DD/MM/YYYY'),
      timeEnd: moment(),
      course: ' Full Stack Web Development Certification, Computer Software Engineering',
      place: `FreeCodeCamp`,
    },
    {
      id: 2,
      timeInit: moment('01/08/2013', 'DD/MM/YYYY'),
      timeEnd: moment('01/08/2017', 'DD/MM/YYYY'),
      course: 'Systems Information',
      place: 'Universidade de Ribeirão Preto (UNAERP)',
    },
  ],
  language: [
    {
      id: 3,
      label: 'Portuguese - Native',
    },
    {
      id: 4,
      label: 'English - Fluent',
    },
  ],
};

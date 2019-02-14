import moment from 'moment';

export const formatExperienceDate = date => date && moment(date, 'YYYY-MM-DD').format(`MMM'YY`);

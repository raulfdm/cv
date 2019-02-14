import moment from 'moment';

export const formatExperienceDate = date => date && moment(date).format(`MMM'YY`);

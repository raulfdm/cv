import dayjs from 'dayjs';

export const formatExperienceDate = date => {
  return date && dayjs(date).format("MMM'YY");
};

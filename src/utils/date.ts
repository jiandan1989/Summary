import moment from 'moment';

export const formatString = 'YYYY-MM-DD';
export const formatStringWithHMS = 'YYYY-MM-DD HH:mm:ss';

export function formatDate(date: any) {
  return moment(date).format(formatString);
}

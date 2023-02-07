import * as csv from 'csvtojson';
export const getJSON = async () => {
  return csv().fromFile(
    '/home/stanislav/projects/coding-challenge/coding-challenge/src/data-source/sample.csv',
  );
};

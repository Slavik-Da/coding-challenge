import * as csv from 'csvtojson';
import { dedupe } from 'json-dedupe';

export const getJSON = async () => {
  return csv()
    .fromFile(
      '/home/stanislav/projects/coding-challenge/coding-challenge/src/data-source/sample.csv',
    )
    .then((json) => {
      dedupe(json, ['customer_id', 'product_name']);
    });
};

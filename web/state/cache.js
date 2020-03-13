import _ from 'lodash';

const cache = {};

export default {
  set: (name, val) => {
    cache[name] = val;
    return true;
  },
  get: name => {
    if (_.has(cache, name)) return cache[name];
  },
};

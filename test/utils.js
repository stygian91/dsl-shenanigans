/**
 * External dependencies:
 */
import * as F from 'funky-lib';

export const filterOutPosition = (object) => {
  const result = {};

  F.forEach((value, key) => {
    if (key === 'start' || key === 'end') {
      return;
    }

    if (typeof value !== 'object') {
      result[key] = value;
    } else {
      result[key] = filterOutPosition(value);
    }
  }, object);

  return result;
};

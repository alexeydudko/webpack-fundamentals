/** @module ./rand-int */

const isValidNumber = (number) => (number === null || isNaN(number) || !isFinite(number) ? false : true);

/**
 * Generates random number within the specified range
 * @param {number} min - Lower range inclusively
 * @param {number} max - Upper range inclusively
 * @param {object} provider - Random method provider
 * @param {function() : number} provider.floor - A method for rounding a given number down
 * @param {function() : number} provider.random - A method for generating number that's greater than or equal to 0 and less than 1
 * @returns {number} Random number within the specified range
 */
export const randomInt = (min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, provider = Math) => {
  if (!isValidNumber(min) || !isValidNumber(max)) {
    throw new Error('The parameters must be numbers or strings representing numbers');
  }
  const { floor, random } = provider;
  const lowerRange = floor(Number(min));
  const upperRange = floor(Number(max));

  if (lowerRange > upperRange) {
    throw new Error(
      'The first number should represent the minimum range value and the second number should represent the maximum range value.',
    );
  }

  if (lowerRange === upperRange) {
    return lowerRange;
  }

  return lowerRange + floor(random() * (upperRange - lowerRange + 1));
};

import Supergalactic from '../src/js/supergalactic.js';

describe('Supergalactic', () => {

  let supergalactic;

  beforeEach(() => {
    supergalactic = new Supergalactic(25);
  });

  test('should correctly return the supergalactic age as entered', () => {
    expect(supergalactic.age).toEqual(25);
  });

  test('should correctly return the Mercurian age as converted from Earthen age', () => {
    expect(supergalactic.mercury()).toEqual(104.17);
  });

  test('should correctly return the Venusian age as converted from Earthen age', () => {
    expect(supergalactic.venus()).toEqual(40.32);
  });

  test('should correctly return the Martian age as converted from Earthen age', () => {
    expect(supergalactic.mars()).toEqual(13.30);
  });

  test('should correctly return the Jovian age as converted from Earthen age', () => {
    expect(supergalactic.jupiter()).toEqual(2.11);
  });

  test('should return the estimated years left to live on Mercury based on user\'s age (example as 25), given demographic expectancy (example of 80)', () => {
    const age = 25;
    const expectancy = 80;
    const planet = "Mercury"
    expect(supergalactic.lifeExpectancy(age, expectancy, planet)).toEqual(229.16);
  });

  test('should return the estimated years left to live on Venus based on user\'s age (example as 25), given demographic expectancy (example of 80)', () => {
    const age = 25;
    const expectancy = 80;
    const planet = "Venus"
    expect(supergalactic.lifeExpectancy(age, expectancy, planet)).toEqual(88.71);
  });

  test('should return the estimated years left to live on Mars based on user\'s age (example as 25), given demographic expectancy (example of 80)', () => {
    const age = 25;
    const expectancy = 80;
    const planet = "Mars"
    expect(supergalactic.lifeExpectancy(age, expectancy, planet)).toEqual(29.25);
  });

  test('should return the estimated years left to live on Jupiter based on user\'s age (example as 25), given demographic expectancy (example of 80)', () => {
    const age = 25;
    const expectancy = 80;
    const planet = "Jupiter"
    expect(supergalactic.lifeExpectancy(age, expectancy, planet)).toEqual(4.64);
  });

  test('should return the number of years the user has lived past the life expectancy for Mercury', () => {
    const age = 90;
    const expectancy = 80;
    const planet = "Mercury"
    expect(supergalactic.lifeExpectancy(age, expectancy, planet)).toEqual(41.67);
  });
});
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
    expect(supergalactic.mercury()).toEqual(104);
  });

  test('should correctly return the Venusian age as converted from Earthen age', () => {
    expect(supergalactic.venus()).toEqual(40);
  });

  test('should correctly return the Martian age as converted from Earthen age', () => {
    expect(supergalactic.mars()).toEqual(13);
  });

  test('should correctly return the Jovian age as converted from Earthen age', () => {
    expect(supergalactic.jupiter()).toEqual(2);
  });

  test('should return the estimated years left to live on a planet based on user\'s age (age as integer), given demographic expectancy (expectancy as integer) and chosen planet (planet as string)', () => {
    const age = 25;
    const expectancy = 80;
    const planet = "Mercury"
    expect(supergalactic.lifeExpectancy(age, expectancy, planet)).toEqual(229);
  });

  test('should display a special message if the user has exceeded their life expectancy', () => {
    const age = 90;
    const expectancy = 80;
    const planet = "Mercury"
    expect(supergalactic.lifeExpectancy(age, expectancy, planet)).toEqual("Wow, you made it to 374? That's 41 years longer than expected for Mercury!");
  });
});
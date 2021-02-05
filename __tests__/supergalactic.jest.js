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
});
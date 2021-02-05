import Supergalactic from '../src/js/supergalactic.js';

describe('Supergalactic', () => {

  test('should correctly return the supergalactic age as entered', () => {
    const supergalactic = new Supergalactic(25);
    expect(supergalactic.age).toEqual(25);
  });

  test('should correctly return the Mercurian age as converted from Earthen age', () => {
    const supergalactic = new Supergalactic(25);
    expect(supergalactic.mercury()).toEqual(107);
  });
});
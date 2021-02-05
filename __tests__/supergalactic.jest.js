import Supergalactic from '../src/js/supergalactic.js';

describe('Supergalactic', () => {

  test('should correctly return the supergalactic age as entered', () => {
    const supergalactic = new Supergalactic(100);
    expect(supergalactic.age).toEqual(100);
  });
});
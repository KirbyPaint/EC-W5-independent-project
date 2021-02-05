import Supergalactic from '../src/js/supergalactic.js';

describe('Triangle', () => {

  test('test', () => {
    const supergalactic = new Supergalactic(100);
    expect(supergalactic.age).toEqual(100);
  });
});
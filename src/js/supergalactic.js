export default class Supergalactic {
  constructor(age) {
    this.age = age;
  }

  mercury() {
    this.age = Math.floor(this.age * 4.1628);
    return this.age;
  }
}
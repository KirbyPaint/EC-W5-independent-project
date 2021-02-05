export default class Supergalactic {
  constructor(age) {
    this.age = age;
  }

  mercury() {
    this.age = Math.floor(this.age * 4.1628);
    return this.age;
  }

  venus() {
    this.age = Math.floor(this.age * 1.6280);
    return this.age;
  }

  mars() {
    return this.age;
  }
}
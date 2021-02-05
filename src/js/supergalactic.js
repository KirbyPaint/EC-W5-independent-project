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
    this.age = Math.floor(this.age * 0.5310);
    return this.age;
  }

  jupiter() {
    this.age = Math.floor(this.age * 0.0845);
    return this.age;
  }

  lifeExpectancy() {
    return this.age;
  }
}
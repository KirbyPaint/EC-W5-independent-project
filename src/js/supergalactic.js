export default class Supergalactic {
  constructor(age) {
    this.age = age;
  }

  mercury() {
    this.age = this.age * 4.1628;
    console.log(this.age);
    return this.age;
  }
}
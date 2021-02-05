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

  lifeExpectancy(age, expectancy, planet) {
    let supergalacticLifeExpectancy;
    let supergalacticAge;
    switch (planet) {
      case "Mercury":
        supergalacticAge = new Supergalactic(age).mercury();
        break;
      case "Venus":
        supergalacticAge = new Supergalactic(age).venus();
        break;
      case "Mars":
        supergalacticAge = new Supergalactic(age).mars();
        break;
      case "Jupiter":
        supergalacticAge = new Supergalactic(age).jupiter();
        break;
    }
    supergalacticLifeExpectancy = Math.floor(((expectancy * supergalacticAge) / age));
    let yearsLeft = supergalacticLifeExpectancy - Math.floor(supergalacticAge);
    return yearsLeft;
  }
}
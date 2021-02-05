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
      supergalacticLifeExpectancy = new Supergalactic(expectancy).mercury();
      break;
    case "Venus":
      supergalacticAge = new Supergalactic(age).venus();
      supergalacticLifeExpectancy = new Supergalactic(expectancy).venus();
      break;
    case "Mars":
      supergalacticAge = new Supergalactic(age).mars();
      supergalacticLifeExpectancy = new Supergalactic(expectancy).mars();
      break;
    case "Jupiter":
      supergalacticAge = new Supergalactic(age).jupiter();
      supergalacticLifeExpectancy = new Supergalactic(expectancy).jupiter();
      break;
    }
    let yearsLeft = supergalacticLifeExpectancy - supergalacticAge;
    if (yearsLeft < 0) {
      return `Wow, you made it to ${supergalacticAge}? That's ${(yearsLeft * -1)} years longer than expected for ${planet}!`;
    } else {
      return Math.floor(yearsLeft);
    }
  }
}
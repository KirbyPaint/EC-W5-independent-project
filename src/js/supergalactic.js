export default class Supergalactic {
  constructor(age) {
    this.age = age;
  }

  mercury() {
    const num = (this.age / 0.24);
    this.age = parseFloat(num.toFixed(2));
    return this.age;
  }

  venus() {
    const num = (this.age / 0.62);
    this.age = parseFloat(num.toFixed(2));
    return this.age;
  }

  mars() {
    const num = (this.age / 1.88);
    this.age = parseFloat(num.toFixed(2));
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
      return Math.floor(yearsLeft * (-1));
    } else {
      return Math.floor(yearsLeft);
    }
  }
}
import { getJupiterLifeExpectancy, getMarsLifeExpectancy, getVenusLifeExpectancy, getMercuryLifeExpectancy, getEarthLifeExpectancy,getJupiterAge, getMarsAge, getVenusAge, getEarthAge, getMercuryAge } from './../src/age.js';

describe('Age', function () {

  it('should test if Earth age is accurate based on year', function () {
    let age =  getEarthAge(1900);
    let result = 2018-1900;
    expect(age).toEqual(result);
  });
  it('should test if Mercury age is accurate', function () { 
    let test = Math.floor(42 * 1.24);
    let result = getMercuryAge(42);
    expect(test).toEqual(result);
  });
  it('should test if Venus age is accurate', function () { 
    let test = Math.floor(42 * 1.62);
    let result = getVenusAge(42);
    expect(test).toEqual(result);
  });
  it('should test if Mars age is accurate', function () { 
    let test = Math.floor(42 / 1.88);
    let result = getMarsAge(42);
    expect(test).toEqual(result);
  });
  it('should test whether Jupiter age is accurate', function () { 
    let test = Math.floor(42 / 11.86);
    let result = getJupiterAge(42);
    expect(test).toEqual(result);
  });
  it('should test if Earth life expectancy is accurate', function () { 
    let test = 80-55;
    let result = getEarthLifeExpectancy(55);
    expect(test).toEqual(result);
  });
  it('should test if Earth life expectancy is accurate if age is above average life expectancy', function () { 
    let test = Math.abs(80-90);
    let result = getEarthLifeExpectancy(90);
    expect(test).toEqual(result);
  });
  it('should test if Mercury life expectancy is accurate', function () { 
    let test = Math.floor((80-55) * 1.24);
    let result = getMercuryLifeExpectancy(55);
    expect(test).toEqual(result);
  });
  it('should test if Venus life expectancy is accurate', function () { 
    let test = Math.floor((80-55) * 1.62);
    let result = getVenusLifeExpectancy(55);
    expect(test).toEqual(result);
  });
  it('should test if Mars life expectancy is accurate', function () { 
    let test = Math.floor((80-55) / 1.88);
    let result = getMarsLifeExpectancy(55);
    expect(test).toEqual(result);
  });
  it('should test if Jupiter life expectancy is accurate', function () { 
    let test = Math.floor((80-55) / 11.86);
    let result = getJupiterLifeExpectancy(55);
    expect(test).toEqual(result);
  });
});
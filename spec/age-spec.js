import { getVenusLifeExpectancy, getMercuryLifeExpectancy, getEarthLifeExpectancy,getJupiterAge, getMarsAge, getVenusAge, getEarthAge, getMercuryAge } from './../src/age.js';

describe('Age', function () {

  it('should test if age is accurate based on year', function () {
    var age =  getEarthAge(1900);
    var result = 2018-1900;
    expect(age).toEqual(result);
  });
  it('should test if Mercury age is accurate', function () { 
    var test = Math.floor(42 * 1.24);
    var result = getMercuryAge(42);
    expect(test).toEqual(result);
  });
  it('should test if Venus age is accurate', function () { 
    var test = Math.floor(42 * 1.62);
    var result = getVenusAge(42);
    expect(test).toEqual(result);
  });
  it('should test if Mars age is accurate', function () { 
    var test = Math.floor(42 / 1.88);
    var result = getMarsAge(42);
    expect(test).toEqual(result);
  });
  it('should test whether Jupiter age is accurate', function () { 
    var test = Math.floor(42 / 11.86);
    var result = getJupiterAge(42);
    expect(test).toEqual(result);
  });
  it('should test if earth life expectancy is accurate', function () { 
    var test = 80-55;
    var result = getEarthLifeExpectancy(55);
    expect(test).toEqual(result);
  });
  it('should test if earth life expectancy is accurate if age is above average life expectancy', function () { 
    var test = Math.abs(80-90);
    var result = getEarthLifeExpectancy(90);
    expect(test).toEqual(result);
  });
  it('should test if mercury life expectancy is accurate', function () { 
    var test = Math.floor((80-55) * 1.24);
    var result = getMercuryLifeExpectancy(55);
    expect(test).toEqual(result);
  });
  it('should test if venus life expectancy is accurate', function () { 
    var test = Math.floor((80-55) * 1.24);
    var result = getVenusLifeExpectancy(55);
    expect(test).toEqual(result);
  });
});
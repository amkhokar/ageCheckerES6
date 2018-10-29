import { getMarsAge, getVenusAge, getEarthAge, getMercuryAge } from './../src/age.js';

describe('Age', function () {

  it('should test whether age is accurate based on year', function () {
    var age =  getEarthAge(1900);
    var result = 2018-1900;
    expect(age).toEqual(result);
  });
  it('should test whether Mercury age is accurate', function () { 
    var test = Math.floor(42 * 1.24);
    var result = getMercuryAge(42);
    expect(test).toEqual(result);
  });
  it('should test whether Venus age is accurate', function () { 
    var test = Math.floor(42 * 1.62);
    var result = getVenusAge(42);
    expect(test).toEqual(result);
  });
  it('should test whether Mars age is accurate', function () { 
    var test = Math.floor(42 / 1.88);
    var result = getMarsAge(42);
    expect(test).toEqual(result);
  });
});
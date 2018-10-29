import { Age } from './../src/age.js';

describe('Age', function () {

  it('should test whether age is accurate based on year', function () {
    var age = new Age(1900).age;
    var result = 2018-1900;
    expect(age).toEqual(result)
  });
});
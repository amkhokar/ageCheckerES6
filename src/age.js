export function getEarthAge(year) {
  return new Date().getFullYear() - year;
}

export function getEarthLifeExpectancy(age){
  return Math.abs(80-age);
}

export function getMercuryAge(age) {
  return Math.floor(age * 1.24);
}

export function getVenusAge(age) {
  return Math.floor(age * 1.62);
}

export function getMarsAge(age) {
  return Math.floor(age / 1.88);
}

export function getJupiterAge(age) {
  return Math.floor(age / 11.86);
}

export function getMercuryLifeExpectancy(age) {
  return Math.floor(Math.abs(80-age) * 1.24);
}
export function getEarthAge(year) {
  return new Date().getFullYear() - year;
}

export function getMercuryAge(age) {
  return Math.floor(age * 0.24);
}
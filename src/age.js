export function getEarthAge(year) {
  return new Date().getFullYear() - year;
}

export function getMercuryAge(age) {
  return age * 5;
}
export function Age(year) {
  this.age = new Date().getFullYear() - year;
}
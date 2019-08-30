export function stringToArrayOfParagrahs(str) {
  return str.split(/\n/g).filter(val => val);
}

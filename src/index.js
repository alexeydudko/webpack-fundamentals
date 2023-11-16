import { randomInt } from './rand-int';

console.log(randomInt('8.99999', 20));
console.log(randomInt(8, 20));
try {
  console.log(randomInt(1, -1));
} catch (e) {
  console.log(e.message);
}
try {
  console.log(randomInt(null, 11));
} catch (e) {
  console.log(e.message);
}
console.log(randomInt(undefined));
console.log(randomInt());

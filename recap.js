// 1. const and let 
const name1 = 'somthing somthing';
let name2 = 'somthing only';
name2 = 'somthing somthing somthing';
// console.log(name2);

// 2. template string / template literals / string template 
const myProduct = {
  type: 'laptop', name: 'Dell', color: 'black', body: 'metal', price: 56000,
  extra: { keyboard: 'metalic', haveMouse: true, haveKeyboard: false }
};
const multiply = (num1, num2) => num1 * num2;
const myName = 'Wahidul Alam';
const myAge = 23;
const about = `Hello, I am ${myName},I am ${23} years old. I have a ${myProduct.type},whiche color is ${myProduct.color} and body of ${myProduct.body}.It cost ${myProduct.price}. I am loving to use the ${myProduct.extra.keyboard} keyboard of the ${myProduct.name} ${myProduct.type}. 
I can multiply two numbers using this . 
let's multiply 9 & 12 and the result is : ${multiply(9, 12)}
`;
// console.log(about);

// 3. arrow function 
// 3.a:
const devideBy5 = num => num / 5;
const result = devideBy5(65);
// console.log(result);

// 3.b: 
const add2AndMultiply = (num1, num2) => (num1 + 2) * (num2 + 2);
const result2 = add2AndMultiply(3, 4);
// console.log(result2);

// 3.c: 
const multiply3Nums = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply3Nums(5, 2, 8));

// 3.d:
const multipleLine = (number1, number2, number3) => {
  const number1Double = number1 * 2;
  const number2Double = number2 * 2;
  const number3Double = number3 * 2;
  return number1Double * number2Double * number3Double;
}
// console.log(multipleLine(2, 3, 4));

// 4. java script function declaration vs arrow function 
// 4.5. differance between const, let, var

// 5. array map()
const numbers = [3, 6, 12, 75, 7, 32, 52, 8, 27, 4];
const fiveTimesMultiple = numbers.map(number => number * 5);
// console.log(fiveTimesMultiple);

// 6. array filter()
const nums = [12, 52, 58, 37, 3, 84, 5, 8, 36, 86, 17, 38, 55, 69, 4, 11];
const oddNums = nums.filter(num => num % 2 != 0);
// console.log(oddNums);

// 7. array find()
const products = [
  { type: 'mobile phone', model: 'nokia e71', price: 18000 },
  { type: 'calculator', model: 'casio', price: 800 },
  { type: 'laptop', model: 'dell', price: 55000 },
  { type: 'mobile phone', model: 'IphoneXI', price: 75000 },
  { type: 'key board', model: 'delux', price: 600 }
];
const upTo50K = products.find(product => product.price > 50000);
// console.log(upTo50K);

// 7.5. summary of map(), forEact(), filter(), find()
/* 
  array map(): const variable = arrayName.map(element => //expression )
  -- array map() e array er prothi ta element k alada kore niye jei function ti declare kora hoyeche tar moddhe prothi ta element k modify kore prothi ta element er jonno ekta kore result return kore bam pashe declare kora variable e array akare prothi ta element k store kore . Orthat final result hishebe ekta array return kore. 
  array forEach(): arrayName.forEach(element => console.log(//expression));
  -- array forEach() e array er prothi ta element k alada kore niye jei function ti declare kora hoyeche tar moddhe prothi ta element k modify kore oi function thekei prothi ta element er jonno jei result ta ashe sheti k console.log kore dei. Orthat ekhetre kono return value ashena + kono notun array create hoina . just function er bhetor theke value gulor modified result k ektar por ekta console.log korte thake.
  array filter(): const variable = arrayName.filter(element => //conditional expression ); 
  -- array filter() e array er prothi ta element k alada kore shegulo k declare kora function e loop through kora hoi & ekta condition e giye result ti return kora hoi. ekhane jei jei element gulo condition fulfil kore shei element gulo k return kore bam pashe declare kora variable , ja ekti array , tar moddhe store kore rakha hoi.Orthat return hishebe jei jei element condition fulfil koreche tader ekti array amra pai.
  array find(): const variable = arrayName.find(element => //conditional expression );
  -- array find() e array er prothi ta element k alada kore shegulo k declare kora funciton e loop through kora hoi & ekta condition e giye first jei element ti condition fulfil kore shei element ti ke return kora hoi bam pasher variable ti the . Orthath return hishebe just first jei element ti condition full fill koreche take pabo .
  /// prothi ti element er modified version pabo map() & forEach() method diye . 
  /// exactly element / elements k pabo (jara condition fulfil koreche) filter() & find() method diye .
 */

// 8. object destructuring 
const myProduct2 = {
  type: 'laptop', name: 'Dell', color: 'black', body: 'metal', price: 56000,
  extra: { keyboard: 'metalic', haveMouse: true, haveKeyboard: false }
};
const { name, price, color } = myProduct2;
const { keyboard, haveMouse } = myProduct2.extra;
// console.log(keyboard, haveMouse, name, price, color);

// 9. array destructuring 
const [, , three] = ['Wahid', 'Simra', 'Moshu'];
const smallNums = [23, 73, 81, 47, 38, 55, 26, 99];
const [, , , , , sixth] = smallNums;
// console.log(three, sixth);

// 10. default parameter
function multiply3Numbers(num1, num2, num3 = 7) {
  return num1 * num2 * num3;
}
// console.log(multiply3Numbers(2, 5));
const mult3Nums = (num1, num2, num3 = 7) => num1 * num2 * num3;
// console.log(mult3Nums(3, 4))
// console.log(mult3Nums(3, 4, 5))

// 11. nested object with a property of array 
const randomThings = {
  type: 'metarials',
  name: {
    laptop: 'dell', phone: 'nokia', calculator: 'casio', mouse: '3d optical mouse', keyboard: 'delux'
  },
  prices: [55000, 18000, 600, 300, 700],
  color: {
    dark: { pink: 'dark pink', red: ' dark red', gray: 'dark gray' }, light: { yellow: 'light yellow', cyan: 'light cyan' }
  }
}
// console.log(randomThings.prices);
// console.log(randomThings.prices[3]);
// console.log(randomThings.name.mouse);
// console.log(randomThings.color.light.cyan);

// 12. optional chaining using the same object
// console.log(randomThings.color.lights?.cyan);
// console.log(randomThings.names?.keyboard);

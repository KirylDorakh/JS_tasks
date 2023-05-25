const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
const RENT = 40000
const FOOD = 15000
const OTHER = 15000
const MY_SALARY = 120000

const ndflTax = MY_SALARY * NDFL;
const mySalaryNet = MY_SALARY - ndflTax;
const otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
console.log('Зарплата ' + MY_SALARY + ' рублей')
console.log('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
console.log('Осталось ' + totalAvailable + ' рублей')
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company) {
//     console.log(company);
// });

// filter
// let canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// let retailCompany = companies.filter(company => company.category == 'Retail');
// console.log(retailCompany);

// let eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eightiesCompanies);

// let lastedTenYearsCompanies = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYearsCompanies);

// map
// const test = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(test);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesSquare);
// console.log(agesTimesTwo);

// sort
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// reduce
// let ageSum = ages.reduce((a, b) => a + b);
// console.log(ageSum);

// let totalYears = companies.reduce((a, b) => a + (b.end - b.start), 0);
// console.log(totalYears);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let ofAge = ages.filter(age => age >= 21);
// console.log(ofAge);

// ages.forEach(age => console.log(age));

let doubleAge = ages.map(age => age * 2);
// console.log(doubleAge);

const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

let agesSum = ages.reduce((a, b) => a + b);
// console.log(agesSum);
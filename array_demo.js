
//let selectedColors=[];//empty array
// let selectedColors=['Blue','red'];//inizilizing array
// console.log(selectedColors);
// selectedColors[2]='green'; //adding dynamically
// console.log(selectedColors);
// selectedColors[3]=4; //differnt data type
// console.log(selectedColors);
// selectedColors[4]=[1,2,43]; //differnt data type
// selectedColors.push('hia');
// console.log(selectedColors);
// selectedColors.pop();
// console.log(selectedColors);




const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
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

/*
//forEach();
// companies.forEach(function(c){
//     console.log(c.name);
// });

// companies.forEach((company)=>{
//     console.log(company.name);
// });

*/


/*
//filter
//console.log(ages);
// const agesfil = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// });

// const agesfil =ages.filter(age=> age>=21)
const companyTechs= companies.filter(company=> company.category=="Technology")
//console.log(companyTechs);
// console.log(companies);

*/


/* 
//Map
// const companyNamesTech=companies.map(function(company){
//         return company.name;
// });

const companyNamesTech=companies.map(company=>company.name);
*/

/*
// const companySort= companies.sort(function(c1,c2){
//   if(c1.start>c2.start){
//     return 1;
//   }else{
//     return -1;
//   }
// });
//const companySort= companies.sort((c1,c2)=> c1.start>=c2.start? 1:-1);
//const sortedAges= ages.sort(); // only sort by first number
//const sortedAges= ages.sort((a,b)=>a-b); // asc
// const sortedAges= ages.sort((a,b)=>b-a); // asc
// console.log(sortedAges);

*/


//reduce (to sum up)
// const ageSum= ages.reduce(function(total,age){
//   return total+age;
// },0);//default value of total

const ageSum= ages.reduce((total,age)=> total+age,0);// second parameter default value of total
console.log(ageSum);
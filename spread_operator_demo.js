const first=[1,2,3];
const second=[4,5,6];

//Traditional way
//const combined=first.concat(second);
//using spread operator
//const combined=[...first,...second];


//can add element in middle
// const combined=[...first,7,...second];
// console.log(combined);

//using object

const obj1={name :'Vaibhav'};
const obj2={job:'Developer'};

//combining using spread operator
const combined={...obj1,...obj2, location: 'India'};

console.log(combined);
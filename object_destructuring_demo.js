const address={
    street: 'P. M Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India'
}

//Typically storing each data in variables manually
// const street=address.street
// const city=address.city
// const state=address.state
// const country=address.country

//using object destructuring
// const{street ,city, state, country}=address;

// console.log(`${street} ${city} ${state} ${country}`);


// with different name alias 

const { street : st} =address;
console.log(st);
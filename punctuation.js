//remove all punctuation from an string with the help of string prototype replace function;

const country = 'bangl$ad/esh';
//about replace function in javascript;
country.replace(/[^\w\s]|_/g, "")
.replace(/\s+/g, " ");
;

console.log(country);

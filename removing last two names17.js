let guests=["Ali","Asad","Ejaz","Hassan","Zawar","Mohsan"];
console.log(guests);
console.log("i can not invite you at dinner "+guests[5]);
guests.pop();
console.log();


console.log(guests);
console.log("i can not invite you at dinner Zawar");
guests.pop();

console.log(guests);
console.log("i can not invite you at dinner Hassan");
guests.pop();

console.log(guests);
console.log("i can not invite you at dinner Ejaz");
guests.pop();

console.log(guests);
console.log("you are still invited "+ guests[0]);
console.log("you are still invited "+ guests[1]);
guests.pop();
guests.pop();
console.log(guests);
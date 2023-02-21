let guests : string[] = ["Fahim" , "Owais" , "Tahir", "Mansoor"];
for (let guest in guests) {
    console.log(`Dear ${guests[guest]} you're cordially Invited to Dinner Today.`);  
} 

console.log(`Unfortunately ${guests[1]} is not coming to Dinner.`);
guests[1] = "Rauf";

for (let guest in guests) {
    console.log(`Dear ${guests[guest]} you're cordially Invited to Dinner Today.`);  
}

console.log("Guys I have found a bigger Dinner Table");

guests.unshift("Faizan");
guests.splice(3, 0, "Rehan");
guests.push("Atif");

for (let guest in guests) {
    console.log(`Dear ${guests[guest]} you're cordially Invited to Dinner Today.`);  
}

console.log("Sorry Guys Dinner Table can't arrive at time, So I can invite only two people");
let guest1 = guests.pop();
console.log(`Sorry ${guest1} I can't Invite you to Dinner`);

let guest2 = guests.pop();
console.log(`Sorry ${guest2} I can't Invite you to Dinner`);


let guest3 = guests.pop();
console.log(`Sorry ${guest3} I can't Invite you to Dinner`);


let guest4 = guests.pop();
console.log(`Sorry ${guest4} I can't Invite you to Dinner`);

let guest5 = guests.pop();
console.log(`Sorry ${guest5} I can't Invite you to Dinner`);

for(let guest in guests){
    console.log(`${guests[guest]} you're still invited.`);
    
}
 
 console.log(`The Number of People I am Inviting is ${guests.length}`);

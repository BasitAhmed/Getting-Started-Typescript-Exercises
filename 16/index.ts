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


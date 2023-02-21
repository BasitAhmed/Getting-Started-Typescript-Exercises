var guests = ["Fahim", "Owais", "Tahir", "Mansoor"];
for (var guest in guests) {
    console.log("Dear ".concat(guests[guest], " you're cordially Invited to Dinner Today."));
}
console.log("Unfortunately ".concat(guests[1], " is not coming to Dinner."));
guests[1] = "Rauf";
for (var guest in guests) {
    console.log("Dear ".concat(guests[guest], " you're cordially Invited to Dinner Today."));
}
console.log("Guys I have found a bigger Dinner Table");
guests.unshift("Faizan");
guests.splice(3, 0, "Rehan");
guests.push("Atif");
for (var guest in guests) {
    console.log("Dear ".concat(guests[guest], " you're cordially Invited to Dinner Today."));
}

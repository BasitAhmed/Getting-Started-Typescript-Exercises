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
console.log("Sorry Guys Dinner Table can't arrive at time, So I can invite only two people");
var guest1 = guests.pop();
console.log("Sorry ".concat(guest1, " I can't Invite you to Dinner"));
var guest2 = guests.pop();
console.log("Sorry ".concat(guest2, " I can't Invite you to Dinner"));
var guest3 = guests.pop();
console.log("Sorry ".concat(guest3, " I can't Invite you to Dinner"));
var guest4 = guests.pop();
console.log("Sorry ".concat(guest4, " I can't Invite you to Dinner"));
var guest5 = guests.pop();
console.log("Sorry ".concat(guest5, " I can't Invite you to Dinner"));
for (var guest in guests) {
    console.log("".concat(guests[guest], " you're still invited."));
}
guests = [];
console.log(guests);

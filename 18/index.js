"use strict";
let places = ["Kashmir", "New York", "Dubai", "Istanbul", "Baghdad"];
console.log("---- Original Array ----");
for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("---- Alphabetic Order ----");
let sort = places.slice().sort();
for (let i = 0; i < sort.length; i++) {
    console.log(sort[i]);
}
console.log("---- Original Array ----");
for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("---- Reverse Alphabetic Order ----");
let sort2 = places.slice().sort();
let reverse = sort2.reverse();
for (let i = 0; i < reverse.length; i++) {
    console.log(reverse[i]);
}
console.log("---- Original Array ----");
for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("---- Reverse Array List ----");
let reverse2 = places.slice().reverse();
for (let i = 0; i < reverse2.length; i++) {
    console.log(reverse2[i]);
}
console.log("---- Reverse Array List Again ----");
let reverse3 = reverse2.slice().reverse();
for (let i = 0; i < reverse3.length; i++) {
    console.log(reverse3[i]);
}
console.log("---- Sort Array List ----");
let sort3 = reverse3.slice().sort();
for (let i = 0; i < sort3.length; i++) {
    console.log(sort3[i]);
}
console.log("---- Sort Array List Again in Reverse Order ----");
let sort4 = sort3.slice().reverse();
for (let i = 0; i < sort4.length; i++) {
    console.log(sort4[i]);
}

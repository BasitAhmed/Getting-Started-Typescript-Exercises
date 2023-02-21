let person_name : string = "\tBasit\nAhmed";
console.log(person_name);
let formatted_name : string = person_name.toString().replace('\t', '');
var s : string = formatted_name.toString().replace("\n",' ');
console.log(s.toString());
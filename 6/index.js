var person_name = "\tBasit\nAhmed";
console.log(person_name);
var formatted_name = person_name.toString().replace('\t', '');
var s = formatted_name.toString().replace("\n", ' ');
console.log(s.toString());

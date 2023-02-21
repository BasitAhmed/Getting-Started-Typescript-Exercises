var personName = "bAsiT aHmEd";
var upperCase = personName.toUpperCase();
var lowercase = personName.toLowerCase();
console.log(upperCase);
console.log(lowercase);
function titleCasefunc(name) {
    return name.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join();
}
var titleCase = titleCasefunc(personName);
console.log(titleCase);

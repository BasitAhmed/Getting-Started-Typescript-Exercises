let personName = "bAsiT aHmEd";
let upperCase = personName.toUpperCase( );
let lowercase = personName.toLowerCase();

console.log(upperCase);
console.log(lowercase);


function titleCasefunc(name :string) : string{
  return name.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join();
}

let titleCase = titleCasefunc(personName);
console.log(titleCase);
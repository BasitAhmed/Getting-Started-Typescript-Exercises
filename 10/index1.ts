
let personName = "bAsiT aHmEd";

// Converting Person Name To Uppercase
let upperCase = personName.toUpperCase( );

// Converting Person Name To LowerCase
let lowercase = personName.toLowerCase();

console.log(upperCase);
console.log(lowercase);


function titleCasefunc(name :string) : string{
  return name.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join();
}

// Converting Person Name To TitileCase
let titleCase = titleCasefunc(personName);
console.log(titleCase);
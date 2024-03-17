var personName = "huzaifa";
var lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
var uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
function totitlecase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
var titlecasename = totitlecase(personName);
console.log("titlecasename:", titlecasename);

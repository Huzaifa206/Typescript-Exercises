const personName: string = "huzaifa";

const lowercaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);

const uppercaseName: string = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);

function totitlecase(str:string):string {
    return str.replace(/\b\w/g , (char:string) => char.toUpperCase());
}


const titlecasename:string = totitlecase(personName);
console.log("titlecasename:", titlecasename);
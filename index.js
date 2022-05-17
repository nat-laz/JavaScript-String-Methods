// JavaScript String Methods
// 

const str = "Web Developer!"; // 12 characters

// 1. charAt()
// - Returns character at given index of string.
//  The range of this index is between 0 and length – 1, including the limits.
//  If no index is specified then the first character of the string is returned as 0 is the default index used for this function.
//  If the index is out of range, then this function returns an empty string.
console.log(str.charAt()); // W
console.log(str.charAt(4)); // D
console.log(str.charAt(15)); // empty string

// 2. charCodeAt()
//-   returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//   The Unicode Standard is the universal character representation standard for text in computer processing.
//   If index is out of range, charCodeAt() returns NaN.
console.log(str.charCodeAt()); //87
console.log(str.charCodeAt(1)); //101
console.log(str.charCodeAt(15)); //NaN

// 3. concat()
// - is used to join two or more strings together
// This function returns a new string that is the combination of all the different strings passed to it as the argument.
const firstStr = "Hello";
const lastStr = "Developer";
console.log(firstStr.concat(" ", lastStr)); // Hello Developer

// 4. endsWith()
// -  is used to check whether the given string ends with the characters of the specified string or not.
// This function returns the Boolean value true if the searchString is found else it returns the Boolean value false
console.log(str.endsWith("!")); // true
console.log(str.endsWith(".")); // false

// 5. include()
// - is used to determine whether a given substring is present in the calling string or not.
console.log(str.includes("web")); // case-sensitive => false
console.log(str.includes("Web")); // true
console.log(str.includes("new")); // false

// 6. indexOf()
// -  finds the index of the first occurrence of the argument string in the given string.
// is case sensitive too.
console.log(str.indexOf("Developer")); //4

// 7. lastIndexOf()
// -  finds the index of the last occurrence of the argument string in the given string.
//  If the searchValue cannot be found in the string then the method returns -1.
const sentence = "to be or not to be";
// finding index of last "to"
console.log(sentence.lastIndexOf("to")); //13
console.log(sentence.lastIndexOf()); //-1

// 8. match()
// - used to search a string for a match against any regular expression.
// Syntax: string.match(regExp) => “regExp” (i.e. regular expression) which will compare with the given string.
//It will return an array that contains the matches one item for each match or if the match will not found then it will return Null.
const example = "Halli-hallo, what's new? ";
console.log(example.match(/ha/gi)); // [ 'Ha', 'ha', 'ha' ]
console.log(example.match(/do/gi)); // null
// Here “g” flag indicates that the regular expression should be tested against all possible matches in a string.
// And  “i” parameter helps to find the case-insensitive match in the given string.

// 9. matchAll()
// - returns an iterator of all results matching a string against a regular expression, including capturing groups.
// We need to provide a regular expression to find matches as a mandatory parameter of the method. This has to have a global flag “g”, otherwise we get a TypeError thrown.
// The result of the matchAll() method is an iterator of matches found.

// 10. repeat()
// - is used to build a new string containing a specified number of copies of the string on which this function has been called.
// Syntax: string.repeat(count); => count is an integer value which shows the number of times to repeat the given string.
// It returns a new string that contains the specified number of copies of the string.
const a = "Practice";
console.log(a.repeat(3)); // PracticePracticePractice

// 11. replace()
// - is used to replace a part of the given string with some another string or a regular expression.
// The original string will remain unchanged.
// Syntax: str.replace(A, B) =>  A is regular expression and B is a string which will replace the content of the given string.
const text = "JavaScript is a case-sensitive language.";
const newText = text.replace(/JavaScript/, "JS");
console.log(newText);

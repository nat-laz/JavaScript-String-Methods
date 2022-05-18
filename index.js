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

//need to come letter with an example

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


// 12. .replaceAll() method:
// The replaceAll method returns a new string after replacing all occurrences of matched pattern with a replacement string.
const str0 = "Carbon emission is increasing day by day.";
console.log(str.replaceAll("day", "year")); // select all match using string


// 13. .search() method:
// The search string method in javascript is used to determine whether a pattern exists within the calling string or not, if it exists then the method returns the index value of the first match within the string.
const str1 = "kjhBfdbAjdbj";
console.log(str1.search(/[A-Z]/g));
console.log(str1.search("d"));


// 14. .slice() method:
// The slice string method in javascript extracts a part of the string and returns it as a new string.
// The slice() takes 2 arguments, the first argument is the start index for the slicing string and the second argument is the end of the slicing string, where the second argument is optional.
// The default value of endIndex is str.length When the second argument is not passed then the string is sliced from 'startIndex' to the end of the string.
// The slice() method also accepts negative value, where -1 represents the last index.
const sentence0 = "Carbon emission is increasing day by day";
console.log(sentence.slice(5, 15));
console.log(sentence.slice(5));
console.log(sentence.slice(-15, -5));


// 15. .split() method:
// The split string method in javascript divides the given string intro substring and returns an array of substrings.
// The method takes an argument which is a pattern to be used for dividing the string.
const sentence1 = "Carbon emission is increasing day by day";
console.log(sentence1.split()); // no pattern -> return whole string in array
console.log(sentence1.split('')); // split at each space
console.log(sentence1.split(' ')); // split at each space
console.log(sentence1.split('is')); // split at each 'is'
console.log(sentence1.split("",[5])); // split with limit which is optional


// 16. .startsWitch() method:
// The startsWith string method in javascript determines whether a string starts with some given substring or not. If it starts with the desired string then it returns true else return false.
// The search string is passed as the first argument to the method. There is also an optional argument that defines the position from where the method should start checking.
const sentence2 = "Carbon emission is increasing day by day";
console.log(sentence2.startsWith("Car"));
console.log(sentence2.startsWith("carbon")); // return false case-sensitive!
console.log(sentence2.startsWith("bon", 3)); // + second argument(optional) which is telling the machine from which index to start the method.


// 17. .substr() method:
// ITS THE SAME LIKE .slice() method!
// The substr() string method in javascript is used to extract a substring from a string. It returns a part of the string, starting at a specific index and ending after a given number of characters.
const sentence3 = "Carbon emission is increasing day by day";
console.log(sentence3.substr(10, 6)); // start at index 10, cut 6 characters
console.log(sentence3.substr(10)); // start at index 10, cut all characters
console.log(sentence3.substr(-4, 3)); // negative index


// 18. .substring() method:
// The substring() method extracts a part of string between 2 given index values. It returns a part of the string, starting at a specific index and ending after a given number of characters.
// thats the only difference to slice and substr. method.
const sentence4 = "Carbon emission is increasing day by day";
console.log(sentence4.substring(10)); // start at index 10, cut all characters
console.log(sentence4.substring(10, 20)); // start at index 10, and end at index 20
console.log(sentence4.substring(20, 10)); // startIndex > endIndex. If the value of startIndex is greater than the value of endIndex then value of these two variables is swapped.


// 19. .toLowerCase() method:
// The toLowerCase() string method in javascript converts the case of a string to lowercase and returns it as a new string.
const sentence5 = "CARBON emission IS INCREASING DAY BY DAY";
console.log(sentence5.toLowerCase());


// 20. .toUpperCase() method:
// The toUpperCase string method in javascript returns a new string by converting the calling string to uppercase.
const sentence6 = "carbon emission is increasing day by day";
console.log(sentence6.toUpperCase());


// 21. .toString() method:
// The toString() string method in javascript returns a string representing the specified object.
// This method also convert numbers to strings in a different number system. For example you can convert a number to a string in binary system by using toString(2), octal system by using toString(8) and hexadecimal system by using toString(16), etc.
const str2 = new String("hello World!");
console.log(str2.toString(str2));
const num = 20;
console.log(num.toString(2));



// 22. .trim() method:
// The trim() string method in javascript removes whitespaces from both ends of the string. Whitespaces are space, tabs, newline, etc.
const str3 = "    TutorialsTonight    ";
console.log(str3.trim());


// 23. .valueOf() method:
// The valueOf() string method in javascript returns the primitive value of a String object.
const str4 = new String("hello world");
console.log(str4.valueOf(str4));






// const series1 = "bdWg2AdjgH4du5jUgT";
// // match all capital letters and numbers
// console.log(series1.match(/[A-Z0-9]/g));
// RegExp Object
// A regular expression is a pattern of characters.
// The pattern is used to do pattern-matching "search-and-replace" functions on text.
// In JavaScript, a RegExp Object is a pattern with Properties and Methods.
// Syntax:
// /pattern/modifier(s);
// Example:
// let pattern = /w3schools/i;
// Example explained:
// w3schools    The pattern to search for
// /w3schools/  A regular expression
// /w3schools/i A case-insensitive regular expression
// Case-insensitive: It means the text or typed input that is not sensitive to capitalization of letters, like “Geeks” and “GEEKS” must be treated as same in case-insensitive search. In Javascript, we use string. match() function to search a regexp in a string and match() function returns the matches, as an Array object.

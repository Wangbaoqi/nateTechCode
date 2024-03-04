
// 1. Grammar

// like C or C++ or Java Perl syntax

// 1.1 Case-sensitive

let test;
let Test;

// 1.2 Identifiers

// that the name of the Variable, function or property, function parameter

// make up that
// a. first Character is letter _ or $
// b. rest Character is letter _ or $ or number

// 1.3 Comments
// 1.4 Strict Mode
// 1.5 Sentence

// 2 Keyword
// break do in typeof case else instanceof var catch export new void class extends return while
// const finally super with continue for switch yield debugger function this default if throw delete import try

// 2.1 Reserved words
// enum implements package interface public protected static let private await


// 3. Variable
// var const let

// 3.1 Var declaration

var msg = '';
msg1 = 'var const';

// 3.2 let const declaration

let a = 'a';
const b = 'b';


// 4. Data Type

// undefined null boolean string number Symbol BigInt Object

// 4.1 typeof

typeof undefined;   // undefined
typeof null;        // object
typeof false;       // boolean
typeof 'string';    // string
typeof 20;          // number
typeof Symbol(1);   // Symbol
typeof {};          // object
typeof [];          // object


// 5. Operators

// 5.1 unary operator

let a1 = 4;
a1++;
a1--;
++a1;
--a1;

let a2 = 'q';
a2++; // NaN

let a3 = true;
a3++; // 1

let a4 = {};
a4++; // NaN


let a5 = 5;
+a5; // 5

let a6 = '02';
+a6; // Number('02') => valueof() or toString()


// 5.2 bit operator

// 5.3 bool operator

console.log(!NaN); // true
console.log(!!NaN); // false


// 5.4 multiplication operator

console.log( 1 * 2 ); // 2
console.log( 'a' * 2); // NaN
console.log( NaN * 2); // NaN



function CF(){
  this.a = 1;
  this.b = 2
}

const c1 = new CF();
const c2 = new CF();
const c3 = new CF();
const c4 = new CF();
const c5 = new CF();


var c = 1;

function vb() {
  var a1 = 3;
  console.log(a1 + c);
}

vb()


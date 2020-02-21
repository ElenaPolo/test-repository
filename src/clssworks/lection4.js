function foo() {
    this.value = 5;
    console.log(this === window);
    }
foo();

var myObject = new foo();
console.log(myObject.value === 5);

var myObject = {
    myself: function() {
    return this;
    }
    }
console.log(myObject.myself() === myObject);

var values = [5, 8];
values.push(7); values.push(3);
var lastElement = values.pop();
values.unshift(9); values.unshift(2);
var firstElement = values.shift();
console.log(values, firstElement, lastElement);

var values = [3, 9, 15, -5, 12];
console.log(values.find(element => element > 13)); 
console.log(values.findIndex(element => element > 13)); 

var values = [2, 9, 9];
console.log(values.includes(2));
console.log(values.includes(7));
console.log(values.indexOf(9));
console.log(values.indexOf(7));
console.log(values.lastIndexOf(9)); 
console.log(values.lastIndexOf(7));

var words = ['number', 'string', 'symbol', 'object', 'undefined'];
console.log(words.filter(word => word.length > 6));

var values = [1, 2, [3, 4, [5, 6]]];
console.log(values.flat()); 
console.log(values.flat(2)); 

var chars = ['a', 'b', 'c'];
chars.forEach(element => console.log(element));

var numbers = [1, 4, 9, 16];
console.log(numbers.map(x => x * 2));

var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));
console.log(numbers.reduce(reducer, 5));

var values = [1, 2, 3, 4, 5];
console.log(values.every(element => element % 2 === 0)); // false
console.log(values.every(element => element > 10)); // false
console.log(values.some(element => element % 2 === 0)); // true
console.log(values.some(element => element > 2)); // true

console.log(['a', 'b', 'c'].concat(['d', 'e', 'f'])); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(['a', 'b', 'c'].concat(5)); // ['a', 'b', 'c', 5]
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]

var arr = ['a','b','c'];
arr.splice(1, 1); // b 
console.log(arr) // [“a”, “c”];
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
console.log(months); // ["Jan", "Feb", "March", "April", "May"]

var values = [ 1, 2, 15 ];
console.log(values.sort());

var matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(matrix[1][1]);

var array = [];
array[10] = '';
console.log(array.length);

// functions
var Human = function(name, born, city) {
    this.name = name;
    this.born = born;
    this.city = city;
    }

Human.prototype.anyMethod = function() {
    console.log(this.name + ' do something...');
    }
    var man = new Human('Vasya');
    var woman = new Human('Kasya');
    console.log(man.name, ' ', woman.name); // Vasya Kasya
    man.anyMethod(); 
    woman.anyMethod();

    console.log(man.constructor); // function (name) {...}
    console.log(Human.prototype.constructor); // function (name) {...}
    console.log(man instanceof Human); // true
    console.log(Human.prototype.isPrototypeOf(man)); // true

    var Developer = function(name, skills) {
        Human.apply(this, arguments);
        this.skills = skills || [];
        };
        Developer.prototype = Object.create(Human.prototype);
        Developer.prototype.constructor = Developer;

        var developer = new Developer('Petya', ['“JavaScript”', '“Node.js”', '“Java”']);
        console.log(developer.name); // Petya
        console.log(developer.skills); // [“JavaScript”, “Node.js”, “Java”]
        developer.anyMethod(); // Petya do something...   
        
    console.log(developer instanceof Developer); // true
    console.log(developer instanceof Human); // true

    console.log(developer.toString()); // [object Object]
    Human.prototype.toString = function() { return this.name };

    Human.prototype.getAge = function() {
        console.log(new Date().getFullYear = this.born);
        }
        var user = new Human('“Name”', 1985, '“Boston”');
        user.getAge() // 35

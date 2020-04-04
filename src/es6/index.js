function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'BO';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age= 32, country = 'BO'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Aldo', 34, 'CO');

// 
let hello = "hello";
let world = "world";
let epicPharse = hello + ' ' + world;
console.log(epicPharse);

let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);

let lorem = "Quiero escribirt una fraser epica \n"
        + "otra frase epica q necesitamos";

// es6
let lorem2 = `otra frase epica q necsitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'BO'
};

console.log(person.name, person.age);

let {name,age} = person;

console.log(name, age);

let team1 = ['Oscar', 'ricardo', 'julian'];
let team2 = ['Oscar1', 'ricardo1', 'julian1'];

let education = ['DAvid', ...team1, ...team2];

console.log(education);


{
    var globalvar = 'global';
}

{
    let globalLet = 'Globallet';
    console.log(globalLet);
}

console.log(globalvar);

const a = 'b';

a = 'a';

console.log(a);

let name = 'aldo';
let age = 32;

obj = { name: name, age: age}

// es6
obj2 = {name , age};
console.log(obj2);

const names =[
    { name='aldo', age=31},
    { name='aldo2', age=35}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => console.log(name);

// const listOfNames4 = name => {
//     ...
// };

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else{
            reject('ups!!!');
        }
    })
}

helloPromise()
.then(response => console.log(response))
.then(()=> console.log('hola sip'))
.catch(error => console.log(error));

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(6,7));

import { hello } from './module';

hello();

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'world';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

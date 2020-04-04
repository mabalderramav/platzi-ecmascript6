const data = {
    fronted: 'aldo',
    backend: 'oscar',
    design: 'ana',
}

const entries = Object.entries(data);

console.log(entries);

console.log(entries.length);

const data = {
    fronted: 'aldo',
    backend: 'oscar',
    design: 'ana',
}

const values = Object.values(data);
console.log(values);

console.log(values.length);

const string1 = 'hello';
console.log(string1.padStart(7, 'hi'));
console.log(string1.padEnd(12, '------'));

console.log('food'.padEnd(12,'------'))

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('hello world'), 3000)
            : reject(new Error('Test error'))
    })
};

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();
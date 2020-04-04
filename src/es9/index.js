const obj = {
    name: 'aldo',
    age: 31,
    country: 'BO',
}

let { country, ...all} = obj;
console.log(country, all);
console.log(all);

const obj1 = {
    name: 'aldo',
    age: 31,
}

const obj2 = {
    ...obj1,
    country: 'BO'
}

console.log(obj2);

const helloWold = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('hello world'), 3000)
            : reject(new Error('test error'))
    });
};

helloWold()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

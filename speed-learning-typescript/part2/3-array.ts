let data:string[] = ['java','python','php'];
console.log(data[0]);

let obj:{[index:string]:string;} = {
    'hoge':'ほげ',
    'foo' : 'ふー',
}

interface StringMap {
    [index:string]:string;
}

let obj2:StringMap = {
    'hoge':'ほげ',
    'foo' : 'ふー',
}
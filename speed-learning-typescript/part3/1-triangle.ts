function triangle(base:number,height:number):number {
    return base * height / 2;
}
console.log(triangle(10,5)); // 結果

let trianglee2 = function(base:number,height:number):number {
    return base * height / 2;
}

let triangle3 = (base:number,height:number):number => {
    return base * height / 2;
}
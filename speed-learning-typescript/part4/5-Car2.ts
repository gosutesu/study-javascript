interface Car2 {
    (type : string) : string;
}

let c2 : Car2 = function(type : string) : string {
    return `$車種は、${type}です。`;
}
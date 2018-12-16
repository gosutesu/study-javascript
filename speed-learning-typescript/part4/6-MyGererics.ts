class MyGenerics<T> {
    value : T;

    getValue() : T {
        return this.value;
    }
}

let g = new MyGenerics<string>();

g.value = 'hoge';
console.log(g.getValue());
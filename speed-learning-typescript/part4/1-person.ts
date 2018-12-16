class Person {

    // プロパティ
    name:string;
    sex:string;

    //コンストラクター
    constructor(name,sex) {
        this.name = name;
        this.sex = sex;
    }

    //メソッド
    show():string {
        return `${this.name}は${this.sex}です。`;
    }
}

let p = new Person("理央","女");
console.log(p.show());
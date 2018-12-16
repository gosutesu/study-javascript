class Person2 {
    // name/sexプロパティ
    private name :string;
    private sex: string;

    // コンストラクター
    constructor(name:string,sex:string) {
        this.name = name;
        this.sex = sex;
    }

    public show():string {
        return `${this.name}は${this.sex}です。`; 
    }
}

let p2 = new Person2("理央","女");
console.log(p2.show());

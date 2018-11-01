/**
 * インスタンスについてのサンプルソース
 * this → コンストラクタによって生成されるインスタンス
 * this.プロパティ名 = 値
 */

var Member = function(fiarstname,lastname) {
    this.fiarstname = fiarstname;
    this.lastname = lastname;
    this.getName = () => {
        return this.fiarstname + " " +  this.lastname;
    }
};

var man = new Member("まりこ","高木");

console.log(man.getName());
/**
 * インスタンスに動的にメソッドを追加した例
 */
var Member = function(firstname , lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

var mem  = new Member("なま","はげ");
mem.getName = function() {
    return this.firstname + this.lastname;
}

console.log(mem.getName());


var mem2 = new Member("あし","くさい");

cosole.log(mem2.getName());
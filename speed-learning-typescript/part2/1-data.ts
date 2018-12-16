let data1 : string = 'hoge';
data1 = 'foo';
// data1 = 100; //エラー

let data2 = 100;
data2 = 150;
//data2 = 'hoge'; //エラー

let data3 : any = 100;
data3 = 150;
data3 = 'hoge'; //エラーにならない

let data4;
data4 = 150;
data4 = 'hoge';

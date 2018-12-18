//命令型プログラミング

var array = [0,1,2,3,4,5,6,7,8,9];

for(let i = 0; i < array.length ; i++) {
    array[i] = Math.pow(array[i],2);
}

console.log(array);

//関数型プログラミング
// ループ制御をmapに任せる
console.log(
    [0,1,2,3,4,5,6,7,8,9].map(
     function(num) {
            return Math.pow(num,2);
        }
    )
)
// ループのカウンタと配列のインデックスを適切に管理する責任がなくなった

// アロー関数を使用した場合
console.log(
    [0,1,2,3,4,5,6,7,8,9].map(
        (num) => { return Math.pow(num,2)}
    )
)

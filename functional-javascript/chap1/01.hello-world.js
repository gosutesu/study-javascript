// ハードコーディング
document.querySelector("#msg").innerHTML = "<h1>Hello World!</h1>"
// →　動的なメッセージには使えず、再利用できない

//パラメータ化して再利用できるようにしたもの
function printMessage(elemetId,format,message) {
    document.querySelector(`#${elemetId}`).innerHTML = `<${format}>${message}</${format}`
}
// → 再利用できるけど、完全ではない。
//   HTMLページではなくファイルに書き込み場合には使えない


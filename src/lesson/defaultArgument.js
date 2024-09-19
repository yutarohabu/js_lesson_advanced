// ここにコードを書きながら確認しましょう！
// 引数を一つ受け取るように定義
function argFn(arg = 'hello') {
  console.log(arg);
}

// 引数を渡していない
argFn();





// 練習問題
// 問題 1
function discountRateCalc(price, rate = 5) {
  return price * (1 - rate * 0.01);
}

console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000,20));
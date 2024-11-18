// ここにコードを書きながら確認しましょう！
// console.log('1番目の処理'); // 同期処理

// setTimeout(() => { // 非同期処理
//   console.log('2番目の処理');
// }, 0);

// console.log('3番目の処理'); // 同期処理

// console.log('1番目の処理');

// setTimeout(() => {
//   console.log('2番目の処理');
// }, 2000);

// setTimeout(() => {
//   console.log('3番目の処理');
// }, 1000);

//console.log('1番目の処理');

// ※setTimeoutは、第二引数に指定したミリ秒後に第一引数のコールバック関数を実行する

// setTimeout(() => {
//   console.log('2番目の処理');
//   setTimeout(() => {
//     console.log('3番目の処理');
//   }, 1000);
// }, 2000);

// const promise = new Promise((resolve, reject) => {
//   // 引数に処理の結果として文字列を渡している
//   reject('非同期が失敗しました');
// });

// // reject関数が実行されるとcatchメソッドが実行される
// // reject関数の引数に渡した「非同期が失敗しました」がコールバック関数の引数であるerrに入ってくる
// promise.catch(err => {
//   console.log(err);
// });


// console.log('1番目の処理');

// new Promise(resolve => {
//   setTimeout(() => {
//     console.log('2番目の処理');
//     resolve();
//   }, 2000);
// }).then(() => {
//   setTimeout(() => {
//     console.log('3番目の処理');
//   }, 1000);
// });

// const setTimeoutFn = time => new Promise(resolve => setTimeout(resolve, time));

// console.log('1番目の処理');

// setTimeoutFn(2000)
//   .then(() => console.log('2番目の処理'))
//   .then(() => setTimeoutFn(1000))
//   .then(() => console.log('3番目の処理'))
//   .then(() => setTimeoutFn(1000))
//   .then(() => console.log('4番目の処理'))
//   .then(() => setTimeoutFn(1000))
//   .then(() => console.log('5番目の処理'));








// 練習問題
// 問題 1

const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise().catch( err => console.log(err));

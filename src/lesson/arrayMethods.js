// ここにコードを書きながら確認しましょう！
// const warray = [1, 2, 3, 4, 5];

// warray.forEach(val => console.log(val));
/*
  ↓ consoleの表示
  1
  2
  3
  4
  5
*/

// const rarray = [1, 2, 3, 4, 5];

// rarray.forEach((val, index, array) => {
//   console.log(val, index, array);
// });
// /*
//   1 0 [ 1, 2, 3, 4, 5 ]
//   2 1 [ 1, 2, 3, 4, 5 ]
//   3 2 [ 1, 2, 3, 4, 5 ]
//   4 3 [ 1, 2, 3, 4, 5 ]
//   5 4 [ 1, 2, 3, 4, 5 ]
// */

// const array = [2, 4, 6, 8, 10];

// const newArray = array.map(val => val * 2);

// console.log(newArray);
// [4, 8, 12, 16, 20]








// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

const newArray = array.map(array => { return {...array, className : 'c-' + array.className}});

console.log(newArray);
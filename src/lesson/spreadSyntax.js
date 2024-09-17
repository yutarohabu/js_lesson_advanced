// ここにコードを書きながら確認しましょう！
const numbers = [1, 2, 3, 4, 5];

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(...numbers); // 1 2 3 4 5

const animal = ['cat', 'dog'];
const fruit = ['apple', 'orange'];

const mergeArray = [...animal, ...fruit];

console.log(mergeArray); // ['cat', 'dog', 'apple', 'orange']

// プロパティを定義しながらオブジェクトを作成
const company = {
  name: 'Gizumo',
  place: 'Shibuya',
};

// スプレッド構文でcompanyを展開し、展開したものをオブジェクトリテラル{}の中に入れている
const copy = { ...company };

console.log(copy); // { name: 'Gizumo', place: 'Shibuya' }







// 練習問題
// 問題 1
const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];

  return [...packageManager, ...framework];
}

console.log(arrayFn(packageManager));

// 問題 2
const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectB = {
  version: 3,
};

console.log({...objectA, ...objectB, routingLibrary: 'Vue Router'});
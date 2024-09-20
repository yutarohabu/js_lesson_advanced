// ここにコードを書きながら確認しましょう！
const array = ['one', 'two', 'three'];
const [ hoge, fuga, piyo ] = array;

console.log(hoge); // one
console.log(fuga); // two
console.log(piyo); // three

const gizumo = {
  name: 'Gizumo',
  established: '2015年5月15日',
  place: 'Shibuya',
};

// 分割代入
const { name, established, place } = gizumo;

console.log(name); // Gizumo
console.log(established); // 2015年5月15日
console.log(place); // Shibuya









// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [jQuery,Vue,arg] = arrayFn(10);

console.log(arg);

// 問題 2
// function objectFn(name) {
//   const {name: companyName} = argObject;
//   console.log(companyName);
// }

function objectFn({name: companyName}) {
  console.log(companyName);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);

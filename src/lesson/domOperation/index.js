import 'animate.css';

// ここにコードを書きながら確認しましょう！

// const title = document.getElementById('title');

// console.log(title); // <h1 id="title" class="title animate__animated">...</h1>

// const button = document.querySelector('.button');

// console.log(button); // <button id="button" type="button" class="button">animation</button>

// const list = document.querySelectorAll('.card-type--mocha .menu li');

// console.log(list); // NodeList(3) [li, li, li]

const title = document.getElementById('title');
const button = document.getElementById('button');

const cardTypeMocha = document.querySelector('.card-type--mocha');
const cardTypeYellow = document.querySelector('.card-type--yellow');

button.addEventListener('click', () => {
   // title要素に.animate__hingeクラスを付与
   title.classList.add('animate__hinge');
   // 2秒後にtitle要素から.animate__hingeクラスを削除
   setTimeout(() => {
     title.classList.remove('animate__hinge');

      cardTypeMocha.classList.add('card-animation');
      cardTypeYellow.style.display = 'block';
      cardTypeYellow.classList.add('animate__fadeInUp');

   }, 2000);

   cardTypeMocha.classList.remove('card-animation');
   cardTypeYellow.classList.remove('animate__fadeInUp');

});



// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑

// 必要な関数をモジュールからインポートする

import {$axios} from "./axiosHelper.js";
import {createErrorElement} from "./createElement.js";

window.addEventListener('DOMContentLoaded', () => {
  // ここに処理を書いていく

  const listElement = document.getElementById('list');
  const messageElement = document.getElementById('error-message');

   if (messageElement !== null) messageElement.remove();
   while (listElement.lastChild) {
     listElement.removeChild(listElement.lastChild);
   }

  $axios('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response =>{
    console.log(response);

    for(let i=0; i < response.data.results.length; i++){

      $axios(response.data.results[i].url).then(response =>{
        console.log(response);

        let imgPath = response.data.sprites.other['official-artwork'].front_default

        $axios(response.data.species.url).then(response => {

          let characterName = response.data.names[0].name;

          let imgElement = `<div class="character"><img src="${imgPath}" alt="" class="character__img"></div>`;
          let nameElement = `<p class="character__name">${characterName}</p>`;

          let poke = document.createElement('li');

          poke.className = 'list-item';

          poke.innerHTML = imgElement + nameElement;

          listElement.appendChild(poke);

          }).catch((error)=>{
            
              listElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
            
          });

      }).catch((error)=>{
        
          listElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
        
      });
    }
  }).catch((error)=>{
      switch (error.response && error.response.status) {
        case 404:
        listElement.after(createErrorElement(error.message));
        break;
        default:
        listElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。4'));
        break;
      }
  });


});
import {getFact} from "./getfact.js";
import {fact} from "./getfact.js";

function addToFavorites() {
    if(fact){  
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML += '<li>'+fact+'<i class="fa-solid fa-star starbtn"></i></li>';
    }
  
}


export { addToFavorites};

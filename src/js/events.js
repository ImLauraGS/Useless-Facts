import { showFav } from "./btn.js";
import { getFact } from "./getfact.js";
import { addToFavorites, addToFavoritesOnClick } from "./list.js";

// import { uncheckFavBtn } from "./star-btn.js";

const btnFav = document.getElementById('btn-fav');
const menuFav =  document.getElementById('header-fav-btn');

btnFav.addEventListener('click', showFav);
menuFav.addEventListener('click', showFav);

const getNewFact=document.getElementById("get-fact-btn")

getNewFact.addEventListener("click", getFact)

const addBtn=document.getElementById("add-btn")

addBtn.addEventListener("click", addToFavoritesOnClick)
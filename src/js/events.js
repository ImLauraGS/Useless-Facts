import { showFav } from "./btn.js";
import { getFact } from "./getfact.js";
import { addToFavorites } from "./list.js";

// import { uncheckFavBtn } from "./star-btn.js";

const btnFav = document.getElementById('btn-fav');
const menuFav =  document.getElementById('header-fav-btn');
const addBtn=document.getElementById("add-btn")
const getNewFact=document.getElementById("get-fact-btn")

btnFav.addEventListener('click', showFav);
menuFav.addEventListener('click', showFav);
getNewFact.addEventListener("click", getFact)
addBtn.addEventListener("click", addToFavorites)
import { showFav } from "./btn.js";
import { getFact } from "./getfact.js";

const btnFav = document.getElementById('btn-fav');
const menuFav =  document.getElementById('header-fav-btn');

btnFav.addEventListener('click', showFav);
menuFav.addEventListener('click', showFav);

const getNewFact=document.getElementById("get-fact-btn")

getNewFact.addEventListener("click", getFact)


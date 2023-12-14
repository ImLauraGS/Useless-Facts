import { showFav, showMenu} from "./btn.js";
import { getFact } from "./getfact.js";
// import { uncheckFavBtn } from "./star-btn.js";

const btnFav = document.getElementById('btn-fav');
const menuFav =  document.getElementById('header-fav-btn');
const btnMenu = document.getElementById("menu")
const mobileFav =  document.getElementById('mobile-fav-btn')


btnFav.addEventListener('click', showFav);
menuFav.addEventListener('click', showFav);

const getNewFact=document.getElementById("get-fact-btn")

getNewFact.addEventListener("click", getFact)


btnMenu.addEventListener('click', showMenu);
mobileFav.addEventListener('click', showFav);
import { showFav, showMenu} from "./btn.js";

const btnFav = document.getElementById('btn-fav');
const menuFav =  document.getElementById('header-fav-btn');
const btnMenu = document.getElementById("menu")
const mobileFav =  document.getElementById('mobile-fav-btn')


btnFav.addEventListener('click', showFav);
menuFav.addEventListener('click', showFav);
btnMenu.addEventListener('click', showMenu);
mobileFav.addEventListener('click', showFav);
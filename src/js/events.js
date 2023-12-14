import { showFav } from "./btn.js";

const btnFav = document.getElementById('btn-fav');
const menuFav =  document.getElementById('header-fav-btn');

btnFav.addEventListener('click', showFav);
menuFav.addEventListener('click', showFav);
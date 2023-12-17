import { showFav, showMenu} from "./btn.js";
import { getFact } from "./getfact.js";
import { addToFavorites } from "./list.js";
import { uncheckFavBtn } from "./star-btn.js";

const btnFav = document.getElementById('btn-fav');
const menuFav =  document.getElementById('header-fav-btn');
const addBtn=document.getElementById("add-btn")
const getNewFact=document.getElementById("get-fact-btn")
const btnMenu = document.getElementById("menu")
const mobileFav =  document.getElementById('mobile-fav-btn')


btnFav.addEventListener('click', showFav);
menuFav.addEventListener('click', showFav);
getNewFact.addEventListener("click", getFact)
addBtn.addEventListener("click", addToFavorites)
btnMenu.addEventListener('click', showMenu);
mobileFav.addEventListener('click', showFav);
// starGroup.addEventListener('click', uncheckFavBtn)

const starGroup = document.querySelectorAll(".starbtn");
// starGroup.addEventListener('click', uncheckFavBtn);
// starGroup.forEach( function(starIcon) {
//     starIcon.addEventListener('click',uncheckFavBtn);
    // console.log(starIcon);
// })

document.addEventListener('DOMContentLoaded', function() {g
    const starGroup = document.getElementsByClassName("starbtn");
    Array.from(starGroup).forEach(function(starIcon) {
        starIcon.addEventListener('click', uncheckFavBtn);
    });
});
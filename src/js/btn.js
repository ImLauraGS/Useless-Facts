
function showFav() {
    const randomFact = document.getElementById('random-fact-page');
    const favoritePage = document.getElementById('favorites-page');

    if (favoritePage.style.display !== 'none') {
        favoritePage.style.display = 'flex'; 
        randomFact.style.display = 'none'; 
    }
}

function showMenu(){
    const optionMenus = document.getElementsByClassName("menu-drop");
    for (const optionMenu of optionMenus) {
        if (optionMenu.style.display === 'none' || optionMenu.style.display === '') {
            optionMenu.style.display = 'flex';
        }
    }
}   

export {showMenu};
export {showFav};
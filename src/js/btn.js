
function showFav() {
    const randomFact = document.getElementById('random-fact-page');
    const favoritePage = document.getElementById('favorites-page');

    if (favoritePage.style.display !== 'none') {
        favoritePage.style.display = 'flex'; 
        randomFact.style.display = 'none'; 
    }
}

export {showFav};
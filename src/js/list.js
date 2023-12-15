import {getFact} from "./getfact.js";

/* function addToFavoritesOnClick() {
    getFact() .then((fact) => { 
    addToFavorites(fact);
    })
    .catch((error) => {
        console.error('Error al obtener el hecho:', error);
    });
}

function addToFavorites(fact) {
    const favoritesList = document.getElementById('favorites-list');
    const listItem = document.createElement('li');
    listItem.textContent=fact;
    favoritesList.appendChild(listItem);

}
export {addToFavorites, addToFavoritesOnClick};
 */

async function addToFavoritesOnClick() {
    try {
        const fact = await getFact();
        addToFavorites(fact);
    } catch (error) {
        console.error('Error al obtener el hecho:', error);
    }
}

function addToFavorites(fact) {
    const favoritesList = document.getElementById('favorites-list');
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    favoritesList.appendChild(listItem);
}

export { addToFavorites, addToFavoritesOnClick };

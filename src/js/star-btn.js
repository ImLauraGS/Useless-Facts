
const star = document.getElementsByTagName('');

function uncheckFavBtn() {
    // const star = document.getElementById('starfav-btn')

    if (star.style.color == 'var(--color_dark_blue)'){
        star.style.color = 'var(--color_beige)'
    } else {
        star.style.color = 'var(--color_dark_blue)'
    }
}

star.addEventListener('click', uncheckFavBtn);

export { uncheckFavBtn }
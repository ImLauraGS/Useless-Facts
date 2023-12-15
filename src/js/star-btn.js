
// const star = document.getElementsByClassName('fa-solid');

function uncheckFavBtn() {
    const starGroup = document.getElementsByClassName('fa-solid');
        for (const star of starGroup) {
            if (star.style.color == 'var(--color_dark_blue)'){
            star.style.color = 'var(--color_beige)'
            } else {
            star.style.color = 'var(--color_dark_blue)'
        }
    }console.log(starGroup);
}


export { uncheckFavBtn }


function uncheckFavBtn() {
    let stars = document.getElementsByClassName('starbtn');
    for (const star of stars) {
        if (this.style.fill === 'rgb(66, 60, 88)'){
                this.style.fill = 'rgb(242,231,201)'
                    } else {
                        this.style.fill = 'rgb(66, 60, 88)'
    }
}
}

export { uncheckFavBtn }
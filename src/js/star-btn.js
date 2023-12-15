
// const star = document.getElementsByClassName('fa-solid');

// function uncheckFavBtn() {
//     const starGroup = document.getElementsByClassName('fa-solid');
//         for (const star of stars) {
//             if (star.style.color == 'var(--color_dark_blue)'){
//             star.style.color = 'var(--color_beige)'
//             } else {
//             star.style.color = 'var(--color_dark_blue)'
//         }
//     }
// }



// export { uncheckFavBtn }

function uncheckFavBtn() {
    let stars = document.querySelectorAll('.starbtn');
    console.log(stars);
    for (const star of stars) {
        if (star.style.color === '#413C58'){
                star.style.color = '#F2E7C9'
                    } else {
                        star.style.color = '#413C58'
    }
}
}

export { uncheckFavBtn }
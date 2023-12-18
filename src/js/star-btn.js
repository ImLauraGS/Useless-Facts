
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

function uncheckFavBtn(element) {
    let stars = document.getElementsByClassName('starbtn');
    // console.log(stars);
    for (const star of stars) {
        console.log(star);
        if (star.style.fill === 'rbg(66, 60, 88)'){
                star.style.fill = 'rbg(242,231,201)'
                    } else {
                        star.style.fill = 'rbg(66, 60, 88)'
    }
}
// console.log(element);
}

export { uncheckFavBtn }
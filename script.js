let ham = document.getElementById('hamburger')
let side = document.querySelector('.sidebar')
let outter = document.querySelector('.outter')
let cross = document.querySelector('.cross')

ham.addEventListener('click', () => {
    // outter.style.display = 'block'
    side.style.display = 'block'
    cross.style.display = 'block'
    ham.style.display = 'none'
})
cross.addEventListener('click', () => {
    // outter.style.display = 'none'
    side.style.display = 'none'
    cross.style.display = 'none'
    ham.style.display = 'block'
})

// let h1 = document.querySelector('#heart1')
// let h2 = document.querySelector('#heart2')

// h1.addEventListener('click', () => {
//     h2.style.display = 'block'
//     h1.style.display = 'none'
// })
// h2.addEventListener('click', () => {
//     h1.style.display = 'block'
//     h2.style.display = 'none'
// })

//


window.addEventListener('resize', () => {
    if (screen.width > 600) {
        ham.style.display = 'none'
        cross.style.display = 'none'
        side.style.display = 'block'
        console.log("hello");
    }
    else {
        ham.style.display = 'block'
        cross.style.display = 'none'
        side.style.display = 'none'
        console.log("hiiii");
    }
})
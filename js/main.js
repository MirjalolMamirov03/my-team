
// Site header

const headerMenuIcon = document.querySelector('.header-menu__icon')
let list = document.querySelector('.list')
let siteHeaderHero = document.querySelector('.site-header-hero')




headerMenuIcon.addEventListener('click', function () {
    // alert ('salom')

    list.classList.toggle('list-d__none')

    if (headerMenuIcon.classList.contains('fa-bars')) {
        headerMenuIcon.classList.replace('fa-bars', 'fa-times')
        siteHeaderHero.style.background = '#01343a'
    } else if (headerMenuIcon.classList.contains('fa-times')) {
        siteHeaderHero.style.background = '#014E56'
        headerMenuIcon.classList.replace('fa-times', 'fa-bars')
    }
})

// Site header



// ABOUTE PAGES

// Directors section

const cardBtn = [...document.querySelectorAll('.card-btn')]
let cardBg = [...document.querySelectorAll('.card-bg')]


cardBtn.forEach(btn => {
    console.log(btn);
    btn.addEventListener('click', function () {
        cardBg.forEach(bg => {
            if (btn.background == "#F67E7E" && bg.style.display == "none" && btn.innerHTML == "+") {
                btn.background = "#79C8C7"
                bg.style.display = "flex"
                btn.innerHTML = "✕"
            } else {
                btn.background = "#F67E7E"
                bg.style.display = "none"
                btn.innerHTML = "+"
            }
    
        });
    })
});



// Directors section

// ABOUTE PAGES
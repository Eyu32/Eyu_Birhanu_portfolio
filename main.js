const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const mainNav = document.querySelector('#main-nav');
const coverCard = document.querySelector('#cover-card');

let isActive = false;

// Menu open handler
menu.addEventListener('click', function () {
    if (!isActive) {
        mainNav.classList.remove('deActive');
        coverCard.classList.remove('deActive');
        menu.classList.add('deActive')
        isActive = true;
    }
});

// Menu close handler
close.addEventListener('click', function () {
    if (isActive) {
        mainNav.classList.add('deActive');
        coverCard.classList.add('deActive');
        menu.classList.remove('deActive')
        isActive = false;
    }
});

coverCard.addEventListener('click', function (e) {
    const eventTarget = e.target;
    if (isActive && eventTarget.id !== 'main-nav' && eventTarget.id !== 'menu') {
        mainNav.classList.add('deActive');
        coverCard.classList.add('deActive');
        menu.classList.remove('deActive')
        isActive = false;
    }
});

const see_ = document.querySelector('#see_');
const seeText = document.querySelector('#see-text');
const seeText2 = document.querySelector('#see-text2');
const text = document.querySelector('#text');

let isSeen = false;

see_.addEventListener('click', function () {
    if (!isSeen) {
        seeText.classList.remove('hidden');
        seeText2.classList.remove('hidden');

        see_.textContent = 'see less';
        isSeen = true;
    } else {
        seeText.classList.add('hidden');
        seeText2.classList.add('hidden');

        see_.textContent = 'see more';
        isSeen = false;
    }
});

document.querySelectorAll('.parent-show').forEach(parent => {
    // Find related elements within the same section
    const btn = parent.querySelector('.show-detail');
    const detail = parent.parentElement.querySelector('.detail');
    
    // Handle parent click
    parent.addEventListener('click', (e) => {
        // Prevent double-toggle if clicking the button
        if (e.target.closest('.show-detail')) return;
        
        detail.classList.toggle('hidden');
        btn.classList.toggle('rotate-180');
    });

    // Handle button click
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent parent click from triggering
        detail.classList.toggle('hidden');
        btn.classList.toggle('rotate-180');
    });
});
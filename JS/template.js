let message = {};

async function loadMessage() {
    const resp = await fetch("../Asset/Message/message.json");
    message = await resp.json();
}

function stickyHeader() {
    const header = document.querySelector('.header-body');
    window.addEventListener('scroll', function () {
        if (window.scrollY > header.offsetTop) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.height = 'fit-content';
        } else {
            header.style.position = 'static';
            header.style.top = 'auto';
        }
    });
}

function getYear() {
    return new Date().getFullYear().toString();
}

function getMessage(key) {
    return message[key] || key;
}

function setMessage() {
    for (const key in message) {
        let el = document.getElementById(key);
        if (el) { el.innerHTML = getMessage(key); }
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadMessage();

    await fetch('../HTML/header.html').then(r => r.text()).then(h => {
        document.getElementById('header-part').innerHTML = h;
        stickyHeader();
    });

    await fetch('../HTML/footer.html').then(r => r.text()).then(f => {
        document.getElementById('footer-part').innerHTML = f;
        document.getElementById('current-year').innerHTML = getYear();
    });

    setMessage();
});
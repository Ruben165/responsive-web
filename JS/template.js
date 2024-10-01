function stickyHeader() {
    const header = document.querySelector('.header-body');
    window.addEventListener('scroll', function () {
        if(window.scrollY>header.offsetTop) {
            header.style.position='fixed';
            header.style.top='0';
            header.style.height='fit-content';
        } else {
            header.style.position='static';
            header.style.top='auto';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('../HTML/header.html').then(response=>response.text()).then(header=>{
        document.getElementById('header-part').innerHTML=header;
        stickyHeader();
    });
    fetch('../HTML/footer.html').then(response=>response.text()).then(footer=>{
        document.getElementById('footer-part').innerHTML=footer;
    });
});
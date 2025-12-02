document.addEventListener('DOMContentLoaded', () => {

    console.log(atob("S2VyamEgTGVtYnVyIEJhZ2Fpa2FuIEt1ZGE="));

    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    let i = 0;
    const pcvw = window.matchMedia('(min-width:377px)');
    const slide = () =>{
                setTimeout(slide, 10000);
                const img = document.querySelectorAll('.p-screenshow__home');
                for(e =0; e < img.length; e++ ){
                    img[e].style.display = "none";
                 }
                 i++;
                 if(i > img.length){i = 1}
                 img[i -1].style.display = "block";
                 img[i -1].animate([{opacity: '0'},{opacity:'1' }], 1000);
             }  
     const ipslide =()=> {
                 setTimeout(ipslide, 10000);
                 const img = document.querySelectorAll('.p-screenshow__iphone--home');
                 for(e =0; e < img.length; e++ ){
                     img[e].style.display = "none";
                 }
                 i++;
                 if(i > img.length){i = 1}
                 img[i -1].style.display = "block";
                 img[i -1].animate([{opacity: '0'},{opacity:'1' }], 1000);
             }
 const slideshow =(pcvw)=>{
    if(pcvw.matches){
        slide();
    } else {
        ipslide();
    }
 }
    slideshow(pcvw);
    pcvw.addListener(slideshow);

    const open = document.getElementById('open');
    const overlay = document.querySelector('.l-overlay');
    const nav = document.querySelector('.l-nav');
  
    open.addEventListener('click',  () => {
        overlay.classList.toggle('show');
        open.classList.add('hide');
        nav.classList.toggle('hide');

        const items = document.querySelectorAll('.l-overlay__lists');
        items.forEach((overlayul) => {
            const overlayli = overlayul.querySelectorAll('.list');
            overlayli.forEach((overlayul, index) => {
            const order = index + 1;
            const delay = order * 400;
            setTimeout(() => {
                overlayul.classList.add('show');
            }, delay);
            });
        });
        });
    overlay.addEventListener('click', () =>{
        overlay.classList.remove('show');
        nav.classList.remove('hide');
    });

}, false);



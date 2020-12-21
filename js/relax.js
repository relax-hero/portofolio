document.addEventListener('DOMContentLoaded', function () {
    let i = 0;
    const pcvw = window.matchMedia('(min-width:377px)');
    const slide = () =>{
                setTimeout(slide, 5000);
                const img = document.querySelectorAll('.p-screenshow__home');
                for(e =0; e < img.length; e++ ){
                    img[e].style.display = "none";
                 }
                 i++;
                 if(i > img.length){i = 1}
                 img[i -1].style.display = "block";
                 img[i -1].animate([{opacity: '0'},{opacity:'1' }], 1000);
                }
            //     const title = document.querySelectorAll('.p-link');
            //     for(e =0; title < title.length; e++ ){
            //         title[e].style.display = "none";
            //      }
            //      i++;
            //      if(i > title.length){i = 1}
            //      title[i -1].style.display = "block";
            //      title[i -1].animate([{opacity: '0'},{opacity:'1' }], 1000);
            //  }  
    //  const ipslide =()=> {
    //              setTimeout(ipslide, 5000);
    //              const img = document.querySelectorAll('.p-screenshow__iphone--home');
    //              for(e =0; e < img.length; e++ ){
    //                  img[e].style.display = "none";
    //              }
    //              i++;
    //              if(i > img.length){i = 1}
    //              img[i -1].style.display = "block";
    //              img[i -1].animate([{opacity: '0'},{opacity:'1' }], 1000);
    //          }
//  const slideshow =(pcvw)=>{
//     if(pcvw.matches){
//         slide();
//     } else {
//         ipslide();
//     }
//  }
    slide(pcvw);
    pcvw.addListener(slide);

    const open = document.getElementById('open');
    const open2 = document.getElementById('open2');
    const overlay = document.querySelector('.l-overlay');
    const nav = document.querySelector('.l-nav');
    const overlaylist = document.querySelector('.p-overlay__lists--list');
  
    open.addEventListener('click',  () => {
        overlay.classList.toggle('show');
        open.classList.add('hide');
        nav.classList.toggle('hide');
      });
    open2.addEventListener('click',  () => {
        overlay.classList.toggle('show');
        open.classList.add('hide');
        nav.classList.toggle('hide');
    });
    overlay.addEventListener('click', () =>{
        overlay.classList.remove('show');
        nav.classList.remove('hide');
    });
    overlaylist.addEventListener('click', () =>{
        overlay.classList.remove('show');
        nav.classList.remove('hide');
    });


    $(function() {
        var menu = $('#mainnav'),
        offset = menu.offset();
        $(window).scroll(function () {
          if($(window).scrollTop() > offset.top) {
            menu.addClass('fixed');
          } else {
            menu.removeClass('fixed');
          }
        });
      });

    const video = document.getElementById('video');
    const web = document.getElementById('web');
    const translation = document.getElementById('translation');
    const serviceoverlay = document.querySelector('.l-svoverlay');
    const videoinner = document.querySelector('.l-svoverlay__video');
    const webinner = document.querySelector('.l-svoverlay__web');
    const translationinner = document.querySelector('.l-svoverlay__translation');
    video.addEventListener('click', () =>{
        serviceoverlay.classList.toggle('showbottom');
        videoinner.classList.toggle('showinner');
    });
    web.addEventListener('click', () =>{
        serviceoverlay.classList.toggle('showbottom');
        webinner.classList.toggle('showinner');
    });
    translation.addEventListener('click', () =>{
        serviceoverlay.classList.toggle('showbottom');
        translationinner.classList.toggle('showinner');
    });
    serviceoverlay.addEventListener('click', () =>{
        serviceoverlay.classList.remove('showbottom');
        videoinner.classList.remove('showinner');
        webinner.classList.remove('showinner');
        translationinner.classList.remove('showinner');
    });
    $(function () {
        $('a[href^="#"]').click(function () {
            var time = 800;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html,body").animate({ scrollTop: position }, time, "swing");
            return false;
        });
    });

}, false);



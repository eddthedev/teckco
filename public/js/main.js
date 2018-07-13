var nav = document.getElementById('nav')
var pim = document.querySelector('.pimg2')
var current = document.querySelector('#current')
var imgs = document.querySelectorAll('.imgs')

window.onscroll = function() {
  if (window.pageYOffset > 700) {
    nav.style.background = "black";
    nav.style.boxShadow = "0px 4px 2px black";
  }else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }

};

// IMG GALLERY
var current = document.querySelector('#current');
var imgs = document.querySelectorAll('.imgs img');
var opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(function (img) {
  return img.addEventListener('click', imgClick);
});

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(function (img) {
    return img.style.opacity = 1;
  });
  // change current img to src of clicked img
  current.src = e.target.src;

  // Add fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(function () {
    return current.classList.remove('fade-in');
  }, 500);

  //change the opacity to opacity var
  e.target.style.opacity = opacity;
}

$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
























// --------------------------------------------------





// $(function() {
//       // Smooth Scrolling
//       $('a[href*="#"]:not([href="#"])').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//           var target = $(this.hash);
//           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//           if (target.length) {
//             $('html, body').animate({
//               scrollTop: target.offset().top
//             }, 1000);
//             return false;
//           }
//         }
//       });
//     });


function openNav() {
  document.getElementById("sidebar").style.width = "350px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0%";
}

$('.search-link').on('click', function(){
    $('.search-form').fadeToggle();
})

var btn = $('#backToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  $('html, body').animate({scrollTop:0}, '300');
});


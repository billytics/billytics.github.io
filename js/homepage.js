$(document).ready(function(){/* activate scrollspy menu */
$('.active form').card({
  container: $('.card-wrapper')
})

$(".openpanel").on("click", function() {
    $("#panel1").collapse('show');
});
$(".openpanel2").on("click", function() {
    $("#panel2").collapse('show');
});
$(".openpanel3").on("click", function() {
    $("#panel3").collapse('show');
});


/* ensure any open panels are closed before showing selected */
$('#accordion').on('show.bs.collapse', function () {
    $('#accordion .in').collapse('hide');
});
/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

});
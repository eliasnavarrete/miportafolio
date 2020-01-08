$(function() {

  $("nav a").click(function(evento) {
    if (this.hash !== ""); {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

  $('[data-toggle="popover"]').popover()

});

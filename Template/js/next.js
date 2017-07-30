$("#tosolutions").click(function() {
  console.log(document.documentElement.clientHeight);
  $("html,body").animate({
    scrollTop: $("#solutions").offset().top
  }, 300);
});

$("#tointroduce").click(function() {
  $("html,body").animate({
    scrollTop: $("#introduce").offset().top
  }, 300);
});
$("#toopenday").click(function() {
  $("html,body").animate({
    scrollTop: $("#openday").offset().top
  }, 300);
});
$("#topricing").click(function() {
  $("html,body").animate({
    scrollTop: $("#pricing").offset().top
  }, 300);
});

$("#tofvideos").click(function() {
  $("html,body").animate({
    scrollTop: $("#fvideos").offset().top
  }, 300);
});
$("#tovideos").click(function() {
  $("html,body").animate({
    scrollTop: $("#videos").offset().top
  }, 300);
});
$("#tomap").click(function() {
  $("html,body").animate({
    scrollTop: $(".map").offset().top
  }, 300);
});

$("#tocontact").click(function() {
  $("html,body").animate({
    scrollTop: $("#contact").offset().top
  }, 300);
});

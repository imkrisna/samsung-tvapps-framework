$(function() {
  $('.accordion-button').click(function() {
    $(this).find('.accordion-content').slideToggle();
  });
});

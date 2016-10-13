$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
  $(this).find('i:last').toggleClass('fa-square-o fa-check-square-o');
});

$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut('400', function() {
    $(this).remove();
  });
  event.stopPropagation();
})

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    var newTodo = $(this).val();
    $(this).val('');
    $('ul').append('<li><span><i class="fa fa-trash"></i></span><i class="fa fa-square-o"></i>' + newTodo + '</li>');
  }
});

$('.fa-angle-up').click(function() {
  $('input[type="text"]').slideToggle('fast');
  $('.fa-angle-up').toggleClass('fa-rotate-180');
});
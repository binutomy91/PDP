$(function() {

  var list = [];

  function writeData() {
    localStorage.setItem('ToDos', JSON.stringify(list));
  }

  var updatedlist = JSON.parse(localStorage.getItem('ToDos'));

  for (var key in updatedlist){ //reading from the list
    var todos = updatedlist[key];

    $('ul').append('<li><span class=delete>X</span>' + todos["title"] + '</li>');
    $("ul").children().first().addClass('active');
    list.push(todos);

  }

  $('input[type="text"]').keypress(function(event) {
    if (event.which == 13) {
      var newTodo = $(this).val();
      list.push({title:newTodo}) //push to list

      writeData();
      $(this).val('');
      $('ul').append('<li><span class=delete>X</span>' + newTodo + '</li>');
      $("ul").children().first().addClass('active');
    }
  });

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
    $(this).find('i:last').toggleClass('fa-square-o fa-check-square-o');
  });

  $('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut('400', function() {
      $(event.target).parent();
      $(this).remove();
      console.log(this.options[event.target.selectedIndex].text);
    });
    event.stopPropagation();
  })


  $('.fa-angle-up').click(function() {
    $('input[type="text"]').slideToggle('fast');
    $('.fa-angle-up').toggleClass('fa-rotate-180');
  });

  $('body').keyup(function(e) {
    if(e.keyCode === 40) {
      if($('ul').children('.active')) {
        $('.active').removeClass('active')
        .next().addClass('active');
      }
      else {
        $('.active').removeClass('active');
        var d = $('div');
        d.length = 1;
        d.addClass('active');
      }
    }
    if(e.keyCode === 38) {
      if($('ul').children('.active')) {
        $('.active').removeClass('active')
        .prev().addClass('active');
      }
      else {
        $('.active').removeClass('active');
        var d = $('div');
        d = $(d[d.length - 1]);
        d.addClass('active');
      }
    } 
  });

    

      








  });



















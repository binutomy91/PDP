$(function() {

  function writeData(list) {
    localStorage.setItem('ToDos', JSON.stringify(list));
  }

  function readData(){
    var itemList = localStorage.getItem('ToDos');
    return JSON.parse(itemList);
  }

  function removeItem(item){

    var currentList = JSON.parse(localStorage.getItem('ToDos'));

    for (var key in currentList) {
      var current = currentList[key];
      if(current.title == item.innerHTML){
        currentList.splice(key, 1);
        writeData(currentList);
      }
    };
  }

  function activeItem(){
    var todos = readData();
    for(var key in todos){
      return todos[key];
    }
  }

  var list = [];
  var updatedlist = readData();


  for (var key in updatedlist){ //reading from the list
    var todos = updatedlist[key];

    $('ul').append('<li>' + todos["title"] + '</li>');
    $("ul").children().first().addClass('active');
    list.push(todos);
  }


  $('input[type="text"]').keypress(function(event) {
    if (event.which == 13) {
      var newTodo = $(this).val();
      list.push({title:newTodo}) //push to list

      writeData(list);
      $(this).val('');
      $('ul').append('<li>' + newTodo + '</li>');
      $("ul").children().first().addClass('active');
    }
  });

  $('ul').on('click', 'li', function() {
    removeItem(this);
    $(this).toggleClass('completed');
    $(this).find('i:last').toggleClass('fa-square-o fa-check-square-o');
  });

  $('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut('400', function() {
      $(event.target).parent();
      var activeItem = activeItem();
      
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


    if(e.keyCode == 8){

    } 
  });


  });

  















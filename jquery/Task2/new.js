var TodoList = {

}



function readData(){
  var itemList = localStorage.getItem('ToDos');
  return JSON.parse(itemList);
}

function writeData(list) {
  localStorage.setItem('ToDos', JSON.stringify(list));
}

function onEnter(event){
  var list = [];
  if (event.which == 13) {
    var newTodo = $(this).val();
    list.push({title:newTodo}) //push to list

    writeData(list);
    $(this).val('');
    $('ul').append('<li>' + newTodo + '</li>');
    $("ul").children().first().addClass('active');
  }
}





$(function() {

  //checking if there is existing Todos in localStorage
  var updatedlist = readData();


  //add new todos on keypress
  $('input[type="text"]').keypress(onEnter);






});

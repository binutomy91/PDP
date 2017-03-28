(function (){

  function showNavigation(e) {
    e.preventDefault
    let navBlock = document.querySelector(".nav-list");
    navBlock.classList.toggle('active');
  }
	let navBtn = document.getElementById('nav-button');
	navBtn.addEventListener("click", showNavigation);

})();

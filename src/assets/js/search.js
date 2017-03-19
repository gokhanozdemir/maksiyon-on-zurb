document.addEventListener("DOMContentLoaded", function(event) { 
  // console.log('ready');
  const si =  document.getElementById("search_input");
  si.addEventListener("click", function() {
    this.value = "Music";
  });
  
});
window.onload=function(){

var b1 = document.querySelector("#p1");
var b2 = document.getElementById("p1");
// b2.addEventListner("click", function(){
//     alert("clicked");
// });
for (var i = 0; i < b2.length; i++) {
  b2[i].addEventListener('click', function(){
      alert("clicked");
  });
}
}

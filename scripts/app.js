var app = new Vue({
  el: "#app",
});

var imgContextMenu = document.querySelectorAll("img");
imgContextMenu.forEach(function (img) {
  if (img) {
    img.setAttribute("draggable", "false");
    img.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
});

;(function() {
  var element = document.querySelector('.wxchatview__chat-group');
  element.scrollTop = element.scrollHeight;
})();



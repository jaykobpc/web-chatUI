//DOM caching
"use strict";
//side navigation toggles
var search_contact = document.getElementById("search_contact");
var show_notifications = document.getElementById("show_notifications");
var show_settings = document.getElementById("show_settings");
var show_exitview = document.getElementById("show_exitview");

//modals
var contact_view = document.getElementById("contactview");
var contact_view_close = document.getElementById("contactview_close");
var notification_view = document.getElementById("notificationview");
var notification_view_close = document.getElementById("notificationview_close");
var exit_view = document.getElementById("exitview");
var exit_view_close = document.getElementById("exitview-close");

//others
var imgContextMenu = document.querySelectorAll("img");

//events
if (search_contact) {
  search_contact.addEventListener("click", (e) => {
    e.preventDefault();
    if (contact_view) {
      contact_view.classList.add("contactsearch_open");
    }
  });
}

if (contact_view_close) {
  contact_view_close.addEventListener("click", (e) => {
    e.preventDefault();
    if (contact_view) {
      contact_view.classList.remove("contactsearch_open");
    }
  });
}

if (show_notifications) {
  show_notifications.addEventListener("click", (e) => {
    e.preventDefault();
    if (notification_view) {
      notification_view.classList.add("notificationview_open");
    }
  });
}

if (notification_view_close) {
  notification_view_close.addEventListener("click", (e) => {
    e.preventDefault();
    if (notification_view) {
      notification_view.classList.remove("notificationview_open");
    }
  });
}

if (show_exitview) {
  show_exitview.addEventListener("click", (e) => {
    e.preventDefault();
    if (exit_view) {
      exit_view.classList.add("exitview_open");
    }
  });
}

if (exit_view) {
  if (exit_view_close) {
    exit_view_close.addEventListener("click", (e) => {
      e.preventDefault();
      exit_view.classList.remove("exitview_open");
    });
  }
}

//disable image contextMenu
imgContextMenu.forEach(function (img) {
  if (img) {
    img.setAttribute("draggable", "false");
    img.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
});

//scroll chat view to bottom;
(function () {
  var element = document.querySelector(".wxchatview__chat-group");
  element.scrollTop = element.scrollHeight;
})();

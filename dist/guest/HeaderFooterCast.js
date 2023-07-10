function insertHeaderFooterCast() {
    var homeIcon = document.getElementById("homeIcon");
    if (homeIcon) {
      homeIcon.addEventListener("click", function (e) {
        window.location.href = "./HomeCast.html";
      });
    }

    var accountCircle = document.getElementById("accountCircle");
    if (accountCircle) {
      accountCircle.addEventListener("click", function (e) {
        window.location.href = "./MyPageCast.html";
      });
    }

    var favoriteIcon = document.getElementById("favoriteIcon");
    if (favoriteIcon) {
      favoriteIcon.addEventListener("click", function (e) {
        window.location.href = "./MyGuest.html";
      });
    }
    var entameDay = document.getElementById("entameDay");
    if (entameDay) {
      entameDay.addEventListener("click", function (e) {
        window.location.href = "./EntameDayCast.html";
      });
    }
    var entameList = document.getElementById("entameList");
    if (entameList) {
      entameList.addEventListener("click", function (e) {
        window.location.href = "./EntameListCast.html";
      });
    }
    var chatList = document.getElementById("chatList");
    if (chatList) {
      chatList.addEventListener("click", function (e) {
    window.location.href = "./ChatListCast.html";
      });
    }
    var notiList = document.getElementById("notiList");
    if (notiList) {
      notiList.addEventListener("click", function (e) {
        window.location.href = "./NotiCast.html";
      });
    }
}

  insertHeaderFooterCast();

function insertHeaderFooterGuest() {
  var homeIcon = document.getElementById("homeIcon");
  if (homeIcon) {
    homeIcon.addEventListener("click", function (e) {
      window.location.href = "./Component2121.html";
    });
  }
  var accountCircle = document.getElementById("accountCircle");
  if (accountCircle) {
    accountCircle.addEventListener("click", function (e) {
      window.location.href = "./MyPage.html";
    });
  }
  var searchIcon = document.getElementById("searchIcon");
  if (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      window.location.href = "./Search.html";
    });
  }
  var favoriteIcon = document.getElementById("favoriteIcon");
  if (favoriteIcon) {
    favoriteIcon.addEventListener("click", function (e) {
      window.location.href = "./Favorite.html";
    });
  }
  var rankingIcon = document.getElementById("rankingIcon");
  if (rankingIcon) {
    rankingIcon.addEventListener("click", function (e) {
      window.location.href = "./Ranking.html";
    });
  }
  var entameDay = document.getElementById("entameDay");
  if (entameDay) {
    entameDay.addEventListener("click", function (e) {
      window.location.href = "./EntameDay.html";
    });
  }
  var entameList = document.getElementById("entameList");
  if (entameList) {
    entameList.addEventListener("click", function (e) {
      window.location.href = "./EntameList.html";
    });
  }
  var chatList = document.getElementById("chatList");
  if (chatList) {
    chatList.addEventListener("click", function (e) {
      window.location.href = "./ChatList.html";
    });
  }
  var notiList = document.getElementById("notiList");
  if (notiList) {
    notiList.addEventListener("click", function (e) {
      window.location.href = "./Noti.html";
    });
  }
}

insertHeaderFooterGuest();

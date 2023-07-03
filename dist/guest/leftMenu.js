const block = `<div style="display: none;" id="humbeger" class="left-menu-container" >
<div class="left-menu-icon" id="iconLeftMenu">
  <img class="icon-line-2" alt="" src="./public/menu-svgrepo-com.svg" />
</div>
<div class="left-menu-list" id="leftMenuList">
  <div class="left-menu-list-header_guest" id="leftMenuHeaderGuestList">Guest</div>
  <div class="left-menu-list_guest" id="leftMenuGuestList"></div>
  <div class="left-menu-list-header_guest" id="leftMenuHeaderCastList">Cast</div>
  <div class="left-menu-list_cast" id="leftMenuCastList"></div>
</div>
</div>`;

function insertHumbeger() {
  var div = document.createElement("div");
  div.innerHTML = block.trim();
  document.querySelector("body").prepend(div);

  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./LeftMenu.css";
  head.appendChild(link);

  var leftMenuData = [
    {
      label: "トップ",
      link: "./index.html",
    },
    {
      label: "電話番号での登録",
      link: "./Component321.html",
    },
    {
      label: "電話番号入力エラー",
      link: "./InputTelNumberError.html",
    },
    {
      label: "認証コード",
      link: "./Component41.html",
    },
    {
      label: "認証コードエラー①",
      link: "./VerifyCodeError1.html",
    },
    {
      label: "認証コードエラー②",
      link: "./VerifyCodeError2.html",
    },
    {
      label: "アカウント種類選択①",
      link: "./Component312.html",
    },
    {
      label: "アカウント種類選択②",
      link: "./Component211.html",
    },
    {
      label: "アカウント登録",
      link: "./Component611.html",
    },
    {
      label: "アカウント登録エラー",
      link: "./RegisterAccountError.html",
    },
    {
      label: "クレジットカード登録",
      link: "./Component91.html",
    },
    {
      label: "アカウント登録完了ポップアップ",
      link: "./Component121.html",
    },
    {
      label: "公開プロフィール作成①",
      link: "./Component3111.html",
    },
    {
      label: "公開プロフィール作成②",
      link: "./Component22111.html",
    },
    {
      label: "縁ため始めるポップアップ",
      link: "./Component23.html",
    },
    {
      label: "縁ための使い方",
      link: "./EntameHowToUse.html",
    },
    {
      label: "LINEでのログイン",
      link: "./LINE.html",
    },
    {
      label: "アカウント種類選択①",
      link: "./Component22.html",
    },
    {
      label: "アカウント種類選択②",
      link: "./Component11.html",
    },
    {
      label: "ホーム",
      link: "./Component2121.html",
    },
    {
      label: "トップ",
      link: "./TopCoverLoginPhoneNumber.html",
    },
    {
      label: "電話番号でのログイン",
      link: "./LoginByPhone.html",
    },
    {
      label: "マイページ",
      link: "./MyPage.html",
    },
    {
      label: "ログアウト確認ポップアップ",
      link: "./PopupLogOut.html",
    },

    {
      label: "検索",
      link: "./Search.html",
    },
    {
      label: "お気に入り",
      link: "./Favorite.html",
    },
    {
      label: "ランキング",
      link: "./Ranking.html",
    },
    {
      label: "縁ため日",
      link: "./EntameDay.html",
    },
    {
      label: "縁ためリスト",
      link: "./EntameList.html",
    },
    {
      label: "メッセージ一覧",
      link: "./ChatList.html",
    },
    {
      label: "通知",
      link: "./Noti.html",
    },
    {
      label: "クーポン/無償ポイント",
      link: "./CouponFreePoint.html",
    },
    {
      label: "キャストプロフィール",
      link: "./CastProfile.html",
    },
    {
      label: "CreateRequest",
      link: "./CreateNewRequest.html",
    },




    {
      label: "HoldingPoint",
      link: "./HoldingPoint.html",
    },
    {
      label: "InputPoint1",
      link: "./InputPoint1.html",
    },
    {
      label: "InputPoint2",
      link: "./InputPoint2.html",
    },
    {
      label: "ConfirmPoint",
      link: "./ConfirmPoint.html",
    },
    {
      label: "InputCard",
      link: "./InputCard.html",
    },
    {
      label: "ConfirmPayPoint",
      link: "./ConfirmPayPoint.html",
    },
    {
      label: "CurrentPoint",
      link: "./CurrentPoint.html",
    },
    {
      label: "PopUpCastInfo",
      link: "./PopUpCastInfo.html",
    },
    {
      label: "EntameDay2",
      link: "./EntameDay2.html",
    },
    {
      label: "EntameDay3",
      link: "./EntameDay3.html",
    },
  ];
  
  // delay render
    var leftMenuIcon = document.getElementById("iconLeftMenu");
    var leftMenuList = document.getElementById("leftMenuList");
    var leftMenuGuestList = document.getElementById("leftMenuGuestList");
    var leftMenuContainer = document.getElementById("humbeger");
    leftMenuContainer.classList.toggle("left-menu-container_on");
    var leftMenuHeaderGuestList = document.getElementById(
      "leftMenuHeaderGuestList"
    );
    leftMenuData.forEach(function (item) {
      var linkElement = document.createElement("a");
      linkElement.textContent = item.label;
      linkElement.href = item.link;
      linkElement.classList.add("link-item");
      leftMenuGuestList.appendChild(linkElement);
    });
    leftMenuHeaderGuestList.addEventListener("click", function () {
      leftMenuGuestList.classList.toggle("left-menu-list_guest_on");
    });

    leftMenuIcon.addEventListener("click", function () {
      leftMenuList.classList.toggle("left-menu-list_on");
    });

    document.addEventListener("click", function (event) {
      var targetElement = event.target;
      if (
        !leftMenuIcon.contains(targetElement) &&
        !leftMenuList.contains(targetElement)
      ) {
        leftMenuList.classList.remove("left-menu-list_on");
      }
    });
}

  insertHumbeger();

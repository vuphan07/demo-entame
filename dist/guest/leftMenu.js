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
      label: "キャストプロフィール",
      link: "./Creatnewrequest1.html",
    },
    {
      label: "保持ポイント",
      link: "./HoldingPoint.html",
    },
    {
      label: "ポイント入力①",
      link: "./InputPoint1.html",
    },
    {
      label: "ポイント入力②",
      link: "./InputPoint2.html",
    },
    {
      label: "ポイント確認",
      link: "./ConfirmPoint.html",
    },
    {
      label: "カード選択",
      link: "./InputCard.html",
    },
    {
      label: "購入確認",
      link: "./ConfirmPayPoint.html",
    },
    {
      label: "ポイント詳細",
      link: "./CurrentPoint.html",
    },
    {
      label: "店舗情報ポップアップ",
      link: "./PopUpCastInfo.html",
    },
    // {
    //   label: "EntameDay2",
    //   link: "./EntameDay2.html",
    // },
    // {
    //   label: "EntameDay3",
    //   link: "./EntameDay3.html",
    // },
    {
      label: "アカウントエラー",
      link: "./SelectRoleErrorLINE.html",
    },
    {
      label: "プロフィール編集",
      link: "./EditProfile.html",
    },
    {
      label: "お支払い情報",
      link: "./CardInfo.html",
    },
    {
      label: "ポイント利用履歴",
      link: "./PointHistory.html",
    },
    {
      label: "ヘルプ",
      link: "./Help.html",
    },
    {
      label: "電話番号変更",
      link: "./ChangeTelNumber.html",
    },
    {
      label: "設定",
      link: "./Setting.html",
    },


    {
      label: "キャストプロフィール_縁ためスケジュール詳細",
      link: "./CastProfileEntameSchedule.html",
    },
    {
      label: "チャット詳細",
      link: "./ChatDetail11.html",
    },
    {
      label: "キャスト設定",
      link: "./SettingCastNoti.html",
    },
    {
      label: "キャストプロフィール_縁ためスケジュールなし",
      link: "./CastProfileNoEntameSchedule.html",
    },
    {
      label: "キャストプロフィール_画像閲覧設定しない",
      link: "./CastProfileNoSettingViewImage.html",
    },
    {
      label: "CurrentPoint1",
      link: "./CurrentPoint1.html",
    },
    {
      label: "CurrentPoint2",
      link: "./CurrentPoint2.html",
    },
    {
      label: "CurrentPointNoPoint",
      link: "./CurrentPointNoPoint.html",
    },
  ];

  const cast = [
    {
      label: "ConfirmedLoginCast",
      link: "./ConfirmedLoginCast.html",
    },
    {
      label: "ConfirmLoginCast",
      link: "./ConfirmLoginCast.html",
    },
    {
      label: "HomeCast",
      link: "./HomeCast.html",
    },
    {
      label: "LoginCast",
      link: "./LoginCast.html",
    },
    {
      label: "PhoneNumberCast",
      link: "./PhoneNumberCast.html",
    },
    {
      label: "VerifyCodeCast",
      link: "./VerifyCodeCast.html",
    },
  ]
  
  // delay render
    var leftMenuIcon = document.getElementById("iconLeftMenu");
    var leftMenuList = document.getElementById("leftMenuList");
    var leftMenuGuestList = document.getElementById("leftMenuGuestList");
    var leftMenuHeaderCastList = document.getElementById("leftMenuHeaderCastList");
    var leftMenuCastList = document.getElementById("leftMenuCastList");
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
    cast.forEach(function (item) {
      var linkElement2 = document.createElement("a");
      linkElement2.textContent = item.label;
      linkElement2.href = item.link;
      linkElement2.classList.add("link-item");
      leftMenuCastList.appendChild(linkElement2);
    });
    leftMenuHeaderCastList.addEventListener("click", function () {
      leftMenuCastList.classList.toggle("left-menu-list_cast_on");
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

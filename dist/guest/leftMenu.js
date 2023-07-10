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
    {
      label: "Creatnewrequest2",
      link: "./Creatnewrequest2.html",
    },
    {
      label: "PopUpBuyPoint",
      link: "./PopUpBuyPoint.html",
    },
    {
      label: "PopUpConfirmBuyPoint",
      link: "./PopUpConfirmBuyPoint.html",
    },
    {
      label: "PopUpBuyPointError",
      link: "./PopUpBuyPointError.html",
    },
    {
      label: "Creatnewrequest3",
      link: "./Creatnewrequest3.html",
    },
    {
      label: "EntamerequestDone",
      link: "./EntamerequestDone.html",
    },
    {
      label: "EntamedayCancelconfirm",
      link: "./EntamedayCancelconfirm.html",
    },
    {
      label: "EntamedayCancelconfirm1",
      link: "./EntamedayCancelconfirm1.html",
    },
    {
      label: "EntameDayCanceled",
      link: "./EntameDayCanceled.html",
    },
    {
      label: "EntamedayCastCancelPopup",
      link: "./EntamedayCastCancelPopup.html",
    },
    {
      label: "EntamedayFinished",
      link: "./EntamedayFinished.html",
    },
    {
      label: "EntameDayReview",
      link: "./EntameDayReview.html",
    },
    {
      label: "EntameDayReview15",
      link: "./EntameDayReview15.html",
    },
    {
      label: "EntamedayReviewChange",
      link: "./EntamedayReviewChange.html",
    },
    {
      label: "EntamedayReviewed",
      link: "./EntamedayReviewed.html",
    },
    {
      label: "EntamedayReviewed1",
      link: "./EntamedayReviewed1.html",
    },
    {
      label: "EntamedayReviewed2",
      link: "./EntamedayReviewed2.html",
    },
  ];

  const cast = [
    {
      label: "アカウント種類選択②",
      link: "./ConfirmedLoginCast.html",
    },
    {
      label: "アカウント種類選択①",
      link: "./ConfirmLoginCast.html",
    },
    {
      label: "ホーム",
      link: "./HomeCast.html",
    },
    {
      label: "ログイン",
      link: "./LoginCast.html",
    },
    {
      label: "電話番号入力",
      link: "./PhoneNumberCast.html",
    },
    {
      label: "認証コード",
      link: "./VerifyCodeCast.html",
    },
    
    {
      label: "RegisterCast",
      link: "./RegisterCast.html",
    },
    {
      label: "ConfirmedInfoCast",
      link: "./Component612.html",
    },
    {
      label: "AutoFillInfoCast",
      link: "./Component15.html",
    },
    {
      label: "AutoFillInfoCast2",
      link: "./Component14.html",
    },
    {
      label: "AutoFillInfoCast3",
      link: "./Component13112.html",
    },
    {
      label: "AutoFillInfoCast4",
      link: "./Component51.html",
    },
    {
      label: "AutoFillInfoCast5",
      link: "./Component1211.html",
    },
    {
      label: "AutoFillInfoCast6",
      link: "./Component1111.html",
    },
    {
      label: "ErrorRegisterCast1",
      link: "./RegisterCastError.html",
    },
    {
      label: "ErrorRegisterCast2",
      link: "./RegisterCastError2.html",
    },
    {
      label: "ErrorRegisterCast3",
      link: "./RegisterCastError1.html",
    },
    {
      label: "ErrorRegisterCast4",
      link: "./RegisterCastError3.html",
    },
    {
      label: "ErrorRegisterCast5",
      link: "./RegisterCastError4.html",
    },
    {
      label: "RegisterCastAnalog",
      link: "./RegisterCastAnalog.html",
    },
    {
      label: "RegisterCastAnalog1",
      link: "./RegisterCastAnalog1.html",
    },
    {
      label: "RegisterCastAnalog2",
      link: "./RegisterCastAnalog2.html",
    },
    {
      label: "RegisterCastAnalog3",
      link: "./RegisterCastAnalog3.html",
    },
    {
      label: "RegisterCastAnalog4",
      link: "./RegisterCastAnalog4.html",
    },
    {
      label: "RegisterCastAnalog5",
      link: "./RegisterCastAnalog5.html",
    },
    {
      label: "RegisterAnalogConfirmed",
      link: "./RegisterAnalogConfirmed.html",
    },


    {
      label: "HomeCast2",
      link: "./HomeCast2.html",
    },
    {
      label: "HomeCast3",
      link: "./HomeCast3.html",
    },
    {
      label: "HomeCast-2",
      link: "./HomeCast-2.html",
    },
    {
      label: "HomeCast-3",
      link: "./HomeCast-3.html",
    },
    {
      label: "HomeCast-4",
      link: "./HomeCast-4.html",
    },
    {
      label: "HomeCast2",
      link: "./HomeCast2.html",
    },
    {
      label: "HomeCast2-2",
      link: "./HomeCast2-2.html",
    },
    {
      label: "HomeCast3",
      link: "./HomeCast3.html",
    },
    {
      label: "HomeCast3-2",
      link: "./HomeCast3-2.html",
    },
    {
      label: "HomeCast3-3",
      link: "./HomeCast3-3.html",
    },
    {
      label: "HomeCast3-4",
      link: "./HomeCast3-4.html",
    },
    {
      label: "MyProfileCast",
      link: "./MyProfileCast.html",
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

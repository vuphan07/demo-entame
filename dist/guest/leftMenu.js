const block = `<div style="display: none;" id="humbeger" class="left-menu-container" >
<div class="left-menu-icon" id="iconLeftMenu">
  <img class="icon-line-2" alt="" src="./public/menu-svgrepo-com.svg" />
</div>
<div class="left-menu-list" id="leftMenuList">
  <div class="left-menu-list-header_guest" id="leftMenuHeaderGuestList">Guest</div>
  <div class="left-menu-list_guest" id="leftMenuGuestList"></div>

  <div class="left-menu-list-header_guest" id="leftMenuHeaderCastList">Cast</div>
  <div class="left-menu-list_cast" id="leftMenuCastList"></div>

  <div class="left-menu-list-header_guest" id="leftMenuHeaderAdminList">Admin</div>
  <div class="left-menu-list_cast" id="leftMenuAdminList"></div>
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
      label: "設定1",
      link: "./Setting1.html",
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
      label: "EntamedayReviewed1",
      link: "./EntamedayReviewed1.html",
    },
    {
      label: "SearchTagDetail",
      link: "./SearchTagDetail.html",
    },
    {
      label: "SearchTagSelect",
      link: "./SearchTagSelect.html",
    },
    {
      label: "SearchResult1",
      link: "./SearchResult1.html",
    },
    {
      label: "SearchResult2",
      link: "./SearchResult2.html",
    },
    {
      label: "EntameListCancelPopup",
      link: "./EntameListCancelPopup.html",
    },
    {
      label: "EntamelistHistoryCancel",
      link: "./EntamelistHistoryCancel.html",
    },
    {
      label: "EntamelistHistoryCancel1",
      link: "./EntamelistHistoryCancel1.html",
    },
    {
      label: "EntamelistHistoryCancel2",
      link: "./EntamelistHistoryCancel2.html",
    },
    {
      label: "EntamelistHistoryCancel3",
      link: "./EntamelistHistoryCancel3.html",
    },
    {
      label: "EntamelistHistoryCancel4",
      link: "./EntamelistHistoryCancel4.html",
    },
    {
      label: "EntamelistHistoryCancel5",
      link: "./EntamelistHistoryCancel5.html",
    },
    {
      label: "EntamelistHistoryCancel6",
      link: "./EntamelistHistoryCancel6.html",
    },
    {
      label: "EntamelistHistoryCancel7",
      link: "./EntamelistHistoryCancel7.html",
    },
    {
      label: "EntamelistHistoryDone",
      link: "./EntamelistHistoryDone.html",
    },
    {
      label: "EntamelistHistoryDone1",
      link: "./EntamelistHistoryDone1.html",
    },
    {
      label: "EntamelistHistoryDone2",
      link: "./EntamelistHistoryDone2.html",
    },
    {
      label: "BlockCast",
      link: "./BlockCast.html",
    },
    {
      label: "ChatBlocked",
      link: "./ChatBlocked.html",
    },
    {
      label: "ChatDetailEmoji",
      link: "./ChatDetailEmoji.html",
    },
    {
      label: "ChatList1",
      link: "./ChatList1.html",
    },
    {
      label: "Gift",
      link: "./Gift.html",
    },
    {
      label: "ReportCast",
      link: "./ReportCast.html",
    },
    {
      label: "SettingChat",
      link: "./SettingChat.html",
    },
    {
      label: "EntamelistHistoryDoneBAD",
      link: "./EntamelistHistoryDoneBAD.html",
    },
    {
      label: "EntamelistHistoryDoneDetail",
      link: "./EntamelistHistoryDoneDetail.html",
    },
    {
      label: "EntameListNowOnDetail",
      link: "./EntameListNowOnDetail.html",
    },
    {
      label: "GiftPurchasePoint2",
      link: "./GiftPurchasePoint2.html",
    },
    {
      label: "GiftPurchasePoint1",
      link: "./GiftPurchasePoint1.html",
    },
    {
      label: "SendingGifftPopup",
      link: "./SendingGifftPopup.html",
    },
    {
      label: "SendingGiftNotEnoughPoint",
      link: "./SendingGiftNotEnoughPoint.html",
    },
    {
      label: "Noti1",
      link: "./Noti1.html",
    },
    {
      label: "ChagePhoneNo",
      link: "./ChagePhoneNo.html",
    },
    {
      label: "ChagePhoneNo1",
      link: "./ChagePhoneNo1.html",
    },
    {
      label: "ChagePhoneNo2",
      link: "./ChagePhoneNo2.html",
    },
    {
      label: "PointHistory",
      link: "./PointHistory.html",
    },
    {
      label: "PrivacyPolicy",
      link: "./PrivacyPolicy.html",
    },
    {
      label: "FAQ",
      link: "./FAQ.html",
    },
    {
      label: "FAQ1",
      link: "./FAQ1.html",
    },
    {
      label: "ContactUs1",
      link: "./ContactUs1.html",
    },
    {
      label: "ContactUs2",
      link: "./ContactUs2.html",
    },
    {
      label: "ContactUs3",
      link: "./ContactUs3.html",
    },
    {
      label: "ContactUs4",
      link: "./ContactUs4.html",
    },
    {
      label: "ContactUs5",
      link: "./ContactUs5.html",
    },
    {
      label: "ContactUs6",
      link: "./ContactUs6.html",
    },
    {
      label: "ContactUs7",
      link: "./ContactUs7.html",
    },
    {
      label: "ContactUs8",
      link: "./ContactUs8.html",
    },
    {
      label: "ContactUs9",
      link: "./ContactUs9.html",
    },
    {
      label: "ContactUsList",
      link: "./ContactUsList.html",
    },
    {
      label: "DeactiveAccount",
      link: "./DeactiveAccount.html",
    },
    {
      label: "Favorite1",
      link: "./Favorite1.html",
    },
    {
      label: "Favorite2",
      link: "./Favorite2.html",
    },
    {
      label: "Favorite3",
      link: "./Favorite3.html",
    },
    {
      label: "Favorite4",
      link: "./Favorite4.html",
    },
    {
      label: "Favorite5",
      link: "./Favorite5.html",
    },
    {
      label: "Favorite6",
      link: "./Favorite6.html",
    },
    {
      label: "Favorite7",
      link: "./Favorite7.html",
    },
    {
      label: "Favorite8",
      link: "./Favorite8.html",
    },
    {
      label: "Favorite9",
      link: "./Favorite9.html",
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

    {
      label: "MyPageCast",
      link: "./MyPageCast.html",
    },
    {
      label: "AccountInfo",
      link: "./AccountInfo.html",
    },
    {
      label: "MyProfileCast",
      link: "./MyProfileCast.html",
    },
    {
      label: "MyPageCast4",
      link: "./MyPageCast4.html",
    },
    {
      label: "PoinHistory",
      link: "./PoinHistory.html",
    },
    {
      label: "PayoffRequest",
      link: "./PayoffRequest.html",
    },
    {
      label: "MyPageCast2",
      link: "./MyPageCast2.html",
    },
    {
      label: "MyPageCast3",
      link: "./MyPageCast3.html",
    },
    {
      label: "MyPageCast5",
      link: "./MyPageCast5.html",
    },
    {
      label: "HelpCast",
      link: "./HelpCast.html",
    },
    {
      label: "EntameHowToUse2",
      link: "./EntameHowtouse2.html",
    },
    {
      label: "SettingCast",
      link: "./SettingCast.html",
    },
    {
      label: "LogoutCast",
      link: "./LogoutCast.html",
    },
    {
      label: "ChagePhoneNo",
      link: "./ChagePhoneNo.html",
    },

    {
      label: "GuestProfile",
      link: "./GuestProfile.html",
    },
    {
      label: "Popup4",
      link: "./Popup4.html",
    },
    {
      label: "ChatDetailCast",
      link: "./ChatDetailCast.html",
    },
    {
      label: "AboutStage",
      link: "./AboutStage.html",
    },
    {
      label: "GuestProfile2",
      link: "./GuestProfile2.html",
    },
    {
      label: "MyPageCast4Error",
      link: "./MyPageCast4Error.html",
    },

    {
      label: "EntamedayNoAddTime",
      link: "./EntamedayNoAddTime.html",
    },
    {
      label: "EntamedayReviewed3",
      link: "./EntamedayReviewed3.html",
    },
    {
      label: "EntameDayCast",
      link: "./EntameDayCast.html",
    },
    {
      label: "EntamedayCastCancelPopup2",
      link: "./EntamedayCastCancelPopup2.html",
    },
    {
      label: "EntamedayCastCanceled",
      link: "./EntamedayCastCanceled.html",
    },
    {
      label: "EntameDayArrived",
      link: "./Component2111111112111.html",
    },
    {
      label: "EntameDayRequestAddTime",
      link: "./Component411211.html",
    },
    {
      label: "EntameDayApproveAddTime",
      link: "./Component41121.html",
    },
    {
      label: "EntameDayReviewed4",
      link: "./Component31112111.html",
    },
    {
      label: "EntamedayCastDontAccetpAddTime",
      link: "./EntamedayCastDontAccetpAddTime.html",
    },

    {
      label: "HomePopupConfirmDeletetSchedule",
      link: "./HomePopupConfirmDeletetSchedule.html",
    },
    {
      label: "DKSD",
      link: "./KSD.html",
    },
    {
      label: "PrivavyPolicy",
      link: "./PrivavyPolicy.html",
    },
    {
      label: "Component21111111121112",
      link: "./Component21111111121112.html",
    },
    {
      label: "Component311121112",
      link: "./Component311121112.html",
    },
    {
      label: "ShareQR",
      link: "./ShareQR.html",
    },
    {
      label: "PointHistory2",
      link: "./PointHistory2.html",
    },
    {
      label: "EntameListCast1",
      link: "./EntameListCast1.html",
    },
    {
      label: "EntameListCast2",
      link: "./EntameListCast2.html",
    },
    {
      label: "EntameListCast3",
      link: "./EntameListCast3.html",
    },
    {
      label: "EntameListCast4",
      link: "./EntameListCast4.html",
    },
    {
      label: "EntameListCast5",
      link: "./EntameListCast5.html",
    },
    {
      label: "EntameListCast6",
      link: "./EntameListCast6.html",
    },
    {
      label: "EntameListCast7",
      link: "./EntameListCast7.html",
    },
    {
      label: "EntameListCast8",
      link: "./EntameListCast8.html",
    },
    {
      label: "EntameListCast9",
      link: "./EntameListCast9.html",
    },
    {
      label: "EntameListCast10",
      link: "./EntameListCast10.html",
    },
    {
      label: "EntameListCast11",
      link: "./EntameListCast11.html",
    },
    {
      label: "EntameListCast12",
      link: "./EntameListCast12.html",
    },
    {
      label: "EntameListCast13",
      link: "./EntameListCast13.html",
    },
    {
      label: "EntameListCast14",
      link: "./EntameListCast14.html",
    },
    {
      label: "EntameListCast15",
      link: "./EntameListCast15.html",
    },
    {
      label: "EntameListCast16",
      link: "./EntameListCast16.html",
    },
    {
      label: "EntameListCast17",
      link: "./EntameListCast17.html",
    },
    {
      label: "EditProfileCast",
      link: "./EditProfileCast.html",
    },
    {
      label: "EditProfileCast1",
      link: "./EditProfileCast1.html",
    },
    {
      label: "EditProfileCast2",
      link: "./EditProfileCast2.html",
    },
    {
      label: "FAQCast",
      link: "./FAQCast.html",
    },
    {
      label: "FAQCast2",
      link: "./FAQCast2.html",
    },
    {
      label: "ContactUsCast",
      link: "./ContactUsCast.html",
    },
    {
      label: "ContactUsCast4",
      link: "./ContactUsCast4.html",
    },
    {
      label: "ContactUsCast3",
      link: "./ContactUsCast3.html",
    },
    {
      label: "ContactUsCast5",
      link: "./ContactUsCast5.html",
    },
    {
      label: "ContactUsCast6",
      link: "./ContactUsCast6.html",
    },
    {
      label: "ContactUsCast7",
      link: "./ContactUsCast7.html",
    },
    {
      label: "ContactUsCast8",
      link: "./ContactUsCast8.html",
    },
    {
      label: "ContactUsCast9",
      link: "./ContactUsCast9.html",
    },
    {
      label: "ContactUsCast10",
      link: "./ContactUsCast10.html",
    },
    {
      label: "ContactUsList1",
      link: "./ContactUsList1.html",
    },
    {
      label: "DeactiveCast",
      link: "./DeactiveCast.html",
    },
    {
      label: "SettingNotification",
      link: "./SettingNotification.html",
    },
    {
      label: "PayoffHistory",
      link: "./PayoffHistory.html",
    },
    {
      label: "ChangeBankAccount",
      link: "./ChangeBankAccount.html",
    },
    {
      label: "PayoffRequest1",
      link: "./PayoffRequest1.html",
    },
    {
      label: "PayoffRequest2",
      link: "./PayoffRequest2.html",
    },
    {
      label: "MyGuestDetail",
      link: "./MyGuestDetail.html",
    },
    {
      label: "MyGuestDetail1",
      link: "./MyGuestDetail1.html",
    },
    {
      label: "MyGuestDetail2",
      link: "./MyGuestDetail2.html",
    },
    {
      label: "MyGuestDetail3",
      link: "./MyGuestDetail3.html",
    },
    {
      label: "MyGuestDetail4",
      link: "./MyGuestDetail4.html",
    },
    {
      label: "MyGuestDetailUnlockChat",
      link: "./MyGuestDetailUnlockChat.html",
    },
    {
      label: "NotiCast1",
      link: "./NotiCast1.html",
    },
  ];

  const admin = [
    {
      label: "TopCoverAdmin",
      link: "TopCoverAdmin.html",
    },
    {
      label: "TopCoverAdminError",
      link: "TopCoverAdminError.html",
    },
    {
      label: "Admin",
      link: "Admin.html",
    },
    {
      label: "PopupLogoutAdmin",
      link: "PopupLogoutAdmin.html",
    },
    {
      label: "VerifyCast",
      link: "VerifyCast.html",
    },
    {
      label: "VerifyCast2",
      link: "VerifyCast2.html",
    },
    {
      label: "VerifyCast3",
      link: "VerifyCast3.html",
    },
    {
      label: "VerifyCastInfoCard",
      link: "VerifyCastInfoCard.html",
    },
    {
      label: "PopUpApproveCast",
      link: "PopUpApproveCast.html",
    },
    {
      label: "PopUpRejectCast",
      link: "PopUpRejectCast.html",
    },


    {
      label: "ChatLogGuest",
      link: "ChatLogGuest.html",
    },
    {
      label: "DeActiveGuest",
      link: "DeActiveGuest.html",
    },
    {
      label: "Frame5393",
      link: "Frame5393.html",
    },
    {
      label: "GuestDetails",
      link: "GuestDetails.html",
    },
    {
      label: "ManagementGuest",
      link: "ManagementGuest.html",
    },
    {
      label: "ManagementGuest2",
      link: "ManagementGuest2.html",
    },
    {
      label: "PopupAdditionGuest",
      link: "PopupAdditionGuest.html",
    },
    {
      label: "PopupAdditionGuest2",
      link: "PopupAdditionGuest2.html",
    },
    {
      label: "PopupDeleteGuest",
      link: "PopupDeleteGuest.html",
    },
    {
      label: "UserListSearchHaveResult",
      link: "UserListSearchHaveResult.html",
    },
    {
      label: "UserListSearchNoResule",
      link: "UserListSearchNoResule.html",
    },
    {
      label: "ManagementCast",
      link: "ManagementCast.html",
    },
    {
      label: "ManagementCast2",
      link: "ManagementCast2.html",
    },
    {
      label: "ManagementCast3",
      link: "ManagementCast3.html",
    },
    {
      label: "PopupDeleteCast",
      link: "PopupDeleteCast.html",
    },
    {
      label: "CastDetail",
      link: "CastDetail.html",
    },
    {
      label: "CastDetail2",
      link: "CastDetail2.html",
    },
    {
      label: "CastDetail3",
      link: "CastDetail3.html",
    },
    {
      label: "CastDetail4",
      link: "CastDetail4.html",
    },
    {
      label: "CastDetail5",
      link: "CastDetail5.html",
    },
    {
      label: "CastDetail6",
      link: "CastDetail6.html",
    },
    {
      label: "CastDetailPopup",
      link: "CastDetailPopup.html",
    },
    {
      label: "CastDetailPopup2",
      link: "CastDetailPopup2.html",
    },
    {
      label: "RequestList",
      link: "RequestList.html",
    },
    {
      label: "RequestList1",
      link: "RequestList1.html",
    },
    {
      label: "RequestList2",
      link: "RequestList2.html",
    },
    {
      label: "RequestList3",
      link: "RequestList3.html",
    },
    {
      label: "RequestDetail",
      link: "RequestDetail.html",
    },
    {
      label: "RequestDetail1",
      link: "RequestDetail1.html",
    },
    {
      label: "RequestDetail2",
      link: "RequestDetail2.html",
    },
    {
      label: "RequestDetail3",
      link: "RequestDetail3.html",
    },
    {
      label: "RequestDetail4",
      link: "RequestDetail4.html",
    },
    {
      label: "RequestDetail5",
      link: "RequestDetail5.html",
    },
    {
      label: "RequestDetail6",
      link: "RequestDetail6.html",
    },
    {
      label: "TNgCancel",
      link: "TNgCancel.html",
    },
    {
      label: "SettingNews",
      link: "SettingNews.html",
    },
    {
      label: "SettingNews1",
      link: "SettingNews1.html",
    },
    {
      label: "SettingNews2",
      link: "SettingNews2.html",
    },
    {
      label: "SettingNews3",
      link: "SettingNews3.html",
    },
    {
      label: "SettingNews4",
      link: "SettingNews4.html",
    },
    {
      label: "SettingNews5",
      link: "SettingNews5.html",
    },
    {
      label: "PayOffManagement",
      link: "PayOffManagement.html",
    },
    {
      label: "PayOffManagement1",
      link: "PayOffManagement1.html",
    },
    {
      label: "PayOffManagement2",
      link: "PayOffManagement2.html",
    },
    {
      label: "PayOffManagement3",
      link: "PayOffManagement3.html",
    },
    {
      label: "PayOffManagement4",
      link: "PayOffManagement4.html",
    },
    {
      label: "ChatLogGuestDelete",
      link: "ChatLogGuestDelete.html",
    },
    {
      label: "PointCourseSetting",
      link: "PointCourseSetting.html",
    },
    {
      label: "PointCourseSetting1",
      link: "PointCourseSetting1.html",
    },
    {
      label: "PointCourseSetting2",
      link: "PointCourseSetting2.html",
    },
    {
      label: "PointCourseSetting3",
      link: "PointCourseSetting3.html",
    },
    {
      label: "PointCourseSetting4",
      link: "PointCourseSetting4.html",
    },
    {
      label: "PointCourseSetting5",
      link: "PointCourseSetting5.html",
    },
    {
      label: "PointCourseSetting6",
      link: "PointCourseSetting6.html",
    },
    {
      label: "PointCourseSetting7",
      link: "PointCourseSetting7.html",
    },
    {
      label: "StaticPageSetting",
      link: "StaticPageSetting.html",
    },
    {
      label: "StaticPageSetting1",
      link: "StaticPageSetting1.html",
    },
    {
      label: "StaticPageSetting2",
      link: "StaticPageSetting2.html",
    },
    {
      label: "StaticPageSetting3",
      link: "StaticPageSetting3.html",
    },
    {
      label: "StaticPageSetting4",
      link: "StaticPageSetting4.html",
    },
    {
      label: "StaticPageSetting5",
      link: "StaticPageSetting5.html",
    },
    {
      label: "StaticPageSetting6",
      link: "StaticPageSetting6.html",
    },
    {
      label: "StaticPageSetting7",
      link: "StaticPageSetting7.html",
    },
    {
      label: "ReportUser",
      link: "ReportUser.html",
    },
    {
      label: "ReportUser1",
      link: "ReportUser1.html",
    },
    {
      label: "ContactUsDetail",
      link: "ContactUsDetail.html",
    },
    {
      label: "ContactUsDetail1",
      link: "ContactUsDetail1.html",
    },
    {
      label: "ContactUsDetail11",
      link: "ContactUsDetail11.html",
    },
    {
      label: "ContactUsDetailAdmin",
      link: "ContactUsDetailAdmin.html",
    },
    {
      label: "ContactUsDetailAdmin2",
      link: "ContactUsDetailAdmin2.html",
    },
    {
      label: "DetailBannerEditDelete",
      link: "DetailBannerEditDelete.html",
    },
    {
      label: "BannerDetailPopup",
      link: "BannerDetailPopup.html",
    },
    {
      label: "BannerDetailPopup1",
      link: "BannerDetailPopup1.html",
    },
    {
      label: "BannerList",
      link: "BannerList.html",
    },
    {
      label: "CreatNewBanner",
      link: "CreatNewBanner.html",
    },
    {
      label: "Coupon1",
      link: "Coupon1.html",
    },
    {
      label: "Coupon2",
      link: "Coupon2.html",
    },
    {
      label: "Coupon3",
      link: "Coupon3.html",
    },
    {
      label: "Coupon4",
      link: "Coupon4.html",
    },
    {
      label: "Coupon5",
      link: "Coupon5.html",
    },
    {
      label: "FAQAdmin",
      link: "FAQAdmin.html",
    },
    {
      label: "FAQAdmin1",
      link: "FAQAdmin1.html",
    },
    {
      label: "FAQAdmin2",
      link: "FAQAdmin2.html",
    },
    {
      label: "FAQAdmin3",
      link: "FAQAdmin3.html",
    },
    {
      label: "FAQAdmin4",
      link: "FAQAdmin4.html",
    },
    {
      label: "FAQAdmin5",
      link: "FAQAdmin5.html",
    },
    {
      label: "FAQAdmin6",
      link: "FAQAdmin6.html",
    },
    {
      label: "Purchase",
      link: "Purchase.html",
    },
    {
      label: "Purchase2",
      link: "Purchase2.html",
    },
    {
      label: "PointLog",
      link: "PointLog.html",
    },
  ];
  // delay render
  var leftMenuIcon = document.getElementById("iconLeftMenu");
  var leftMenuList = document.getElementById("leftMenuList");
  var leftMenuContainer = document.getElementById("humbeger");
  var leftMenuGuestList = document.getElementById("leftMenuGuestList");
  var leftMenuHeaderCastList = document.getElementById(
    "leftMenuHeaderCastList"
  );
  var leftMenuCastList = document.getElementById("leftMenuCastList");
  var leftMenuHeaderGuestList = document.getElementById(
    "leftMenuHeaderGuestList"
  );
  var leftMenuAdminList = document.getElementById("leftMenuAdminList");
  var leftMenuHeaderAdminList = document.getElementById(
    "leftMenuHeaderAdminList"
  );

  leftMenuContainer.classList.toggle("left-menu-container_on");

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
  admin.forEach(function (item) {
    var linkElement = document.createElement("a");
    linkElement.textContent = item.label;
    linkElement.href = item.link;
    linkElement.classList.add("link-item");
    leftMenuAdminList.appendChild(linkElement);
  });

  leftMenuHeaderCastList.addEventListener("click", function () {
    leftMenuCastList.classList.toggle("left-menu-list_cast_on");
  });

  leftMenuHeaderGuestList.addEventListener("click", function () {
    leftMenuGuestList.classList.toggle("left-menu-list_guest_on");
  });

  leftMenuHeaderAdminList.addEventListener("click", function () {
    leftMenuAdminList.classList.toggle("left-menu-list_guest_on");
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

const block = `<div id="humbeger">
<div class="left-menu-icon" id="iconLeftMenu">
  <img class="icon-line-2" alt="" src="./public/menu-svgrepo-com.svg" />
</div>
<div class="left-menu-list" id="leftMenuList"></div>
</div>`

function insertHumbeger() {
    var div = document.createElement('div');
    div.innerHTML = block.trim();
    document.querySelector("body").prepend(div);

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = './LeftMenu.css';
    head.appendChild(link);

    var leftMenuData = [
        {
          label: 'TopCover',
          link: './index.html',
        },
        {
          label: 'RegisterPhoneNumber',
          link: './Component321.html',
        },
        {
          label: 'InputTelNumberError',
          link: './InputTelNumberError.html',
        },
        {
          label: 'RegisterVerifyCode',
          link: './Component41.html',
        },
        {
          label: 'VerifyCodeError',
          link: './VerifyCodeError1.html',
        },
        {
          label: 'VerifyCodeError2',
          link: './VerifyCodeError2.html',
        },
        {
          label: 'ConfirmRegister1',
          link: './Component312.html',
        },
        {
          label: 'ConfirmRegister2',
          link: './Component211.html',
        },
        {
          label: 'RegisterBasicInfo',
          link: './Component611.html',
        },
        {
          label: 'RegisterBasicInfoError',
          link: './RegisterAccountError.html',
        },
        {
          label: 'RegisterPayment',
          link: './Component91.html',
        },
        {
          label: 'RegisterPaymentError',
          link: './Component121.html',
        },
        {
          label: 'RegisterBasicInfo2',
          link: './Component3111.html',
        },
        {
          label: 'RegisterBasicInfo2Error',
          link: './Component22111.html',
        },
        {
          label: 'RegisterBasicInfo3Error',
          link: './Component23.html',
        },
        {
          label: 'EntameHowToUse',
          link: './EntameHowToUse.html',
        },
        {
          label: 'LoginLine',
          link: './LINE.html',
        },
        {
          label: 'ConfirmLoginLine',
          link: './Component22.html',
        },
        {
          label: 'ConfirmLoginLine2',
          link: './Component11.html',
        },
        {
          label: 'Home',
          link: './Component2121.html',
        },
        {
          label: 'TopCoverLoginPhoneNumber',
          link: './TopCoverLoginPhoneNumber.html',
        },
        {
          label: 'LoginByPhone',
          link: './LoginByPhone.html',
        },
        {
          label: 'LoginByPhone',
          link: './LoginByPhone.html',
        },{
          label: 'LoginByPhoneConfirm',
          link: './LoginByPhoneConfirm.html',
        },{
          label: 'LoginByPhoneConfirmChecked',
          link: './LoginByPhoneConfirmChecked.html',
        },{
          label: 'LoginByPhoneError',
          link: './LoginByPhoneError.html',
        },{
          label: 'VerifyCodeError1',
          link: './VerifyCodeError1.html',
        },{
          label: 'VerifyCodeError2',
          link: './VerifyCodeError2.html',
        },{
          label: 'VerifyLoginPhone',
          link: './VerifyLoginPhone.html',
        },{
          label: 'VerifyLoginPhoneError',
          link: './VerifyLoginPhoneError.html',
        },{
          label: 'VerifyLoginPhoneError2',
          link: './VerifyLoginPhoneError2.html',
        },
      ]
      var leftMenuIcon = document.getElementById("iconLeftMenu");
      var leftMenuList = document.getElementById("leftMenuList");
  
      leftMenuData.forEach(function (item) {
        var linkElement = document.createElement("a");
        linkElement.textContent = item.label;
        linkElement.href = item.link;
        linkElement.classList.add("link-item");
        leftMenuList.appendChild(linkElement);
      });
  
      leftMenuIcon.addEventListener("click", function () {
        leftMenuList.classList.toggle("left-menu-list_on");
      });
  
      document.addEventListener("click", function (event) {
        var targetElement = event.target;
        if (!leftMenuIcon.contains(targetElement) && !leftMenuList.contains(targetElement)) {
          leftMenuList.classList.remove("left-menu-list_on");
        }
      });
}

insertHumbeger()
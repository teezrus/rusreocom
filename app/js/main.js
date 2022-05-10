document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-btn").onclick = function () {
    open();
  };
  let menuMobile = document.querySelector(".menu-mobile"),
    menuBtn = document.querySelector(".menu-btn");
  footerContact = document.querySelector(".footer__item-contact");
  function open() {
    document.addEventListener("click", (e) => {
      const withinBoundaries = e.composedPath().includes(menuMobile);
      const withinBoundariess = e.composedPath().includes(menuBtn);
      // footerUlLi.forEach((item) => {
      //   item.style.cssText = "z-index:-1";
      // });
      if (
        !withinBoundaries &&
        menuMobile.classList.contains("menu-mobile--active") &&
        !withinBoundariess
      ) {
        menuMobile.classList.remove("menu-mobile--active");
        menuBtn.classList.remove("active");
        footerContact.classList.remove("hidden");
      }
    });
    menuMobile.classList.toggle("menu-mobile--active");
    document.querySelector(".menu-btn").classList.toggle("active");
    footerContact.classList.toggle("hidden");
  }

  let a = document.querySelector(".copy-link");
  let b = document.querySelector(".contacts__copy-link");
  let copy = document.querySelector(".mobile__info-link");
  let copyContacts = document.querySelector(".contacts__mail");

  function copyBtn(btn, copy) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      let linkPopupInfo = copy;
      // Выборка ссылки с электронной почтой
      var range = document.createRange();
      range.selectNode(linkPopupInfo);
      window.getSelection().addRange(range);

      try {
        // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Copy email command was " + msg);
      } catch (err) {
        console.log("Oops, unable to copy");
      }

      // Снятие выделения - ВНИМАНИЕ: вы должны использовать
      // removeRange(range) когда это возможно
      window.getSelection().removeAllRanges();
    });
  }
  try {
    copyBtn(a, copy);
    copyBtn(b, copyContacts);
  } catch {}

  let popup = document.querySelector(".calculate-project"),
    btn = document.querySelectorAll(".calculate-project__btn"),
    close = document.querySelector(".calculate-project .btn-back"),
    header = document.querySelector("header.header");

  btn.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.remove("hidden");
      header.style.cssText = "z-index:0";
    });
  });

  popup.addEventListener("click", function (event) {
    e = event || window.event;
    if (e.target == this) {
      popup.classList.add("hidden");
      header.style.cssText = "z-index:2";
    }
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("hidden");
    header.style.cssText = "z-index:2";
  });

  let popupCallBack = document.querySelector(".form-block-poup.call-back"),
    btnCallBack = document.querySelectorAll(".call-back-btn"),
    closeCallBack = document.querySelector(
      ".form-block-poup.call-back .btn-back"
    ),
    headerCallBack = document.querySelector("header.header");

  btnCallBack.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      popupCallBack.classList.remove("hidden");
      headerCallBack.style.cssText = "z-index:0";
    });
  });

  popupCallBack.addEventListener("click", function (event) {
    e = event || window.event;
    if (e.target == this) {
      popupCallBack.classList.add("hidden");
      headerCallBack.style.cssText = "z-index:2";
    }
  });

  closeCallBack.addEventListener("click", function (event) {
    event.preventDefault();
    popupCallBack.classList.add("hidden");
    headerCallBack.style.cssText = "z-index:2";
  });
});

function toggle_visibility(id) {
  let $e = $("#" + id);
  if ($e.is(":visible")) {
    $e.slideUp("fast");
  } else {
    $(".alist").not($e).slideUp("fast");
    $e.slideDown("fast");
  }
}

// jquery

$(".used-equipment__items").slick({
  nextArrow:
    '<button type="button" class="slick-next"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.32738 15.9999C1.49815 16.0005 1.66688 15.9628 1.82117 15.8897C1.97546 15.8165 2.11139 15.7097 2.21897 15.5771L7.73997 8.72061C7.90809 8.51613 8 8.25965 8 7.99496C8 7.73027 7.90809 7.47379 7.73997 7.26932L2.02465 0.412821C1.83063 0.179452 1.55182 0.0326955 1.24957 0.00483554C0.947313 -0.0230244 0.646366 0.0702947 0.412933 0.264263C0.179501 0.458232 0.0327044 0.736962 0.00483656 1.03913C-0.0230312 1.34131 0.0703135 1.64217 0.264335 1.87554L5.37383 8.00068L0.435795 14.1258C0.296018 14.2936 0.207228 14.4978 0.179933 14.7144C0.152637 14.931 0.187976 15.1509 0.281772 15.3481C0.375566 15.5452 0.52389 15.7114 0.709193 15.8269C0.894495 15.9424 1.10902 16.0025 1.32738 15.9999Z" fill="#1C77C3"/></svg></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.67262 15.9999C6.50185 16.0005 6.33312 15.9628 6.17883 15.8897C6.02454 15.8165 5.88861 15.7097 5.78103 15.5771L0.260033 8.72061C0.0919094 8.51613 0 8.25965 0 7.99496C0 7.73027 0.0919094 7.47379 0.260033 7.26932L5.97535 0.412821C6.16937 0.179452 6.44818 0.0326955 6.75043 0.00483554C7.05269 -0.0230244 7.35363 0.0702947 7.58707 0.264263C7.8205 0.458232 7.9673 0.736962 7.99516 1.03913C8.02303 1.34131 7.92969 1.64217 7.73566 1.87554L2.62617 8.00068L7.5642 14.1258C7.70398 14.2936 7.79277 14.4978 7.82007 14.7144C7.84736 14.931 7.81202 15.1509 7.71823 15.3481C7.62443 15.5452 7.47611 15.7114 7.29081 15.8269C7.1055 15.9424 6.89098 16.0025 6.67262 15.9999Z" fill="#1C77C3"/></svg></button>',
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick",
    },
  ],
});

$(".questions__name.active").click();
$(".questions__name").on("click", function (event) {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".questions__name").removeClass("active");
    $(this).toggleClass("active");
  }
});

if ($(".main-text__info").children().length) {
  $(".main-text__show-more").on("click", function (e) {
    e.preventDefault();
    $(".main-text__info").toggleClass("active");
    $(".main-text__show-more").css({ display: "none" });
  });
} else {
  $(".main-text__show-more").css({ display: "none" });
}

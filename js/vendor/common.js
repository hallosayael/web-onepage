
$(".index_vr .open_img ").click(function () {
  $(".index_vr .iframe_fh").append('<iframe src="'+$(".iframe_fh").attr("value")+'" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>')
  $(".index_vr .iframe_fh").addClass("active")
  $(".index_vr ").addClass("unactive")
})

$(".index_vr .close_span ").click(function () {
  $(".index_vr .iframe_fh").removeClass("active")
  $(".index_vr ").removeClass("unactive")
  $(".index_vr .iframe_fh iframe").remove()
})











/*Swiper Banner*/
if ($('.swiper-wrapper .swiper-slide').length < 2) {
  $('.swiper-pagination').hide()
}

var swiper = new Swiper('.image-additional', {
  slidesPerView: 3,
  spaceBetween: 15,
  pagination: {
    el: '.product-view .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.product-view .swiper-button-next',
    prevEl: '.product-view .swiper-button-prev',
  },
  breakpoints: {
    1366: {
      slidesPerView: 4
    },
    950: {
      slidesPerView: 3
    },
    480: {
      slidesPerView: 1,
      loop: true
    }
  }
})



var relatedSwiper = new Swiper('.goods-may-like .swiper-slider', {
  slidesPerView: 4,
  spaceBetween: 28,
  speed: 400,

  pagination: {
    el: '.product-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.navigate_button_next',
    prevEl: '.navigate_button_prev',
  },
  breakpoints: {
    1680: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});


$('.head_nav li').each(function () {
  if ($(this).find('ul').length > 0) {
    $(this).children('a').append("<b></b>");
    $(this).addClass('has-child');
  }
})
// Navigation dropdown menu
dropMenu('.head_nav li', 'ul', 0, 'menu_show');



function hideMsgPop() {
  $('.inquiry-pop-bd').fadeOut('fast')
}
if ($('body .inquiry-form-wrap').length > 0) {
  var webTop = $('body .inquiry-form-wrap').offset().top - 80
  $('.product-btn-wrap .email,.button,.side_content .side_list .email ,.inquiry_btn').click(function () {
    $("html, body").animate({
      scrollTop: webTop
    }, 1000);
    $(".ad_prompt").show().delay(3000).hide(300);
  })
} else {
  $('.product-btn-wrap .email,.button,.side_content .side_list .email ,.inquiry_btn').click(function () {
    $('.inquiry-pop-bd').fadeIn('fast')
  })
}
$('.inquiry-pop,.product-btn-wrap .email,.button,.side_content .side_list .email ,.inquiry_btn').click(function (e) {
  e.stopPropagation();
})
$(document).click(function () {
  hideMsgPop()
})

function changeuRL(link) {
  var curUrl = document.location.href;
  var oldUrl = window.location.host + '/';
  var lgArr = ['fr/', 'de/', 'pt/', 'es/', 'ru/', 'ko/', 'ar/', 'ga/', 'ja/', 'el/', 'tr/', 'it/', 'da/', 'ro/', 'id/', 'cs/', 'af/', 'sv/', 'pl/', 'eu/', 'ca/', 'eo/', 'hi/', 'lo/', 'sq/', 'am/', 'hy/', 'az/', 'be/', 'bn/', 'bs/', 'bg/', 'ceb/', 'ny/', 'co/', 'hr/', 'nl/', 'et/', 'tl/', 'fi/', 'fy/', 'gl/', 'ka/', 'gu/', 'ht/', 'ha/', 'haw/', 'iw/', 'hmn/', 'hu/', 'is/', 'ig/', 'jw/', 'kn/', 'kk/', 'km/', 'ku/', 'ky/', 'la/', 'lv/', 'lt/', 'lb/', 'mk/', 'mg/', 'ms/', 'ml/', 'mt/', 'mi/', 'mr/', 'mn/', 'my/', 'ne/', 'no/', 'ps/', 'fa/', 'pa/', 'sr/', 'st/', 'si/', 'sk/', 'sl/', 'so/', 'sm/', 'gd/', 'sn/', 'sd/', 'su/', 'sw/', 'tg/', 'ta/', 'te/', 'th/', 'uk/', 'ur/', 'uz/', 'vi/', 'cy/', 'xh/', 'yi/', 'yo/', 'zu/', 'zh-CN/', 'zh-TW/'];
  $.each(lgArr, function (i, lenItem) {
    var lgUrl = oldUrl.toString() + lenItem;
    if (curUrl.indexOf(lgUrl) != -1) {
      link.each(function (i) {
        if (!$(this).parents().hasClass('language-flag')) {
          var iLink;
          if ($(this).prop('href')) {
            iLink = $(this).prop('href');
          }
          if (String(iLink).indexOf(oldUrl) != -1 && String(iLink).indexOf(lgUrl) == -1 && curUrl.indexOf(lgUrl) != -1) {
            var newLink = iLink.replace(oldUrl, lgUrl);
            $(this).attr('href', newLink);
          }
        }
      })
    }
  });
}
$(function () {
  changeuRL($('a'));
})
$(document).ready(function () {
  $('.change-language .change-language-cont').append("<div class='change-empty'>Untranslated</div>")
  $('.prisna-wp-translate-seo').append("<div class='lang-more'>More Language</div>")
  if ($('body .prisna-wp-translate-seo').length > 0 && $('.change-language .prisna-wp-translate-seo').length < 1) {
    $('.prisna-wp-translate-seo').appendTo('.change-language .change-language-cont')
    if ($('.change-language .change-language-cont .prisna-wp-translate-seo li').length > 0) {
      $('.change-language .change-language-cont .change-empty').hide()
      $('.change-language .change-language-cont .prisna-wp-translate-seo li').each(function (index) {
        if (index > 35) {
          $(this).addClass('lang-item lang-item-hide')
          $('.change-language-cont').find('.lang-more').fadeIn()
        } else {
          $('.change-language-cont').find('.lang-more').fadeOut()
        }
      })
      if ($('.change-language-cont .lang-more').length > 0) {
        $('.change-language-cont .lang-more').click(function () {
          if ($(this).parents('.change-language-cont').find('.prisna-wp-translate-seo li.lang-item').hasClass('lang-item-hide')) {
            $(this).parents('.change-language-cont').find('.prisna-wp-translate-seo li.lang-item').removeClass('lang-item-hide')
            $(this).addClass('more-active').text('x')
          } else {
            $(this).parents('.change-language-cont').find('.prisna-wp-translate-seo li.lang-item').addClass('lang-item-hide')
            $(this).removeClass('more-active').text('More Language')
          }
        })
      }
    } else {
      $('.change-language .change-language-cont .change-empty').fadeIn()
    }
  }
})
var mHeadTop = $('.web_head').offset().top
var $backToTopTxt = "TOP",
  $backToTopEle = $('<span class="gotop"></span>').appendTo($("body"))
  .html('<em>' + $backToTopTxt + '</em>').attr("title", $backToTopTxt).click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
  }),
  $backToTopFun = function () {
    var st = $(document).scrollTop(),
      winh = $(window).height();
    (st > mHeadTop) ? $backToTopEle.addClass('active'): $backToTopEle.removeClass('active');
    if (!window.XMLHttpRequest) {
      $backToTopEle.css("top", st + winh - 210);
    }
  };
$(window).bind("scroll", $backToTopFun);
$(function () {
  $backToTopFun();
});



// get window size
var winWidth = 0;
var winHeight = 0;

function getWinSize() {
  if (window.innerWidth) {
    winWidth = window.innerWidth;
  } else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth;
  }
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if ((document.body) && (document.body.clientHeight)) {
    winHeight = document.body.clientHeight;
  }
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    if (window.innerWidth && window.innerHeight) {
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
    } else {
      winHeight = document.documentElement.clientHeight;
      winWidth = document.documentElement.clientWidth;
    }
  }
}
getWinSize();


var $nav = $('.web_head'),
  navTop = $('.nav_wrap').offset().top,
  headH = $nav.outerHeight(),
  winTop_1 = 0,
  spr = $('body').height() - $nav.height(),
  holder = jQuery('<div class="head_holder">');

function fixedTop() {
  var winTop_2 = $(window).scrollTop();
  holder.css('height', $('.head_bottom').outerHeight());
  if (winTop_2 > headH && winWidth >= 950) {
    holder.show().appendTo($nav);
    $nav.addClass('fixed-nav');
    $nav.parents('body').addClass('fixed-body');
    setTimeout(function () {
      $nav.addClass('fixed-nav-active')
    });
  } else {
    holder.hide();
    $nav.removeClass('fixed-nav fixed-nav-active');
    $nav.parents('body').removeClass('fixed-body');
  }
  if (winTop_2 > winTop_1 && winWidth >= 950) {
    $nav.removeClass('fixed-nav-appear');
  } else if (winTop_2 < winTop_1) {
    $nav.addClass('fixed-nav-appear');
  }
  winTop_1 = $(window).scrollTop();

  // if(winWidth>1919){
  //   $('.quality-container .swiper-slide').addClass("bignine")
  //  }else{
  //   $('.quality-container .swiper-slide').removeClass("bignine")
  //  }
}
fixedTop();
$(window).on('scroll', function () {
  fixedTop();
})
$(window).on('resize', function () {
  fixedTop();
})


$('.faq-item').each(function (index) {
  var _this = $(this)
  var title = _this.find('.faq-title')
  var cont = _this.find('.faq-cont')
  if (index == 0) {
    title.addClass('show-title')
  }
  title.on('click', function () {
    if (cont.is(':hidden') && !$(this).hasClass('show-title')) {
      cont.slideDown('fast')
      $(this).addClass('show-title')
      _this.siblings().find('.faq-title').removeClass('show-title')
      _this.siblings().find('.faq-cont').slideUp('fast')
    } else {
      cont.slideUp('fast')
      $(this).removeClass('show-title')
    }
  })
})

function mSizeChange() {
  getWinSize();
  if (winWidth <= 950) {
    if ($('.mobile-head-items').length < 1) {
      var mobileService = '<div class="mobile-head-items"><div class="mobile-head-item mobile-head-nav"><div class="title"></div><div class="main-content-wrap side-content-wrap"><div class="content-wrap"></div></div></div><div class="mobile-head-item mobile-head-language"><div class="title"></div><div class="main-content-wrap side-content-wrap"><div class="content-wrap"></div></div></div><div class="mobile-head-item mobile-head-search"><div class="title"></div><div class="main-content-wrap middle-content-wrap"><div class="content-wrap"></div></div></div>'
      $('body').append(mobileService)
      if ($('body .aside').length > 0) {
        $('.mobile-head-items').append('<div class="mobile-head-item mobile-head-aside"><div class="title"></div><div class="main-content-wrap side-content-wrap"><div class="content-wrap"></div></div></div>')
      }
      $('.mobile-head-item').each(function () {
        $(this).find('.title').click(function () {
          if ($(this).parents('.mobile-head-item').find('.main-content-wrap').length > 0) {
            var pItem = $(this).parents('.mobile-head-item')
            if (!pItem.find('.main-content-wrap').hasClass('show-content-wrap')) {
              pItem.find('.main-content-wrap').addClass('show-content-wrap')
              pItem.find('.side-content-wrap').stop().animate({
                'left': '0'
              }, 300)
              pItem.find('.middle-content-wrap').addClass('middle-show-content-wrap')
              pItem.find('.side-content-wrap').append("<b class='mobile-ico-close'></b>")
              pItem.siblings('.mobile-head-item').find('.main-content-wrap').removeClass('show-content-wrap')
              pItem.siblings('.mobile-head-item').find('.side-content-wrap').stop().animate({
                'left': '-70%'
              }, 300)
              pItem.siblings('.mobile-head-item').find('.middle-content-wrap').removeClass('middle-show-content-wrap')
              pItem.siblings('.mobile-head-item').find('.side-content-wrap .mobile-ico-close').remove()
              if ($('.mobile-head-items').find('.mobile-body-mask').length < 1) {
                $('.mobile-head-items').append('<div class="mobile-body-mask"></div>')
              }
            } else {
              pItem.find('.main-content-wrap').removeClass('show-content-wrap')
              pItem.find('.side-content-wrap').stop().animate({
                'left': '-70%'
              }, 300)
              pItem.find('.middle-content-wrap').removeClass('middle-show-content-wrap')
              pItem.find('.side-content-wrap .mobile-ico-close').remove()
            }
            $('.mobile-body-mask').click(function () {
              $('.mobile-body-mask').remove()
              $('.mobile-head-item .main-content-wrap').removeClass('show-content-wrap')
              $('.mobile-head-item .side-content-wrap').animate({
                'left': '-70%'
              }, 300)
              $('.mobile-head-item .middle-content-wrap').removeClass('middle-show-content-wrap')
              $('.mobile-head-item .side-content-wrap .mobile-ico-close').remove()
            })
            $('.mobile-ico-close').click(function () {
              $('.mobile-body-mask').remove()
              $('.mobile-head-item .main-content-wrap').removeClass('show-content-wrap')
              $('.mobile-head-item .side-content-wrap').stop().animate({
                'left': '-70%'
              }, 300)
              $('.mobile-head-item .middle-content-wrap').removeClass('middle-show-content-wrap')
              $('.mobile-head-item .side-content-wrap .mobile-ico-close').remove()
            })
          }
        })
      })
      $('.change-currency ').clone().appendTo('.mobile-head-item.mobile-head-currency .main-content-wrap .content-wrap')
      $('.change-language .change-language-cont').clone().appendTo('.mobile-head-item.mobile-head-language .main-content-wrap .content-wrap')
      $('.nav_wrap .head_nav').clone().appendTo('.mobile-head-item.mobile-head-nav .main-content-wrap .content-wrap')
      $('.head-search:last').clone().appendTo('.mobile-head-item.mobile-head-search .main-content-wrap .content-wrap')
      $('.head_sns').clone().appendTo('.mobile-head-item.mobile-head-social .main-content-wrap .content-wrap')
      $('.aside .aside-wrap').clone().appendTo('.mobile-head-item.mobile-head-aside .main-content-wrap .content-wrap')
    }
  }
  //mobile end
  else {
    $(document).ready(function () {
      $('.mobile-body-mask,.mobile-head-items,.mobile-head-items,.mobile-nav-items,.mobile-cart-items,.mobile-tab-items').remove()
    });
  }
}
$(function () {
  mSizeChange();
})
$(window).resize(function () {
  mSizeChange()
});


/*side*/
function sideCate(cateEle, siblingsStatus) {
  $(cateEle).each(function () {
    if ($(this).find('ul').length) {
      $(this).addClass('has-child');
      $(this).append("<span class='icon-cate icon-cate-down'></span>")
      $(this).children('.icon-cate').click(function (e) {
        var mEle = $(this).parent('li');
        var mList = $(this).parent('li').children('ul');
        var msiblings = $(this).parent('li').siblings('li');
        if (siblingsStatus == 0) {
          msiblings.removeClass('li_active');
          msiblings.children('ul').slideUp(150);
          msiblings.children('.icon-cate').removeClass('icon-cate-up').addClass('icon-cate-down');
        }
        if (mList.is(':hidden')) {
          mEle.addClass('li_active');
          mList.slideDown(150);
          $(this).removeClass('icon-cate-down').addClass('icon-cate-up');
        } else {
          mEle.removeClass('li_active');
          mList.slideUp(150);
          $(this).removeClass('icon-cate-up').addClass('icon-cate-down');
        }
        e.stopPropagation();
      })
    }
  })
}
$(function () {
  // side cate
  sideCate('.side-cate li', 0);
  $('.side-cate,.side-cate ul').each(function () {
    if (!$(this).find('ul').length) {
      $(this).addClass('cate-type-list');
    }
  })
  var $currentEle = $('.side-widget .side-cate .nav-current');
  if ($currentEle.parents('ul').length > 0 && $currentEle.find('ul').length > 0) {
    $currentEle.parents('ul').show()
    $currentEle.parents('li').addClass("show_li")
    $currentEle.parents('li.show_li').children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up')
    $currentEle.children('ul').show()
    $('.side-widget .side-cate .nav-current ').children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up');
  } else if ($currentEle.parents('ul').length > 0 && $currentEle.find('ul').length < 1) {
    $currentEle.parents('ul').show()
    $currentEle.parents('li').addClass("show_li")
    $currentEle.parents('li.show_li').children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up')
  } else if ($currentEle.parents('ul').length < 1 && $currentEle.find('ul').length > 0) {
    $currentEle.children('ul').show()
    $currentEle.children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up');
  }
})

/*tabContainer*/
tabContainer('.tab-content-wrap', '.tab-title', '.tab-panel');

function tabContainer(container, title, panel) {
  $(container).each(function () {
    $(this).find(title).each(function () {
      if ($(this).hasClass('current')) {
        j = $(this).index();
        $(this).parents(container).find(panel).eq(j).removeClass('disabled')
      }
      $(this).click(function () {
        i = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parents(container).find(panel).eq(i).show();
        $(this).parents(container).find(panel).not($(this).parents(container).find(panel).eq(i)).hide();
      })
    })
  })
}
/*search*/
document.documentElement.className = 'js';;
(function (window) {
  if (document.querySelector('.web-search')) {
    'use strict';
    var mainContainer = document.querySelector('.container'),
      searchContainer = document.querySelector('.web-search'),
      openCtrl = document.getElementById('btn-search'),
      closeCtrl = document.getElementById('btn-search-close'),
      inputSearch = searchContainer.querySelector('.search-ipt');

    function init() {
      initEvents()
    }

    function initEvents() {
      openCtrl.addEventListener('click', function () {
        if (!searchContainer.classList.contains("search--open")) {
          openSearch();
        } else {
          closeSearch();
        }
      });
      closeCtrl.addEventListener('click', closeSearch);
      document.addEventListener('keyup', function (ev) {
        if (ev.keyCode == 27) {
          closeSearch()
        }
      })
    }

    function openSearch() {
      mainContainer.classList.add('main-wrap--move');
      searchContainer.classList.add('search--open');
      setTimeout(function () {
        inputSearch.focus()
      }, 600)
    }

    function closeSearch() {
      mainContainer.classList.remove('main-wrap--move');
      searchContainer.classList.remove('search--open');
      inputSearch.blur();
      inputSearch.value = ''
    }
    init()
  }
})(window);
$(function () {
  $("#scrollsidebar").fix({
    float: 'right',
    durationTime: 400
  });
});
$('.business_right .events li').on('click', function () {
  $(this).addClass('current').siblings("li").removeClass('current')
  var i = $(this).index()
  $(this).parents('.index_business').find('.business_middle .tab_content').eq(i).addClass('current').siblings(".tab_content").removeClass('current')
})
$('table').each(function () {
  if (!$(this).parent().hasClass('table_wrap')) {
    $(this).wrap("<div class='table_wrap'></div>")
  }
})






/* -------------- public Function --------------*/


/*!
 åˆ‡æ¢CLASS
 ----------
 * è¯´æ˜Ž:
 * btn:  æŒ‰é’®
 * cont: æ“æŽ§çš„å†…å®¹
 * cName: åˆ‡æ¢çš„className
 * siblingsStatus: åŒçº§æ˜¯å¦å…³é—­(0:å…³é—­,å…¶ä»–å€¼:ä¸å—clickå½±å“)
*/
function toggleClass(btn, cont, cName, hName, siblingsStatus) {
  var $btn = $(btn);
  var $cont = $(cont);
  if (siblingsStatus == 0) {
    $btn.parents(cont).siblings(cont).removeClass(cName).addClass(hName);
  }
  if ($btn.parents(cont).hasClass(cName)) {
    $btn.parents(cont).removeClass(cName).addClass(hName);
  } else {
    $btn.parents(cont).addClass(cName).removeClass(hName);
  }
}

// set head nav Direction
function menuDirection(ele) {
  var winW = $(window).innerWidth();
  $(ele).each(function () {
    if ($(this).find('ul').length) {
      var linkEleW = $(this).children('a').width();
      var offRight = winW - $(this).offset().left;
      var childLen = $(this).find('ul').length;
      var childrenWidth = childLen * 250 + 10;
      if (offRight < childrenWidth) {
        $(this).addClass('menu_left');
      } else {
        $(this).removeClass('menu_left');
      }
    }
  })
}

// dropMenu
function dropMenu(menuItem, menuList, menustatus, showClass) {
  var mouseover_tid = [];
  var mouseout_tid = [];
  if (showClass) {
    showClass = showClass;
  } else {
    showClass = 'active';
  }
  $(menuItem).each(function (index) {
    $(this).hover(
      function () {
        var _self = this;
        clearTimeout(mouseout_tid[index]);
        mouseover_tid[index] = setTimeout(function () {
          if (menustatus == '1') {
            $(_self).children(menuList).slideDown(150);
          }
          $(_self).addClass(showClass);
        }, 150);
      },
      function () {
        var _self = this;
        clearTimeout(mouseover_tid[index]);
        mouseout_tid[index] = setTimeout(function () {
          if (menustatus == '1') {
            $(_self).children(menuList).slideUp(50);
          }
          $(_self).removeClass(showClass);
        }, 150);
      }
    );
  })
}




/* -------------- header --------------*/

// dropmenu direction
$(function () {
  menuDirection('.head_nav>li');
  $(window).on('resize', function () {
    menuDirection('.head_nav>li');
  })
})
$(function () {

  $('body').delegate('.head_nav li b', 'click', function () {
    var navItem = $(this).closest('li');
    var navMenu = navItem.children('ul');
    if (navMenu.is(':hidden')) {
      navMenu.slideDown(150, function () {
        navItem.addClass('active');
      });
    } else {
      navItem.removeClass('active');
      navMenu.slideUp(150);
    }
    return false;
  })
})


/* -------------- index --------------*/



var mySwiper = new Swiper('.feature_items', {
  effect: 'slide',
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.feature_button_next',
    prevEl: '.feature_button_prev',
    disabledClass: 'feature-button-disabled',
  },
  pagination: {
    el: '.feature-pagination',
    clickable: true,
  },
  breakpoints: {
    1280: {
      spaceBetween: 10,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 7,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
});










/* -------------- subpage ä¾§æ  --------------*/
var sideProduct = new Swiper('.side_slider', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 10,
  direction: 'vertical',
  navigation: {
    nextEl: '.side-product-items .btn-next',
    prevEl: '.side-product-items .btn-prev',
  },
  pagination: {
    el: '.side-product-items .swiper-pagination',
    clickable: true,
  },
});




// fullpage
$(function () {

  var $ww = $(window).width();


  if ($ww < 950) {
    $(".superior_main_fh").addClass("")
    $(".superior_main").addClass("swiper-wrapper").removeClass("flex_row")
    $(".superior_main li").addClass("swiper-slide")


    superior_main_fh = new Swiper('.superior_main_fh', {
      spaceBetween: 0,
      // loop:true,
      slidesPerView: 2,
      breakpoints: {
        680: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 1,
          loop: true
        }
      }

    });



  }






  if ($('.index_main').length > 0 && $ww > 1200) {

    $('.index_main').fullpage({
      'verticalCentered': false,
      'navigation': true,
      navigationPosition: 'right',
      // navigationTooltips: ['Banner', 'Product', 'Why', 'chain', 'News', 'foot'],
      anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07', 'page08'],
      css3: true,
      normalScrollElements: '.change-language-cont',
      resize: false,
      afterLoad: function (anchorLink, index) {
        if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
          $("body").addClass("body_style01").removeClass("body_style02")
        } else if (index == 2 || index == 4 || index == 6 || index == 8) {
          $("body").removeClass("body_style01").addClass("body_style02")
        }
        if (index == 1) {
          $(".web_head").removeClass("unactive")
        } else {
          $(".web_head").addClass("unactive")
        }
        if (index == 2) {
          $(this).find(".counter-item").each(count);
          $(this).find(".counter-title").removeClass('counter-item')

          function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options)
          }
        } else {
          $('.counter-title').text("0")
          $('.counter-title').addClass('counter-item')
        }
      },
      onLeave: function (index, direction) {

      },





    });


    function autoScrolling() {
      if ($ww < 1281) {
        $.fn.fullpage.setAutoScrolling(false);
      } else {
        $.fn.fullpage.setAutoScrolling(true);
      }
    }
    $(window).resize(function () {
      autoScrolling();
    });
    autoScrolling();
  }




})

if ($(".slider_banner ").length) {

  $(".slider_banner .video_control").click(function () {
    $(this).siblings("video")[0].play()
    // $(this).siblings("video").attr("controls","true")
    $(this).addClass("active")
  })


  var video = document.getElementById('myVideo');

  function startStream() {
    var streamUrl = 'your_stream_url';
    video.src = streamUrl;
    video.play();
  }

  video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.play();
  });

}




$(function () {
  // ie8
  if (!$.support.leadingWhitespace) {
    $('.index_adv').find('.counter-item').each(function () {
      $(this).html($(this).data('to'))
    })
  } else {
    $('.counter-title').data('', {
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
      }
    });
    $(window).scroll(function () {
      if ($(".scoll_num").length > 0) {
        $(".scoll_num").each(function () {
          let num = $(this).offset().top - 400
          if ($(window).scrollTop() > num) {
            $(this).find(".counter-item").each(count);
            $(this).find(".counter-title").removeClass('counter-item')
          }
        })
      }
    });

    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options)
    }
  }

})

var honors_right_swiper = new Swiper('.honors_right_swiper', {
  slidesPerView: 2.5,
  loop: true,
  centeredSlides: true,
  direction: "vertical",
  autoplay: true,
  // controller: {
  //   control: honors_left_swiper,
  // },
  spaceBetween: 123,
  pagination: {
    el: '.honors_right .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.honors_left_control .banner_button_next',
    prevEl: '.honors_left_control .banner_button_prev',
  },
  on: {
    init: function () {
      var total = this.slides.length - 4;
      if (total >= 10) {
        $(".swiper-num .total").text(total);
      } else {
        $(".swiper-num .total").text("0" + total);
      }

      this.emit("setTransition")
    },
    setTransition: function () {
      var index = this.realIndex + 1;
      if (index >= 10) {
        $(".swiper-num .active").text(index)
      } else {
        $(".swiper-num .active").text("0" + index)
      }

    }
  },
  breakpoints: {
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

var honors_left_swiper = new Swiper('.honors_left_swiper', {
  slidesPerView: "auto",
  spacebetween: 50,
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  direction: "vertical",
  autoplay: true,
  mousewheel: true,
  navigation: {
    nextEl: '.honors_left_control .banner_button_next',
    prevEl: '.honors_left_control .banner_button_prev',
  },
  thumbs: {
    swiper: honors_right_swiper,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5
    },
    950: {
      slidesPerView: 5,
      spacebetween: 10,
    },
    768: {
      slidesPerView: 3,
      spacebetween: 10,
    },
  }
});





$(".quality_main .quality-container").eq(1).addClass("active")
$(".quality_main .quality-container").each(function () {
  effect = 2
  qualityswiper = new Swiper($(this), {
    loop: true,
    speed: 1200,
    slidesPerView: "auto",
    // spaceBetween: 30,
    centeredSlides: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    on: {
      setTranslate: function () {
        slides = this.slides
        var windowHeights = $(window).width()
        for (i = 0; i < slides.length; i++) {
          slide = slides.eq(i)
          var slideProgress = this.slides[i].progress;
          progress = slides[i].progress
          const modify = 1
          slide.css({
            'opacity': '',
            'background': ''
          });
          slide.transform('');
          if (effect == 2) {
            // slide.css('opacity',(1-Math.abs(progress)/6));
            // slide.transform('translateY('+ -Math.abs(progress)*60+'px)');  
            //   translateX = (95 - 40 * Math.abs(progress)) * num
            // // translateZ = 40 + 20 * Math.abs(progress)
            // rotateY = 27 * num
            // slide.transform('translateX(' + translateX + 'px) rotateY(' + rotateY + 'deg)');
            // slide.transform('translate3d(0,' + Math.abs(progress) * 20 + 'px, 0) rotateY(' + rotateYs + ')');
            translate = progress * modify * 10 + 'px';
            scale = 1.64 - Math.abs(progress) / 10;
            rotateYs = 30 * progress;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            // slide.transform('translate3d(0,' + Math.abs(progress) * 8.5 + 'px, 0) rotateY(' + rotateYs + ')');
            slide.transform('translateX(' + translate + ') scale(' + scale + ') rotateY(' + rotateYs + 'deg' + ')');
            slide.css('zIndex', zIndex);
            // slide.css('opacity', 1);

          }
          if (Math.abs(slideProgress) < 1) {
            translate = -83 + 'px';
            slide.css('opacity', 0.8);
            slide.transform('translateX(' + translate + ') scale3d(1.2,1.2,1) rotateY(' + rotateYs + 'deg' + ')');
          }
          if (1 < Math.abs(slideProgress) < 3) {
            translate = -83 + 'px';
            slide.css('opacity', 0.8);
            slide.transform('translateX(' + translate + ') scale3d(1.58,1.14,1) rotateY(' + rotateYs + 'deg' + ')');
          }
          if (Math.abs(slideProgress) > 2) {
            slide.css('opacity', 0.8);
            translate = 27 + 'px';
            scaleX = 1.105;
            rotateYs = 45;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scaleX(' + scaleX + ') rotateY(' + rotateYs + 'deg' + ')');
          }

          if (Math.abs(slideProgress) > 2) {
            slide.css('opacity', 0.4);
          }
          if (Math.abs(slideProgress) > 3.25 && windowHeights > 1195) {
            slide.css('opacity', 0);
          } else if (Math.abs(slideProgress) > 2.25 && windowHeights < 1195) {
            slide.css('opacity', 0);
          }





        }
      },
      setTransition: function (transition) {
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i)
          slide.transition(transition);
        }
      },
    },
    breakpoints: {

      // 950: {
      //   slidesPerView: 3,
      // },
      // 480: {
      //   slidesPerView: 1.32,
      // },
    },

    navigation: {
      nextEl: $(this).children().find('.quality-button-next'),
      prevEl: $(this).children().find('.quality-button-prev'),
    },

  });
})

$(".index_quali .quali_top article").eq(1).addClass("active")
$(".quali_top ul li").click(function () {
  var num = $(this).index()
  $(this).addClass("active").siblings().removeClass("active")
  $(".quality_main .quality-container").eq(num).addClass("active").siblings().removeClass("active")

    $(".index_quali .quali_top article").eq(num).addClass("active").siblings().removeClass("active")
})


$(".happen_main .happen_swiper_fh").each(function () {
  var index_happen_swiper = new Swiper($(this).children(".index_happen_swiper"), {
    // slidesPerView: "auto",
    slideToClickedSlide: true,
    slidesPerView: 3.9,
    loop: true,
    spaceBetween: 30,
    loopedSlides: 10,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: $(this).children().find(".banner_button_next"),
      prevEl: $(this).children().find(".banner_button_prev"),
    },
    breakpoints: {
      1440: {
        slidesPerView: 3.3
      },
      1024: {
        slidesPerView: 2.3
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
})


//   var index_happen_swiper = new Swiper(".index_happen_swiper", {
//     // slidesPerView: "auto",
//     slideToClickedSlide: true,
//     slidesPerView: 3.9,
//     loop: true,
//     spaceBetween: 30,
//     loopedSlides: 10,
//     // observer: true,
//     // observeParents: true,
//     navigation: {
//       nextEl: ".happen_swiper_fh .banner_button_next",
//       prevEl: ".happen_swiper_fh .banner_button_prev",
//     },
//     breakpoints: {
//       1440: {
//         slidesPerView: 3.3
//       },
//       1024: {
//         slidesPerView: 2.3
//       },
//       768: {
//         slidesPerView: 2
//       },
//       480: {
//         slidesPerView: 1,
//         spaceBetween: 10
//       }
//     }
//   });


























var iclick_index = 0





// $(".happen_main .banner_button_next,.happen_main .banner_button_prev").click(function () {

//         /**** event *****/

//  if(iclick_index <=4){

//   let  diyChangeWindowResize = () =>{

//       if(document.createEvent) {

//         let event = document.createEvent("HTMLEvents");

//         event.initEvent("resize", true, true);

//         window.dispatchEvent(event);

//       } else if(document.createEventObject) {

//         window.fireEvent("onresize");

//       }

//     }
//     /****init*****/
//     diyChangeWindowResize()

//  }

//     iclick_index++

// })



$(".happen_title ul li").click(function () {
  var num = $(this).index()
  $(this).addClass("active").siblings().removeClass("active")
  $(".happen_main .happen_swiper_fh").eq(num).addClass("active").siblings().removeClass("active")

})


$(".index_happen_swiper li").hover(function () {
  $(this).addClass("active").removeClass("nontouch").siblings().removeClass("active").addClass("nontouch")
}, function () {
  $(this).removeClass("nontouch").siblings().removeClass("nontouch")

})


$(".happen_main .happen_swiper_fh").eq(0).addClass("active")

$(function () {
  $(".index_happen_swiper .swiper-slide.swiper-slide-active").addClass("active")
})


$(".contact_join .item .control .wrap_btn").click(function () {
  $(this).parents(".item").toggleClass("active").siblings().removeClass("active")
  $(this).parents(".item").find(".wrap").slideToggle(300)
  return false
})




$(function(){


  if ($("#location-map-canvas").length) {
    $("#location-map-canvas div[role='button']").click(function () {
      let num = $(this).index() - 1
      $(".contact_map .map_list>li").eq(num).addClass("active").siblings().removeClass("active")
    })

    $(".contact_map .map_list>li").click(function () {
      let num = $(this).index()
      $(this).addClass("active").siblings().removeClass("active")
      $("#location-map-canvas div[role='button']").eq(num).trigger("click")
    })

    $(".contact_map .map_list>li").eq(0).trigger("click")

  }

})

$(".wrap_show").click(function () {

})



var excell_wrap = new Swiper('.excell_wrap', {
  slidesPerView: 4,
  spaceBetween: 58,
  loop: true,
  navigation: {
    nextEl: '.excell_next',
    prevEl: '.excell_prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    950: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  }
});




var content_swiper = new Swiper('.content_swiper', {
  slidesPerView: 3,
  spaceBetween: 9,
  loop: true,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loopedSlides: 10,
  speed: 3500,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  }
});


if ($(".content_swiper").length) {
  var con_pro_trans = ""
  content_swiper.el.onmouseover = function () {
    con_pro_trans = Math.abs(Math.abs(content_swiper.getTranslate()) - Math.abs(content_swiper.translate)) / (content_swiper.width / 3) * content_swiper.params.speed;
    content_swiper.autoplay.stop();
    content_swiper.setTranslate(content_swiper.getTranslate());
  }
  content_swiper.el.onmouseout = function () {
    content_swiper.slideTo(content_swiper.activeIndex, con_pro_trans)
    content_swiper.autoplay.start();
  }
}


$(function () {
  if ($(".contact_join").length) {
   // $(".contact_join .item").eq(0).find(".wrap_btn").trigger("click")
    joinMore("1")
  }
  $(".page_list ul li a").bind("click touch", function () {
    $('html,body').animate({
      scrollTop: ($($(this).attr('href')).offset().top - 90)
    }, 800);
    return false;
  });

  if ($(".page_list").length) {
    let max = $(".list_side").length - 1
    $(window).scroll(function () {
      let num = $(".page_list").offset().top
      if ($(window).scrollTop() > num) {
        $(".page_list").addClass("active")
      } else {
        $(".page_list").removeClass("active")
      }

      $(".page_wrap .list_side").each(function (index) {
        let line = $(this).offset().top - 150
        if (index == max) {
          if ($(window).scrollTop() > line && $(window).scrollTop()) {
            $(".page_list ul li").eq(index).addClass("active").siblings().removeClass("active")
          }
        } else {
          if ($(window).scrollTop() > line && $(window).scrollTop() < $(".page_wrap .list_side").eq(index + 1).offset().top) {
            $(".page_list ul li").eq(index).addClass("active").siblings().removeClass("active")
          }
        }


      })
    });

  }

  if ($(".auto_video").length) {
    $(window).scroll(function () {
      $(".auto_video").each(function (index) {
        let num = $(this).offset().top - 400
        if ($(window).scrollTop() > num) {
          $(this).find("video").get(0).play()
        }
      })
    });
  }

})




$(".contact_join .join_tit li").click(function () {
  $(this).addClass("active").siblings().removeClass("active")
  let num = $(this).attr("data-value")
  let page = 1
  joinAjax(num, page)
})

$(".contact_join .join_pages a").click(function () {
  let num = $(".contact_join .join_tit .active").attr("data-value")
  let page = $(this).attr("value")
  joinAjax(num, page)
})


$(".contact_dow .more").click(function () {
  let num = $(this).attr("data-value")
  joinMore(num)

})

// var excell_wrap = new Swiper('.excell_wrap', {
//   slidesPerView: 3.4,
//   spaceBetween: 7,
//   loop: true,
//   navigation: {
//     nextEl: '.excell_next',
//     prevEl: '.excell_prev',
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     950: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//   }
// });


var auto_swiper = [];

if ($('.auto_swiper').length > 0) {

  $('.auto_swiper').each(function () {
    var _this = $(this);
    var swiper = new Swiper(_this, {
      slidesPerView: 3.4,
      spaceBetween: 7,
      loop: true,
      speed: 1000,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        950: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }
    });
    auto_swiper.push(swiper)
  })

}


$('.service_detail .auto_left').click(function () {
  let curIdx = $(this).parents('.item').index();
  auto_swiper[curIdx].slidePrev();
})
$('.service_detail .auto_right').click(function () {
  let curIdx = $(this).parents('.item').index();
  auto_swiper[curIdx].slideNext();
})


function joinMore(num) {

  var data_arr = {
    "paged": num
  }
  data_arr = JSON.stringify(data_arr)
  $.ajax({
    type: "POST",
    url: '/wp-admin/admin-ajax.php?action=download_info',
    async: false,
    data: data_arr,
    dataType: "json",
    success: function (data) {
      if (num != 1) {
        $(".contact_dow ul").append(data.data.html)
      }
      if (data.data.page == true) {
        line = parseInt(num) + 1
        $(".contact_dow .more").attr("data-value", line)
        $(".contact_dow .more").show()
      } else {
        $(".contact_dow .more").hide()
      }
    },
    error: function (data) {}

  })

}


function joinAjax(num, page) {

  var data_arr = {
    "num": num,
    "paged": page
  }
  data_arr = JSON.stringify(data_arr)
  $.ajax({
    type: "POST",
    url: '/wp-admin/admin-ajax.php?action=job_info',
    async: false,
    data: data_arr,
    dataType: "json",
    success: function (data) {
      $(".join_wrap .wrap_box").remove()
      $(".join_wrap").append(data.data)

      $(".contact_join .join_pages a").click(function () {
        let num = $(".contact_join .join_tit .active").attr("data-value")
        let page = $(this).attr("value")
        joinAjax(num, page)
      })

      $(".contact_join .item .control .wrap_btn").click(function () {
        $(this).parents(".item").toggleClass("active").siblings().removeClass("active")
        $(this).parents(".item").find(".wrap").slideToggle(300)
        return false
      })
      
      $(".contact_join .item .control .wrap_show").click(function () {
          let num = $(".join_tit .active").attr("data-value")
          $(".talent_form .dow_form").eq(num).show().siblings().hide()
          $(".talent_form").show(300)

          return false
      })


    },
    error: function (data) {}

  })

}



$(".contact_join .item .control .wrap_show").click(function () {
            let num = $(".join_tit .active").attr("data-value")
          $(".talent_form .dow_form").eq(num).show().siblings().hide()
          $(".talent_form").show(300)
  return false
})

var link = ""
$(".contact_dow li a").click(function () {
  var data = sessionStorage.getItem('key');
  if(data != 'true'){
    $(".download_form").show(300)
    link = $(this).attr("href")
    return false
  }
})

if (typeof MauticFormCallback == 'undefined') {
    var MauticFormCallback = {};
}
MauticFormCallback['honglidadownload'] = {
    onResponse: function (response) {
        if(response.success == 1)
        {
            sessionStorage.setItem('key', 'true');
            $(".download_form").hide(300)
           /* window.open(link,"_blank")*/
        }else{
            alert(2)
        }
    },
};
    

$(".close_btn,.dow_close").click(function () {
  $(".hrt_frame").hide(300)
})



var compe_wrap = new Swiper('.compe_wrap', {
  slidesPerView: 1,
});




var lab_wrap = new Swiper('.lab_wrap', {
  slidesPerView: 1,
  on: {
    init: function () {
      var total = this.slides.length;
      $('.swiper-num .total').text('0' + total);
      this.emit('slideChangeTransitionStart');
    },
    slideChangeTransitionStart: function () {
      var index = this.realIndex + 1;
      let num = this.realIndex
      $(".swiper-num .active").text("0" + index);
      $(".over_laboratory .left>ul>li").eq(num).find("h2").trigger("click")
    }
  }
});



$(".over_laboratory .left li h2").click(function () {
  $(this).parent().addClass("active").siblings().removeClass("active")
  $(this).siblings().slideDown(300)
  $(this).parent().siblings().find("ul").slideUp(300)

  let num = $(this).parent().index()
  lab_wrap.slideTo(num)
})

if ($(".lab_wrap").length) {
  $(".over_laboratory .left>ul>li").eq(0).find("h2").trigger("click")
}


var workshop_wrap = new Swiper('.workshop_wrap', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.works_right',
    prevEl: '.works_left',
  },
  on: {
    init: function () {
      var total = this.slides.length;
      $('.swiper-num .total').text(total);
      this.emit('slideChangeTransitionStart');
    },
    slideChangeTransitionStart: function () {
      var index = this.realIndex + 1;
      let num = this.realIndex
      $(".swiper-num .active").text( index);
      $(".over_laboratory .left>ul>li").eq(num).find("h2").trigger("click")
    }
  }
});


var app_wrap = new Swiper('.plate_display .display_wrap', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 3500,
  spaceBetween: 9,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    950: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  }
});


if ($(".plate_display .display_wrap").length) {
  var con_pro_trans = ""
  app_wrap.el.onmouseover = function () {
    con_pro_trans = Math.abs(Math.abs(app_wrap.getTranslate()) - Math.abs(app_wrap.translate)) / (app_wrap.width / 4) * app_wrap.params.speed;
    app_wrap.autoplay.stop();
    app_wrap.setTranslate(app_wrap.getTranslate());

  }
  app_wrap.el.onmouseout = function () {
    app_wrap.slideTo(app_wrap.activeIndex, con_pro_trans)
    app_wrap.autoplay.start();
  }
}


$(".new_scroll .btn").click(function(){
    $(".new_scroll").toggleClass("active")
})


$(".new_scroll .wrap").click(function(){
   var webTop = $('.foot_top ').offset().top - 80
    $("html, body").animate({
      scrollTop: webTop
    }, 1000);
})



$(function(){ 
$('.language-flag-zh').insertBefore('.language-flag-en');      
})


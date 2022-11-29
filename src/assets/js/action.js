;export function setSelectPicker() {
  $('.selectpicker').selectpicker();
}

var $ = require('./jquery-3.6.0.min')

export function refreshSelectPicker() {
  $('.selectpicker').selectpicker('refresh');
}

export function changeDatePicker(selector, lang) {
  $(selector).datepicker({language: lang});
}


export function closeMenuAccount() {
  console.log('close menu')
  $("#accountClick").dropdown('toggle');
}

export function rerunMenuJs() {
  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el,
          $this = $(this),
          $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      // if (!e.data.multiple) {
      //   $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      // };
    }

    var accordion = new Accordion($('#accordionCustom'), true);
  });

  $(document).ready(function () {
    for (const child of $('.child-menu')) {
      if ($(child).hasClass('active')) {
        $(child).parent().parent().parent().addClass('active');
      }
    }
  })

  $('.link.single-link').on('click', function (e) {
    $('.menu-item_custom').removeClass('active')
  })

  $('.child-menu').on('clic`k', function (e) {
    $('.menu-item_custom').removeClass('active')
    $(this).parent().parent().parent().addClass('active');
  })

  $("#navbarAdmin").addClass("hide-scrollbar");
  $('#navbarAdmin').scroll(function () {
    $("#navbarAdmin").removeClass("hide-scrollbar");
    clearTimeout(scrollbarTimeout);
    scrollbarTimeout = setTimeout(function () {
      $("#navbarAdmin").addClass("hide-scrollbar");
    }, 500);
  });

  $(window).click(function () {
    $('ul.submenu-custom').removeClass('open-child')
  });

  $('.vertical_nav__minify .menu-item_custom').click(function (event) {
    event.stopPropagation();
  });

  $('.vertical_nav__minify .menu-item_custom').on('click', function (e) {
    $('ul.submenu-custom').removeClass('open-child')
    var $this = $(this)
    $this.children('ul.submenu-custom').toggleClass('open-child')
  })

  $('.single-link.link').on('click', function () {
    document.querySelector('.vertical_nav').classList.remove('vertical_nav__opened');

  });

  $('.child-menu').on('click', function () {
    document.querySelector('.vertical_nav').classList.remove('vertical_nav__opened');

  });


  // window.onclick = function() {
  //   $('ul.submenu-custom').removeClass('open-child')
  // }
}

export function rerunMenuSalePageJs() {
  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el,
          $this = $(this),
          $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      // if (!e.data.multiple) {
      //   $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      // };
    }

    var accordion = new Accordion($('#accordionCustom'), true);
  });

}

var scrollbarTimeout;

export function initAdminNav(){
  if ($('#navigation a').hasClass('active')) {
    $(this).parent().addClass('active');
  }

  $('#navbarAdmin').scroll(function () {
    $("#navbarAdmin").removeClass("sidebar-hidden");
    clearTimeout(scrollbarTimeout);
    scrollbarTimeout = setTimeout(function () {
      $("#navbarAdmin").addClass("sidebar-hidden");
    }, 500);
  });
}

export function reRunTabControl() {
  $.when($.ready).then( () => {
    document.getElementById('slideRight').onclick = function () {
      var leftPos = $('.nav-tabs').scrollLeft();
      $(".nav-tabs").animate({scrollLeft: leftPos + 150}, 120);
    };

    document.getElementById('slideLeft').onclick = function () {
      var leftPos = $('.nav-tabs').scrollLeft();
      $(".nav-tabs").animate({scrollLeft: leftPos - 150}, 120);
    };

    (function ($) {
      $.fn.hasScrollBar = function () {
        if(!this.get(0)?.scrollWidth){
          return
        }
        return this.get(0).scrollWidth > this.width();
      }
    })(jQuery);

    if ($('.nav-tabs').hasScrollBar()) {
      $('.nav-icon').show()
      $('.scroll-tab').addClass("pr-4")
      $('.scroll-tab').addClass("pl-4")
    } else {
      $('.nav-icon').hide()
      $('.scroll-tab').removeClass("pr-4")
      $('.scroll-tab').removeClass("pl-4")
    }

    $(window).resize(function () {
      if ($('.nav-tabs').hasScrollBar()) {
        $('.nav-icon').show()
        $('.scroll-tab').addClass("pr-4")
        $('.scroll-tab').addClass("pl-4")
      } else {
        $('.nav-icon').hide()
        $('.scroll-tab').removeClass("pr-4")
        $('.scroll-tab').removeClass("pl-4")
      }
    })
  })

}

export function focusEditor() {
  $('.ql-editor').on('focus', function () {
    $($(this).parent().parent().children()[0]).addClass('p-editor-focus')
    $($(this).parent().parent().children()[1]).addClass('p-editor-focus_end')
  });

  $('.ql-editor').on('blur', function () {
    $($(this).parent().parent().children()[0]).removeClass('p-editor-focus')
    $($(this).parent().parent().children()[1]).removeClass('p-editor-focus_end')
  });
}

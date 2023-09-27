$(function(){
    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime : 1500,
        // Размер шага в пикселях
        stepSize : 50,
      
        // Дополнительные настройки:
      
        // Ускорение
        accelerationDelta : 30,
        // Максимальное ускорение
        accelerationMax : 2,
      
        // Поддержка клавиатуры
        keyboardSupport : true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll : 50,
      
        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm : true,
        pulseScale : 4,
        pulseNormalize : 1,
      
        // Поддержка тачпада
        touchpadSupport : true
    })
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/icons/arrow-right.svg" alt=""></img>',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/icons/arrow-left.svg" alt=""></img>',
        asNavFor: '.slider-dotshead'
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        focusOnSelect: true,
        arrows: false,
        asNavFor: '.header__slider'
    });

    $('.slider__map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.surf__slider',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode: true
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          }
        ]
    })

    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/icons/arrow-right.svg" alt=""></img>',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/icons/arrow-left.svg" alt=""></img>',
        asNavFor: '.slider__map',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          }
        ]
    });

    $('.holder__slider').slick({
        infinite: true,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/icons/arrow-right.svg" alt=""></img>',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/icons/arrow-left.svg" alt=""></img>',
    });

    $('.shop__slider').slick({
      infinite: true,
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/icons/arrow-right.svg" alt=""></img>',
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/icons/arrow-left.svg" alt=""></img>',
  });

    $('<div class="quantity-nav"><div class="quantity-button quantity-down"><img src="./images/icons/minus.svg" alt=""></div><div class="quantity-button quantity-up"><img src="./images/icons/plus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.quests').val() - 1) * $('.summ').data('quests');
    $('.summ').html('$ '+ summ);

    // изменение цены при клике для каждого слайда
    $('.quantity').on('click', function() {
        var parents = $(this).parents('.slick-current');
        let summ = $('.nights', parents).val() * $('.summ', parents).data('nights') + ($('.quests', parents).val() - 1) * $('.summ', parents).data('quests');
        $('.summ', parents).html('$ '+ summ);
    });

    $('.surfboard-box__circle').on('click', function(){
      if($('.surfboard-box__circle').hasClass('active')){
        $('.surfboard-box__circle').removeClass('active')
      };
      $(this).toggleClass('active')
    });

    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('active');
    });

    new WOW().init();

    $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    anchors: ['top', 'surf', 'travel', 'sleep', 'shop'],
    menu: '#menu'
  });
});
// Вывод дробной части числа:
// .toFixed(1)
// var parents = $(this).parents('.sleep__slider');
    
    // let summ = ($('.quests', parents).val() * $('.summ', parents).data('nights')) * $('.nights', parents).val();
    // $('.summ', parents).html('$' + summ.toFixed(1));
    
    // // изменение цены при клике для каждого слайда
    // $('.quantity').on('click', function() {
    //     var parents = $(this).parents('.slick-current');
    //     let summ = ($('.quests', parents).val() * $('.summ', parents).data('nights')) * $('.nights', parents).val();
    // $('.summ', parents).html('$' + summ.toFixed(1));
    // })

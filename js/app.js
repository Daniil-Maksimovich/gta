// $('.loader').fadeOut();

// $('.main,.changing-bg, .about-wrapper').fadeIn(100);
// $('body').css('overflow', 'visible')
// $('html').css('overflow', 'visible')

// scrolling to top
// $('html, body').animate({
//   scrollTop: 0
// }, 700);


// jquery mobile

if (window.innerWidth <= 1100) {
  const jqueryMobileScript = $('<script></script>').attr('src', './js/jquery.mobile.min.js');
  $('body').append(jqueryMobileScript);
}


// main music

$('.menu__volume img').on('click', function () {
  if ($(".main-audio")[0].paused) {
    $(".main-audio")[0].play();
    $(this).attr('src', './img/volume.svg');
  } else {
    $(".main-audio")[0].pause();
    $(this).attr('src', './img/volume-muted.svg');
  }
});


// data base

const data = [{
    vacancy: "ПЛАТФОРМА FACEBOOK",
    name: "tommy vercetti",
    skills: [90, 95, 80, 75, 85, 92],
    hero: "./img/info-hero-1.png",
    bg: "./img/info-bg-1.png",
    text: `
      <p>
        <b>Dear, FACEBOOK </b>
      </p>
      <p>
        Слышал, что ты <b>притащил(а)</b> свой хребет в наш город. 
      </p>
      <p>
        Ну надеюсь <b>башка</b> у тебя <b>на месте</b>, потому что я как раз ищу себе <b>человечка</b> в команду. 
      </p>
      <p>
        <b>Сразу о важном: </b>
      </p>
      <p>
        <b>Бабок дам</b> сколько нужно, для разогрева начнем с <b>пачки зелени.</b> 
      </p>
      <p>
        Бери себя в руки и <b>выходи на глубину</b>, малек. Я тебе в этом <b>помогу</b> 
      </p>
      <p>
        Ответ нужен до <b>завтра</b>. Если решился - черкани номерок
      </p>
    `
  },
  {
    vacancy: "affiliate",
    name: "lance vance",
    skills: [85, 65, 100, 50, 70, 90],
    hero: "./img/info-hero-2.png",
    bg: "./img/info-bg-2.png",
    text: `
      <p>
          <b>Dear, AFFILIATE</b>
      </p>
      <p>
          До меня <b>дошли слухи</b>, что ты замял <b>движуху</b> с Рикардо. И даже <b>без</b> своей <b>пукалки</b>.
      </p>
      <p>
          Я <b>ищу тело</b> для переговоров и <b>привлечения</b> других банд ко мне в <b>партнеры</b>. Думаю,
          ты именно тот, кто мне <b>нужен</b>.
      </p>
      <p>
          <b>Тяни ногу</b> ко мне на <b>виллу</b> в центре города - <b>перетрем</b> о делах. Или <b>оставь цифры</b>,
          моя секретутка тебя <b>наберет</b>.
      </p>
      <p>
          Если че, не ссы. Я <b>за своих</b> людей горой.
      </p>
    `
  },
  {
    vacancy: "платформа tik-tok",
    name: "sonny forelli",
    skills: [95, 85, 35, 60, 65, 60],
    hero: "./img/info-hero-3.png",
    bg: "./img/info-bg-3.png",
    text: `
      <p>
        <b>Dear, TIK-TOK</b>
      </p>
      <p>
        Вижу твои потуги дали <b>результат</b>, и ты наконец-то <b>льешь в плюс</b>.
      </p>
      <p>
        Уже <b>завтра</b> ты будешь работать на меня!
      </p>
      <p>
        Для начала я <b>поднимаю</b> твой месячный <b>бюджет</b> до пачку зеленых бумаг. Но не просто так! Нужно <b>следовать</b>
        некоторым моим <b>правилам</b>.
      </p>
      <p>
        <b>Приноси</b> мне <b>деньги</b>, и я щедро <b>буду</b> ими с тобой <b>делиться</b>.
      </p>
      <p>
        А если нет, то познакомлю тебя с Джонни. Он любит делать колени наизнанку.
      </p>
    `
  },
  {
    vacancy: "платформа google",
    name: "umberto robina",
    skills: [85, 65, 50, 70, 95, 80],
    hero: "./img/info-hero-4.png",
    bg: "./img/info-bg-4.png",
    text: `
      <p>
        <b>Dear, GOOGLE</b>
      </p>
      <p>
        <b>Мне</b> одна стриптизерша <b>нашептала</b>, что ты прошел стажировку в Гугел и <b>узнал лазейки и тонкости</b>.
      </p>
      <p>
        <b>Предлагаю</b> тебе добровольно на меня работать, платить буду как в <b>Калифорнии</b>, плюс <b>за</b> каждого <b>лоха</b> – доплата
        неплоха.
      </p>
      <p>
        Целый ангар сотрудников тебе <b>помогут</b>. <b>Бюджет</b> <b>резиновый</b>, можешь тянуть пока по ногам не брызнет. Но если
        будешь <b>лить</b> в минус – брызнет не только по ногам.
      </p>
      <p>
        Жду, вариантов у тебя аж один. Лучших условий в стране <b>нету</b>.
      </p>
    `
  },
  {
    vacancy: "e-mail specialist",
    name: "phill cassidy",
    skills: [50, 80, 40, 55, 65, 70],
    hero: "./img/info-hero-5.png",
    bg: "./img/info-bg-5.png",
    text: `
      <p>
        <b>Dear, E-MAIL SPECIALIST</b>
      </p>
      <p>
          Мне <b>доложили</b>, что ты ударил мою проститутку. Че, <b>хотел</b>, чтобы из нее <b>пару монет</b>
          выпало?
      </p>
      <p>
          Я <b>пробил</b> чем ты дышишь, и <b>знаю</b>, как тебе возместишь мой ущерб. Долбанутых <b>спамеров
          найти</b> трудно, а у меня <b>есть</b> <b>дельце</b>, которое 100% <b>выгорит</b>.
      </p>
      <p>
          <b>Есть несколько сотен терпил, которым надо залить говна в уши и побольше. Это по
          твоей части.</b>
      </p>
      <p>
          <b>Денег</b> дам, <b>хватит</b> не на одну простую <b>девушку</b>.
      </p>
      <p>
          Жду <b>завтра</b>. Пентхаус самой <b>«жаркой»</b> постройки центра <b>города</b>.
      </p>
    `
  },
  {
    vacancy: "Платформа yandex",
    name: "ken rosenberg",
    skills: [65, 75, 65, 55, 75, 65],
    hero: "./img/info-hero-6.png",
    bg: "./img/info-bg-6.png",
    text: `
      <p>
          <b>Dear, YANDEX</b>
      </p>
      <p>
          Уже давно <b>ищу эксперта</b> по парашке. Если <b>ты</b> таким являешься – <b>будешь</b> достойно
          <b>вознагражден</b>!
      </p>
      <p>
          Я готовлю дело и <b>ищу</b> надежных <b>людей</b> без предрассудков.
      </p>
      <p>
          <b>У меня</b> целый <b>аквариум</b> офисного <b>планктона</b>, который по щелчку пальца <b>будет</b>
          <b>долбить</b> своими сардельками <b>по клавиатуре</b>.
      </p>
      <p>
          И все для того, <b>чтобы ты</b> и я сидели на <b>золотых</b> толчках.
      </p>
    `
  }
];


// progress bar

NProgress.configure({
  parent: '#loader__progress'
});

NProgress.start();

setTimeout(() => {
  NProgress.set(.4);
}, 2000);

setTimeout(() => {
  NProgress.set(.7);
}, 4000);

setTimeout(() => {
  NProgress.set(1);
  $('.loader').fadeOut()
}, 6000);

// loader photos

const loaderPhotos = document.querySelectorAll('.loader__title__img img');
setTimeout(() => {
  $('.loader__title__img img.one').fadeOut();
  $('.loader__title__img img.two').fadeIn();
}, 1500);
setTimeout(() => {
  $('.loader__title__img img.two').fadeOut();
  $('.loader__title__img img.three').fadeIn();
}, 4500);


// changing main content

const changeMainContent = obj => {
  if ($('.info__vacancy').text() !== obj.vacancy) {
    $('.info__vacancy').text(obj.vacancy);
    $('.info__name').text(obj.name);

    skillBars.forEach((bar, index) => {
      $(bar).css('width', obj.skills[index] + '%');
    });
    $('.info__hero, .changing-bg').fadeOut(250);

    setTimeout(() => {
      $('.info__hero img').attr('src', obj.hero);
      $('.changing-bg').attr('src', obj.bg);
      $('.info__hero,.changing-bg').fadeIn(300);
    }, 200);
    $('.info__hero, .changing-bg').fadeOut(250);

    setTimeout(() => {
      $('.info__hero img').attr('src', obj.hero);
      $('.changing-bg').attr('src', obj.bg);
      $('.info__hero,.changing-bg').fadeIn(300);
    }, 200);
    $('.info__text').html(obj.text);
  }
}




// main

const barItems = Array.from(document.querySelectorAll('.main__bar__item'));
const skillBars = Array.from(document.querySelectorAll('.info__skills__item__bar span'));


//scrolling to image

const mainScroll = index => {
  if (window.innerWidth <= 1100) {
    window.removeEventListener('scroll', wheelEvent);
  }
  index = String(index);
  // mached image
  const sc = barItems.filter(item => item.dataset.index === index)[0];
  // mached obj
  const obj = data[+index - 1];
  if (sc) {
    sc.classList.add('active')
    // scrolling to needed image
    // ending scroll animation 

    let dn = $(sc).offset().top - this.innerHeight / 2 + sc.clientHeight / 2;
    if (index === '2') {
      dn = dn + 30
    }
    if (index === '5' && window.innerHeight <= 1100 && window.innerHeight >= 900) {
      dn = dn - 100
    }
    if (index === '6') {
      if (dn) {
        dn = $('.about-wrapper').offset().top - window.innerHeight - 40;
      }
    }

    if (window.innerWidth > 1100) {
      $('html, body').animate({
        scrollTop: dn
      }, 700);
    } else {
      $('html, body').animate({
        scrollTop: dn
      }, 400);
    }

    // changing big image right value

    if (index === '5') {
      $('.info__hero').addClass('big');
    } else {
      $('.info__hero').removeClass('big');
    }

    if (window.innerWidth > 650) {
      changeMainContent(obj);
    }
    if (window.innerWidth > 1100) {
      setTimeout(() => {
        window.addEventListener('wheel', wheelEvent);
      }, 600);
    }

  }
}



let flag = 1;
let scrollFlag = 0;


//scroll to vacancy section

const scrollToVacancySec = () => {
  if (this.pageYOffset < $('.devide').offset().top) {
    window.removeEventListener('scroll', scrollToVacancySec);
    $('.header').first().fadeIn();
    if (window.innerWidth > 1100) {
      $('.info .header').fadeIn();
    }
    mainScroll('6');
    scrollFlag = 1;
    flag = 6;
    if (window.innerWidth <= 1100) {
      pageYOffset = window.pageYOffset
      setTimeout(() => {
        $('html').on('scrollstart', mobileScrollStart);
        $('html').on('scrollstop', mobileScrollStop);
      }, 700);
    } else {
      $('.info .header').fadeIn();
      $('body').css('overflow', 'hidden')
      window.addEventListener('wheel', wheelEvent);
    }
  }
}


// defining where were scrolled

const wheelEvent = (e) => {
  window.removeEventListener('wheel', wheelEvent);
  window.removeEventListener('scroll', scrollToVacancySec);
  barItems.filter(item => item.dataset.index === String(flag))[0].classList.remove('active')
  if (e.deltaY > 0) {
    // down
    flag++;
  } else {
    // up
    scrollFlag === 0 ? scrollFlag : scrollFlag--;
    flag--;
  }
  if (flag < 1) {
    flag = 1;
  } else if (flag >= barItems.length) {
    scrollFlag++;
    flag = barItems.length;
    if (scrollFlag > 1) {
      window.removeEventListener('wheel', wheelEvent);
      $('html, body').animate({
        scrollTop: $('.about-wrapper').offset().top + 5
      }, 1200);
      setTimeout(() => {
        $('body').css('overflow-y', 'visible')

      }, 1200);
      $('.header').first().fadeOut();
      if (window.innerWidth > 1100) {
        $('.info .header').fadeOut();
      }

      setTimeout(() => {
        window.addEventListener('scroll', scrollToVacancySec);
      }, 1500);
      scrollFlag = 0;
      AOS.init();
      return
    }
  }

  mainScroll(flag);
}



// menu items events

$('.menu .menu__item').on('click', function (e) {
  window.removeEventListener('scroll', scrollToVacancySec);
  $('.main__bar__item').removeClass('active');
  $('.main, .changing-bg, .about-wrapper, .header').css('display', 'block');
  $('html').css('overflow', 'visible')
  if (window.innerWidth > 650) {
    $('.info').fadeIn();
  }
  if (window.innerWidth <= 1100) {
    $('body, html').css('overflow-y', 'visible');
    $('html').on('scrollstart', mobileScrollStart);
    $('html').on('scrollstop', mobileScrollStop);
  }
  e.preventDefault();
  $("<audio></audio>").attr({
    'src': './audio/click.mp3',
    'volume': 1,
    'autoplay': 'autoplay'
  }).appendTo("body");
  $('.menu').fadeOut();
  mainScroll(this.dataset.url);
  flag = this.dataset.url;
  if (this.dataset.url === '6') {
    scrollFlag = 1;
  }
});

$(".menu__item").mouseenter(function () {
  if (window.innerWidth > 1100) {
    $("<audio></audio>").attr({
      'src': './audio/hover.mp3',
      'volume': 1,
      'autoplay': 'autoplay'
    }).appendTo("body");
  }
});


// main bar items 

const mainBarItemsScroll = function () {
  if ($(this).hasClass('active')) {
    $('.info__play img')[0].click();
    window.removeEventListener('wheel', wheelEvent);
  } else {
    $('.main__bar__item').removeClass('active');
    mainScroll(this.dataset.index);
    flag = this.dataset.index;
  }
}



// opening vacancy

if (window.innerWidth > 650) {
  $('.info__play img').on('click', function () {
    window.removeEventListener('wheel', wheelEvent);
    $('.header__nav a').addClass('vacancy-open')
    // $('.main__bar').fadeOut(500);
    let {
      innerWidth
    } = window;
    if (innerWidth > 1100) {
      $('.info__skills, .info__scroll, .info__play, .main__scroll, .header .main-title').fadeOut(500);
      $('.main__bar').css('opacity', '0');
      let right = '',
        bigRight = '';
      right = '135%';
      bigRight = '138%';
      setTimeout(() => {
        $('.main__bar').css('z-index', '13');
        if (innerWidth >= 1700) {
          right = '166%';
          bigRight = '175%'
        } else if (innerWidth <= 1700 && innerWidth >= 1400) {
          right = '166%';
          bigRight = '172%';
        } else if (innerWidth <= 1400 && innerWidth >= 1024) {
          right = '166%';
          bigRight = '172%';
        } else if (innerWidth <= 1024 && innerWidth >= 1024) {
          right = '135%';
          bigRight = '138%';
        }

        $('.info__hero').hasClass('big') ?
          $('.info__hero').css('right', bigRight) :
          $('.info__hero').css('right', right);
        $('.info__hero').css('transform', 'scale(1.35)')

      }, 300);
      setTimeout(() => {
        $('.info__text, .header__close').fadeIn(500);
        $('.info__hero img.bg').css('opacity', '0.1')
      }, 1200);
    } else {
      $('.info__skills, .info__scroll, .info__play, .main__scroll, .header .main-title').fadeOut();
      $('.main__bar').css('opacity', '0');

      setTimeout(() => {
        $('.main').css({
          'width': '0',
          'min-width': '0'
        })
      }, 300);
      setTimeout(() => {
        $('.info__text, .header__close').fadeIn();
        $('.info__hero img.bg').css('opacity', '0.1')
      }, 300);
    }

  });
}


// closing vacancy

const closeVacancy = () => {
  $('.header__nav a').removeClass('vacancy-open')
  if (window.innerWidth > 1100) {
    $('.main__bar').css('z-index', '15');
    window.addEventListener('wheel', wheelEvent)
    $('.info__hero').css('right', '0');
    $('.info__hero').css('transform', 'scale(1)')
  }
  $('.info__text, .header__close').fadeOut(500);
  $('.info__hero img.bg').css('opacity', '0')
  setTimeout(() => {
    $('.info__skills, .info__scroll, .info__play, .main__scroll, .header .main-title').fadeIn(500);
    if (window.innerWidth <= 1100 && window.innerWidth >= 650) {
      $('.main').css({
        'width': '250px',
        'min-width': '250px'
      })
      setTimeout(() => {
        $('.main__bar').css('opacity', '1');
      }, 1000);
    } else {
      $('.main__bar').css('opacity', '1');
    }
  }, 600);
}

$('.header__close').on('click', closeVacancy);



// opening menu

$('.header .main-title, .burger__nav .menu__item.home').on('click', function () {
  $('.menu').fadeIn();
  $('.burger__nav').fadeOut();
  $('.burger').removeClass('active');
  if ($(this).hasClass('home') && $(this).hasClass('vacancy-open')) {
    closingMobVacancy(true);
  }
  setTimeout(() => {
    $('body, html').css('overflow', 'hidden');
  }, 500);
  $('html').off('scrollstart', mobileScrollStart);
  $('html').off('scrollstop', mobileScrollStop);
})

// scrolling to anchors

$('.header__nav a, .burger__nav .menu__item:not(.home)').on('click', function (event) {
  event.preventDefault();
  var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
  $('.header, .burger__nav').fadeOut();
  $('.burger').removeClass('active');

  if (this.className.includes('vacancy-open')) {
    if (window.innerWidth > 650) {
      closeVacancy();
      setTimeout(() => {
        $('html, body').animate({
          scrollTop: dn + 38
        }, 1000);
        $('.header__nav a').removeClass('vacancy-open')
      }, 1000);
      setTimeout(() => {
        $('body').css('overflow-y', 'visible')
        window.addEventListener('scroll', scrollToVacancySec);
      }, 2000);
    } else {
      closingMobVacancy(true);
      $('.header').first().fadeOut();
      if (window.innerWidth > 1100) {
        $('.info .header').fadeOut();
      }
      $('html, body').animate({
        scrollTop: dn + 5
      }, 1000);
      setTimeout(() => {
        $('body').css('overflow-y', 'visible')
        window.addEventListener('scroll', scrollToVacancySec);
      }, 1000);
    }
  } else {
    $('html, body').animate({
      scrollTop: dn
    }, 1000);
    setTimeout(() => {
      window.addEventListener('scroll', scrollToVacancySec);
    }, 1000);
  }
  if (window.innerWidth > 1100) {
    window.removeEventListener('wheel', wheelEvent);
    setTimeout(() => {
      $('body').css('overflow-y', 'visible')
    }, 1000);
  } else {
    $('body, html').css('overflow-y', 'visible');
    $('html').off('scrollstart', mobileScrollStart);
    $('html').off('scrollstop', mobileScrollStop);
  }
  AOS.init();
  flag = 6;
  scrollFlag = 0;
});

// burger menu

$('.burger__btn').on('click', function () {
  if ($(this.parentElement).hasClass('active')) {
    $(('.burger__nav')).fadeOut()
    $('body, html').css('overflow-y', 'visible');
  } else {
    $('.burger__nav').fadeIn();
    if (window.innerWidth <= 650) {
      $('body, html').css('overflow-y', 'hidden');
    }
  }
  $('.burger').toggleClass('active');
});
$('.burger__nav .menu__item').on('click', function () {
  $('.main__bar__item').removeClass('active');
  $('.burger').removeClass('active');
  $('.burger__nav').fadeOut();
});

$('.info .burger__btn').on('click', () => {
  $('.header').first().fadeIn();
  const removingHeader = () => {
    $('.header').first().fadeOut();
    $('.header:not(.info .header) .burger__btn').off('click', removingHeader)
  }
  $('.header:not(.info .header) .burger__btn').on('click', removingHeader)
});







let {
  pageYOffset
} = window;

// mobile scroll start 

const mobileScrollStart = () => {
  pageYOffset = window.pageYOffset;
}

// mobile scroll stop 

const mobileScrollStop = () => {
  $('.main__bar__item').removeClass('active');
  $('html').off('scrollstart', mobileScrollStart);
  $('html').off('scrollstop', mobileScrollStop);
  if (pageYOffset > window.pageYOffset) {
    // up
    scrollFlag === 0 ? scrollFlag : scrollFlag--;
    flag--;
  } else {
    //down
    flag++;
  }
  if (flag < 1) {
    flag = 1;
  } else if (flag >= barItems.length) {
    scrollFlag++;
    flag = barItems.length;
    if (scrollFlag > 1) {
      $('html, body').animate({
        scrollTop: $('.about-wrapper').offset().top + 5
      }, 600);
      $('.header').first().fadeOut();
      setTimeout(() => {
        window.addEventListener('scroll', scrollToVacancySec);
      }, 620);
      scrollFlag = 0;
      AOS.init();
      return
    }
  }
  mainScroll(flag);
  pageYOffset = window.pageYOffset;
  setTimeout(() => {
    $('html').on('scrollstart', mobileScrollStart);
    $('html').on('scrollstop', mobileScrollStop);
  }, 300);
}


// tapping on bar images

const selectImageInMobile = function () {
  if ($(this).hasClass('active')) {
    const obj = data[+this.dataset.index - 1];
    changeMainContent(obj);
    $('.burger__nav .menu__item').addClass('vacancy-open')
    $('html').off('scrollstart', mobileScrollStart);
    $('html').off('scrollstop', mobileScrollStop);
    $('.main__bar').css('opacity', '0');
    $('.header:not(.info .header)').fadeOut();
    $('.info').fadeIn();
    $('body, html').css('overflow', 'hidden');
  }
}

//closing vacabcy in mobile 

const closingMobVacancy = flag => {
  $('.main__bar').css('opacity', '1');
  if (flag !== true) {
    $('.header:not(.info .header)').fadeIn();
    setTimeout(() => {
      $('html').on('scrollstart', mobileScrollStart);
      $('html').on('scrollstop', mobileScrollStop);
    }, 500);
  }
  $('.info').fadeOut();
  $('body, html').css('overflow-y', 'visible');
}


// mobile or desktop events

if (window.innerWidth <= 1100) {
  $('body').css('overflow-x', 'hidden');
  $('html').css('overflow-x', 'hidden');
  $('.main__bar__item').on('tap', selectImageInMobile)
  if (window.innerWidth <= 650) {
    $('.header__close').off('click', closeVacancy);
    $('.info .header__close').on('click', closingMobVacancy)
  }
} else {
  window.addEventListener('wheel', wheelEvent);
  mainScroll('1');
  $('.main__bar__item').on('click', mainBarItemsScroll);
}



// loading images 

const images = ['./img/info-bg-1.png', './img/info-bg-2.png', './img/info-bg-3.png', './img/info-bg-4.png', './img/info-bg-5.png', './img/info-bg-6.png', './img/info-hero-1.png', './img/info-hero-2.png', './img/info-hero-3.png', './img/info-hero-4.png', './img/info-hero-5.png', './img/info-hero-6.png', './img/loader-bg-1.png', './img/loader-bg-2.png', './img/loader-bg-3.png', './img/menu.png'];

const invisibleImagesWrapper = $('<div></div>').css('display', 'none');

$(images).each(function () {
  var image = $('<img />').attr('src', this);
  invisibleImagesWrapper.append(image);
});
$('body').append(invisibleImagesWrapper);



//form validation

const inputs = document.querySelectorAll(
  'form input[name="name"], form input[name="phone"]'
);
const submitBtn = document.querySelector('form button[type="submit"]');

const checkInputValidation = () => {
  let flag = false;
  inputs.forEach(input => {
    input.className === 'valid' ?
      flag = true :
      flag = false;
  });
  return flag
}
inputs.forEach(input => {
  input.addEventListener('input', e => {
    const {
      value,
      pattern
    } = e.target;
    value.match(pattern) ?
      e.target.className = "valid" :
      e.target.className = "invalid";

    if (!pattern) {
      if (value.length >= 3) {
        e.target.className = "valid";
      } else {
        e.target.className = "invalid";
      }
    }
    if (checkInputValidation()) {
      submitBtn.disabled = false;
    }
  });
});

const form = document.querySelector('form');
const submitBtnText = $(document.querySelector('form button span'));
const submitBtnImg = $(document.querySelector('form button img'));


// submit form

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // button animation

//     submitBtn.disabled = true;
//     $(submitBtn.parentElement).addClass('disabled');
//     submitBtnText.fadeOut();
//     submitBtnImg.fadeIn();


//     // collecting input values

//     const leadForm = e.target;
//     const leadFormElements = leadForm.elements;
//     // sending data

//     $.ajax({
//         method: $(this).attr('method'),
//         url: $(this).attr('action'),
//         type: "POST",
//         dataType: 'json',
//         data: {
//           name: leadFormElements[0].value,
//           phone: leadFormElements[1].value,
//           telegramm: leadFormElements[2].value,
//           resume: leadFormElements[3].value,
//         }, 

//         // index is for google sheets sheet index

//         success: (res) => {
//           if (res.status) {
//             submitBtnText.fadeIn();
//             submitBtnImg.fadeOut();
//             submitBtnText.text('Спасибо!');
//           } else {
//             submitBtnText.fadeIn();
//             submitBtnImg.fadeOut();
//             submitBtnText.text('Повторите попытку позже');
//           }
//         }
//     });
// });

// function get_name_browser() {
//     // получаем данные userAgent
//     const ua = navigator.userAgent;    
//     // с помощью регулярок проверяем наличие текста,
//     // соответствующие тому или иному браузеру
//     if (ua.search(/Chrome/) > 0) return 'Google Chrome';
//     if (ua.search(/Firefox/) > 0) return 'Firefox';
//     if (ua.search(/Opera/) > 0) return 'Opera';
//     if (ua.search(/Safari/) > 0) return 'Safari';
//     if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
//     // условий может быть и больше.
//     // сейчас сделаны проверки только 
//     // для популярных браузеров
//     return 'Не определен';
// }

// // пример использования
// let browser = get_name_browser();
// alert(browser);
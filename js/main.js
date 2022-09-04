const searchEl = document.querySelector('.search');
const serachInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  serachInputEl.focus();
});

serachInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  serachInputEl.setAttribute('placeholder', '통합검색');
});
serachInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  serachInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(
  function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지요소 숨기기
      //gsap.to(요소, 지속시간, 옵션);
      //gsap.to(badgeEl, 0.6, {
        //opacity: 0,
        //display: 'none'
     // });
      //탑버튼 보이기
      gsap.to('#to-top', 0.2, {
        x: 0
      });
    } else {
      // 배지보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block'
      });
      //탑버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100
      });
    }
  }, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.7 , {
    scrollTo: 0
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5, 
    opacity: 1
  });
});



new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
//new Swiper('.awards .swiper', {
  //autoplay: true,
  //loop: true,
  //spaceBetween: 30,
  //slidesPerView: 5,
  //navigation: {
    //prevEl:'.awards .swiper-prev',
    //nextEl: '.awards .swiper-next' 
  //}
//});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.fa-chevron-down');
let isHidePronotion = false;
let arrowDown = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePronotion = !isHidePronotion
  if (isHidePronotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
  arrowDown = !arrowDown
  if (arrowDown) {
    // 보임처리
    promotionToggleBtn.classList.add('up');
  } else {
    // 숨김처리
    promotionToggleBtn.classList.remove('up');
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작시간
    { //옵션
      y: size,
      repeat: -1, // 무한반복
      yoyo: true, //애니메이션 실행 후 다시 돌아오기
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
      triggerHook: 0.8
    }) 
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 숫자 2021
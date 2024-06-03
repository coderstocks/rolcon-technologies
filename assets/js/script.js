AOS.init({
    duration: 1200,
  })

  $('.product-card').slick({
    dots: false,
    infinite: true,
    centerMode: true,
    arrows: false,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.testimonialsss').slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: false,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  function triple() {
    let toggle = document.body;
    toggle.classList.toggle("product-triple");
  }
  function double() {
    let toggle = document.body;
    toggle.classList.toggle("product-double");
  }
  function cbaler() {
    let toggle = document.body;
    toggle.classList.toggle("product-cbaler");
  }
  function contbaler() {
    let toggle = document.body;
    toggle.classList.toggle("product-cont-baler");
  }
  function fbaler() {
    let toggle = document.body;
    toggle.classList.toggle("product-fbaler");
  }
  function atbaler() {
    let toggle = document.body;
    toggle.classList.toggle("product-atbaler");
  }
  // Shearing Machine
  function horsm() {
    let toggle = document.body;
    toggle.classList.toggle("product-horsm");
  }
  function alism() {
    let toggle = document.body;
    toggle.classList.toggle("product-alism");
  }
  function incsm() {
    let toggle = document.body;
    toggle.classList.toggle("product-incsm");
  }
  // SHredder Machine
  function tsshm() {
    let toggle = document.body;
    toggle.classList.toggle("product-tsshm");
  }
  function ssshm() {
    let toggle = document.body;
    toggle.classList.toggle("product-ssshm");
  }
  function pshm() {
    let toggle = document.body;
    toggle.classList.toggle("product-pshm");
  }
  function ewshm() {
    let toggle = document.body;
    toggle.classList.toggle("product-ewshm");
  }
    // Brequetting Machine
    function bbm() {
      let toggle = document.body;
      toggle.classList.toggle("product-bbm");
    }
    function mbm() {
      let toggle = document.body;
      toggle.classList.toggle("product-mbm");
    }
     // Bobbins
     function wdb() {
      let toggle = document.body;
      toggle.classList.toggle("product-wdb");
    }
    function wdsb() {
      let toggle = document.body;
      toggle.classList.toggle("product-wdsb");
    }
    function wsb() {
      let toggle = document.body;
      toggle.classList.toggle("product-wsb");
    }
    function mb() {
      let toggle = document.body;
      toggle.classList.toggle("product-mb");
    }
     // Drums
     function icd() {
      let toggle = document.body;
      toggle.classList.toggle("product-icd");
    }
    function pcd() {
      let toggle = document.body;
      toggle.classList.toggle("product-pcd");
    }
    function adcsd() {
      let toggle = document.body;
      toggle.classList.toggle("product-adcsd");
    }
    function hdscd() {
      let toggle = document.body;
      toggle.classList.toggle("product-hdscd");
    }
    function mscd() {
      let toggle = document.body;
      toggle.classList.toggle("product-mscd");
    }
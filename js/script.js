(function() {
  function bindCloseModalEvent(modal, buttons, customFn) {
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];

      btn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('open-modal');
        if (customFn)
          customFn();
        }
      );
    }
  }

  function bindOpenModalEvent(modal, buttons, customFn) {
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];

      btn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('open-modal');
        if (customFn)
          customFn();
        }
      );
    }
  }

  function bindModalWindow(windowClass, closeClasses, openClasses) {
    var modal = document.querySelector(windowClass);
    if (!modal)
      return;

    var modalClose = document.querySelectorAll(closeClasses);
    bindCloseModalEvent(modal, modalClose);

    var modalOpen = document.querySelectorAll(openClasses);
    bindOpenModalEvent(modal, modalOpen);
  }

  function bindServices() {
    function resetActive(elements) {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.remove('active');
      }
    }

    var servicesLinks = document.querySelectorAll('.services-group ul li');
    var servicesContent = document.querySelectorAll('.service-info-container .service-info');
    for (var i = 0; i < servicesLinks.length; i++) {
      (function(k) {
        var link = servicesLinks[k];
        var content = servicesContent[k];
        link.addEventListener('click', function(e) {
          e.preventDefault();
          resetActive(servicesLinks);
          resetActive(servicesContent);

          link.classList.add('active');
          content.classList.add('active');
        });
      })(i);
    }
  }

  function bindMap() {
    var mapPopup = document.querySelector('.map-popup');
    if (!mapPopup)
      return;

    var map = null;
    var mapContainer = document.querySelector('.map-popup .map-container');

    var contentBottom = document.querySelector('.content-bottom');
    var mapOpen = document.querySelector('.content-bottom .contacts img');
    bindOpenModalEvent(mapPopup, [mapOpen], function() {
      contentBottom.classList.add('hidden');

      if (map)
        return;

      ymaps.ready(function() {
        map = new ymaps.Map(mapContainer, {
          center: [
            59.938554257894, 30.322479499999993
          ],
          zoom: [16],
          controls: []
        });

        map.behaviors.disable('scrollZoom');
        map.controls.add('zoomControl');

        var placemark = new ymaps.Placemark([
          59.938554257894, 30.322479499999993
        ], {
          hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
        }, {preset: 'islands#redDotIcon'});

        map.geoObjects.add(placemark);
      });
    })

    var mapClose = document.querySelector('.map-popup .exit-btn');
    bindCloseModalEvent(mapPopup, [mapClose], function() {
      contentBottom.classList.remove('hidden');
    })
  }

  function bindSlider() {
    var inputs = document.querySelectorAll('.slider > input');
    if (inputs.length === 0)
      return;

    var prevButton = document.querySelector('.slider .slider-prevnext .icon-prev');
    var nextButton = document.querySelector('.slider .slider-prevnext .icon-next');

    prevButton.addEventListener('click', function(e) {
      e.preventDefault();
      inputs[0].checked = true;
    });

    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      inputs[1].checked = true;
    });
  }

  bindModalWindow('.cta-window', '.cta-window .exit-btn, .cta-window .checkout-btn, .cta-window .continue-btn', '.item .cta-btns .buy-btn')

  bindModalWindow('.hidden-form', '.hidden-form .exit-btn, .hidden-form .submit-zone button', '.contacts .feedback-btn')
  bindServices();
  bindMap();
  bindSlider();
})()

(function() {
  function bindCloseModalEvent(modal, buttons) {
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('open-modal');
      });
    }
  }

  function bindOpenModalEvent(modal, buttons) {
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('open-modal');
      });
    }
  }

  function bindModalWindow(windowClass, closeClasses, openClasses) {
    var modal = document.querySelector(windowClass);
    if (!modal) return;

    var modalClose = document.querySelectorAll(closeClasses);
    bindCloseModalEvent(modal, modalClose);

    var modalOpen = document.querySelectorAll(openClasses);
    bindOpenModalEvent(modal, modalOpen);
  }

  bindModalWindow(
    '.cta-window',
    '.cta-window .exit-btn, .cta-window .checkout-btn, .cta-window .continue-btn',
    '.item .cta-btns .buy-btn'
  )

  bindModalWindow(
    '.hidden-form',
    '.hidden-form .exit-btn, .hidden-form .submit-zone button',
    '.contacts .feedback-btn'
  )

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
        link.addEventListener('click', function (e) {
          e.preventDefault();
          resetActive(servicesLinks);
          resetActive(servicesContent);

          link.classList.add('active');
          content.classList.add('active');
        });
      })(i);
    }

  }

  bindServices();
})()

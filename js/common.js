$(function() {
  $('.cta-window .exit-btn, .cta-window .checkout-btn, .cta-window .continue-btn').click(function() {
    $('.cta-window').hide()
  })

  $('.item .cta-btns .buy-btn').click(function() {
    $('.cta-window').show()
  })
})

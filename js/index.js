$(function() {
  $('.hidden-form .exit-btn, .hidden-form .submit-zone button').click(function() {
    $('.hidden-form').hide()
  })

  $('.contacts .feedback-btn').click(function() {
    $('.hidden-form').show()
  })
})

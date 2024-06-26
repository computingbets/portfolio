'use strict'
console.log('hello')
if (typeof jQuery != "undefined" || === "undefined") {
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-latest.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

//edit
window.onload = function() {
    $(function(){ alert("jQuery + DOM loaded."); });
}
function submitContactForm () {
  console.log('hello')
  var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
  var name = $('#inputName').val()
  var email = $('#inputEmail').val()
  var message = $('#inputMessage').val()
  if (name.trim() == '') {
    alert('Please enter your name.')
    $('#inputName').focus()
    return false
  } else if (email.trim() == '') {
    alert('Please enter your email.')
    $('#inputEmail').focus()
    return false
  } else if (email.trim() != '' && !reg.test(email)) {
    alert('Please enter valid email.')
    $('#inputEmail').focus()
    return false
  } else if (message.trim() == '') {
    alert('Please enter your message.')
    $('#inputMessage').focus()
    return false
  } else {
    $.ajax({
      type: 'POST',
      url: 'submit_form.php',
      data: 'contactFrmSubmit=1&name=' +
        name +
        '&email=' +
        email +
        '&message=' +
        message,
      beforeSend: function () {
        $('.submitBtn').attr('disabled', 'disabled')
        $('.modal-body').css('opacity', '.5')
      },
      success: function (msg) {
        if (msg == 'ok') {
          $('#inputName').val('')
          $('#inputEmail').val('')
          $('#inputMessage').val('')
          $(
            '.statusMsg'
          ).html('<span style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</p>')
        } else {
          $(
            '.statusMsg'
          ).html('<span style="color:red;">Some problem occurred, please try again.</span>')
        }
        $('.submitBtn').removeAttr('disabled')
        $('.modal-body').css('opacity', '')
      }
    })
  }
}

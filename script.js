const apiUrl = 'http://13.60.223.47:1565'

$('#loginBtn').click(() => {
    const username = $('#username').val()
    const password = $('#password').val()

    $.ajax({
        url: `${apiUrl}/login`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username, password }),
        success: () => {
            $('#login').hide()
            $('#main').show()
        },
        error: () => {
            $('#login-error').text('שם משתמש או סיסמה שגויים')
        }
    })
})

$('#sendBtn').click(() => {
    const text = $('#textInput').val()
    $.ajax({
        url: `${apiUrl}/text`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ text }),
        success: () => {
            $('#send-success').text(`"${text}" נשלח`)
        }
    })
})

$('.send-btn').click(function () {
    const text = $(this).data('value')
    $.ajax({
        url: `${apiUrl}/text`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ text }),
        success: () => {
            $('#send-success').text(`"${text}" נשלח`)
        }
    })
})

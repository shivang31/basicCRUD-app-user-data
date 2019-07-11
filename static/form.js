
$(document).ready(function() {

    $('button').on('click', function(event) {

        $.ajax({
            data : {
                firstname : $('#1').val(),
                lastname : $('#2').val(),
                email : $('#3').val(),
                phone : $('#4').val(),
                password : $('#5').val(),
            },
            type : 'POST',
            url : '/add'
        })

        event.preventDefault();

    });


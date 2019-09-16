$(function () {
    var randomAnimations = ['0', 'animated hinge', 'animated rollIn', 'animated jackInTheBox', 'animated lightSpeedIn', 'animated flipInX', 'animated flipInY', 'animated bounceInLeft', 'animated bounceInRight'];
    var animationChoice = Math.floor((Math.random() * 9) + 1);
    var allChecked = 0;
    $('#birthdayAnimation').addClass(randomAnimations[animationChoice]);
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    $("#submitBalloons").on('click', function () {
        var checkedBoxes = 0
        $('.form-check-input').each(function () {
            if ($(this).is(':not(:checked)')) {
                checkedBoxes += 1;    
            }
        });
        console.log(checkedBoxes);
        if (checkedBoxes == 3) {
            $('#noBalloonToast').toast('show');
        }
    });
    $("#allCheckControl").on('click', function () {
        if (allChecked === 0) {
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
                $('#' + this.id + 'Img').css('visibility', 'visible')

                $(this).is(':checked') ?
                    $('#' + this.id + 'Img').removeClass().addClass(' animated zoomInUp') :
                    $('#' + this.id + 'Img').addClass(' animated zoomOutDown')
            });
            allChecked = 1;
        }
        else if (allChecked === 1) {
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);

                $('#' + this.id + 'Img').css('visibility', 'visible')

                $(this).is(':checked') ?
                    $('#' + this.id + 'Img').removeClass().addClass(' animated zoomInUp') :
                    $('#' + this.id + 'Img').addClass(' animated zoomOutDown')
            });
            allChecked = 0;
        }
    });
    $('.form-check-input').on('change', function () {
        $('#' + this.id + 'Img').css('visibility', 'visible')

        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass(' animated zoomInUp') :
            $('#' + this.id + 'Img').addClass(' animated zoomOutDown')
    });
    $('#red').hover(function () {
        $('#birthdayAnimation').css('color', 'red') },
        function () {
            $('#birthdayAnimation').css('color', 'slategray');
        }
    );
    $('#blue').hover(function () {
        $('#birthdayAnimation').css('color', 'blue')
    },
        function () {
            $('#birthdayAnimation').css('color', 'slategray');
        }
    );
    $('#orange').hover(function () {
        $('#birthdayAnimation').css('color', 'orange')
    },
        function () {
            $('#birthdayAnimation').css('color', 'slategray');
        }
    );
});

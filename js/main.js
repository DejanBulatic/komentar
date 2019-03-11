$(document).ready(function () {


//HEADER SEARCH ICON TOGGLER
    $('.search-icon').click(function () {
        $(this).next().slideToggle();
    });
    //BURGER TOGGLER ANIMATION 
    $('.burger').click(function () {
        $(this).toggleClass('active');
    });
    //FILL ELEMENTS DEPENDS OF CATEGORY
    $('[data-category]').each(function () {
        var color = $(this).data('category');
        $(this).find('.category-bg').css('background', color);
        $(this).find('.category-border').css('border-color', color);
        $(this).find('.category-color').css('color', color);
    });
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    //ANIMATION 

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });
    }

    animation();
    $(window).scroll(function () {
        animation();
    });
//OWL CAROUSEL LEAD NEWS

    if ($('.owl-carousel').length > 0) {

        $('.lead-slider').owlCarousel({
            items: 1,
            loop: true,
            mouseDrag: true,
            nav: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            dots: false


        });
    }

// OWL CAROUSEL COMMENTS SLIDER

    if ($('.owl-carousel').length > 0) {

        $('.comments-slider').owlCarousel({
            items: 4,
            loop: true,
            margin: 20,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                }

            }//responsive end



        }); //comments slider end
    }//owl carousel end


//UHVACEN BOT VERTICAL SLICK SLIDER

    $('.vertical-slider-bot').slick({
        autoplay: true,
        slidesToShow: 6,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    });
//QUOTES VERTICAL SLICK SLIDER

    $('.vertical-slider-quotes').slick({
        autoplay: true,
        slidesToShow: 4,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    });




// FORM VALIDATION ----- OSTAVI KONETAR --- IME

    $(function () {
        $(".comments-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                name: {
                    required: true
                },
                message: {
                    required: true
                }




            },
            messages: {
                name: {
                    required: 'Polje Ime je obavezno'
                },

                message: {
                    required: 'Polje je obavezno'
                }


            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });

    

//         GO TO TOP BUTTON


$('.goTopBtn').click(function(){
    $('html, body').animate({scrollTop : 0},800);
});


}); //end document.ready



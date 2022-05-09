$(document).ready(function () {
    $('.rank').slick({
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});
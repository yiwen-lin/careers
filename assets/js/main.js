//about us 左navbar start ==========
// HighLight navbar on scroll 
$(document).ready(function() {
    var group = $("#s-group").position();
    var welfare = $("#s-welfare").position();

    if($(window).innerWidth() <= 769) {
        $('.btn-welfare').click(function() {
            $('html, body').animate({
            scrollTop: welfare.top + 500
            }, 700);
            return false;
        }); 
      }
      else {
        $('.btn-group').click(function() {
            $('html, body').animate({
            scrollTop: group.top + 460
            }, 700);
            return false;
        });
        $('.btn-welfare').click(function() {
            $('html, body').animate({
            scrollTop: welfare.top + 540
            }, 700);
            return false;
        }); 
      }
    
});

// show/hide 
$(window).scroll(function () {
    if($(window).innerWidth() <= 769) {
        let s1top = $('.s1').offset().top -300
        let s2top = $('.s2').offset().top -300
        let box3top = $('.box3').offset().top - window.innerHeight
        if ($(this).scrollTop() > s1top && $(this).scrollTop() < s2top) {
            $('#info').addClass('active')
            $('#welfare').removeClass('active')
            $('.navbar').show(500);
        } else if ($(this).scrollTop() > s2top && $(this).scrollTop() < box3top ) {
            $('#welfare').addClass('active')
            $('#info').removeClass('active')
            $('.navbar').show(500);
        } else {
            $('.navbar').hide(500);
        }
    }
    else {
        let s1top = $('.s1').offset().top - window.innerHeight / 6
        let s2top = $('.s2').offset().top - window.innerHeight / 6
        let box3top = $('.box3').offset().top - window.innerHeight
        if ($(this).scrollTop() > s1top && $(this).scrollTop() < s2top) {
            $('#info').addClass('active')
            $('#welfare').removeClass('active')
            $('.navbar').show(500);
        } else if ($(this).scrollTop() > s2top && $(this).scrollTop() < box3top ) {
            $('#welfare').addClass('active')
            $('#info').removeClass('active')
            $('.navbar').show(500);
        } else {
            $('.navbar').hide(500);
        }
    }
});
//about us 左navbar end ==========

//slide show start ===============
// slick
$('.slickbox--1').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.7,//顯示圖片數量
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '150px',//調整起始位置
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '24px',
            }
        }
    ]
});
$('.slickbox--2').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
//slide show end ===============


//手機版 card：超過50個字以"..."取代
var width = $(window).width();
if (width < 768) {
    var len = 55;
    $(".text-card p").each(function () {
        if ($(this).text().length > len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, len - 1) + "......";
            $(this).text(text);
        }
    });
}
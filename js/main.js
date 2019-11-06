$(document).ready(function () {
    //Handel NavBar When Scroll
    window.addEventListener("scroll", () => {
        if(window.scrollY >= 70) {
            $(".navbar").css({
                width: '100%',
                left: 0
            });
        } else {
            $(".navbar").css({
                width: '90%',
                left: '5%'
            });
        }
    })

    //Transform Toggler Menu To X Mark When Click
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass('close-toggler');
    });

    $(".search-button").on("click", () => {
        $(".search-box").slideToggle()
    })

    //Go To New Stuff When Click On Shop Now Button
    $("#shop-btn").click(function (e) {
        e.preventDefault();
        var moreBtnOffset = $("#new-stuff").offset().top;
        $('html, body').animate({scrollTop: (moreBtnOffset - 50)}, 800);
    });

    //Toggle Aside Links
    $(".arrow-toggle").on("click", function () {
        if($(window).innerWidth() <= 991) {
            $(this).parent().toggleClass('aside-toggle-right');
            $(this).toggleClass('arrow-active-right');
        } else {
            $(this).parent().toggleClass('aside-toggle-left');
            $(this).toggleClass('arrow-active-left');
        }
    });

    //Call Owl Carousel To Show New Stuff Products
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: true,
        responsive:{
            0:{items:1,nav:true},
            600:{items:2,nav:true},
            1000:{items:3,nav:true,loop:true}
        }
    })
    
    //Show Product Details In New Stuff Section
    let DetilsBtns = document.querySelectorAll(".newStuffbtn");
    DetilsBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            $("body").css("overflow", "hidden");
            $(".new-product-details").fadeIn();
            $("#newProductTitle").text($(this).attr("data-title"));
            $("#productImage").attr("src", ($(this).attr("data-image")));
            $("#product-price").text($(this).attr("data-price"));
            $("#product-discription").text($(this).attr("data-desc"));
        })
        
    })
    //Close Overlay Product Details
    $(".close-details").on("click", function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut();
    })

    //Increase/Decrease New Stuff Counter
    let count = 1;
    $(".EncreaseCounter").on("click", () => {
        ++count;
        $('#newCounter').text(count);
    })
    $(".DecreaseCounter").on("click", () => {
        if(count > 1) {
            --count;
            $('#newCounter').text(count);
        }
    })

});
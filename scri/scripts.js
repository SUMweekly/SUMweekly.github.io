
jQuery(window).load(function(){
  var loader_container = jQuery('.loader-container');
    var loader = jQuery('#loader');
    var loader_delay = 100;
    // Loader
    loader_container.delay(loader_delay, function(){
        loader.delay(loader_delay).fadeOut("slow");
    }).fadeOut();
});


jQuery(document).ready(function ($) {


    $(document).width(function (e) {
      if ($(window).width() > 992) {
        $('.modern-menu #site-navigation').removeClass('menu-open');
        $('.modern-menu #primary-menu').hide();
        $('.modern-menu .menu-overlay').removeClass('active');
        $('.menu-toggle').removeClass('active');
      }
    });

    // Init and Decleration.
    var back_to_top = $('.back-to-top');

    var menu_toggle = $('.menu-toggle');
    var dropdown_toggle = $('.main-navigation button.dropdown-toggle');
    var nav_menu = $('.main-navigation ul.nav-menu');

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            back_to_top.css({ bottom: "25px" });
        }
        else {
            back_to_top.css({ bottom: "-100px" });
        }
    });

    back_to_top.click(function (e) {
        e.preventDefault();
        var scroll_speed = bizbuzz.scroll_speed;
        scroll_speed = scroll_speed ? parseInt(scroll_speed ) : 1000;
        $('html, body').animate({ scrollTop: '0px' }, scroll_speed);
        return false;
    });

    // Main Menu
    menu_toggle.click(function () {
        $(this).toggleClass('active');
        $('.main-navigation').toggleClass('menu-open');
        $('.menu-overlay').toggleClass('active');
    });

    var siteNavigationId=null;
    $('body').keyup(function (e) {
        var code = e.keyCode || e.which;

        if (code == '9') {
            navigationFocusChange(e);
        }

    });

    $('body').click(function (e) {
        navigationFocusChange(e);
    });

    function navigationFocusChange(e) {
        if (!siteNavigationId) {
            siteNavigationId = $(e.target).closest('.main-navigation').attr('id');
            return;
        }
        if (siteNavigationId != $(e.target).closest('.main-navigation').attr('id')) {

            nav_menu.hide();
            menu_toggle.removeClass('active');
            $('.main-navigation').removeClass('menu-open');
            $('.menu-overlay').removeClass('active');
            siteNavigationId = null;
        }
    }

    $(document).on( 'click', '.main-navigation button.dropdown-toggle', function() {
        $(this).toggleClass('active');
        $(this).parent().siblings().find('.sub-menu').hide();
        $(this).parent().find('.sub-menu').first().slideToggle();
    } );

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('.modern-menu #site-navigation').removeClass('menu-open');
            $('.modern-menu #primary-menu').hide();
            $('.modern-menu .menu-overlay').removeClass('active');
            $('.menu-toggle').removeClass('active');
        }
    });

    $( ".tag-6" ).append( "<div id=jflm><div id=jflminnerleft><span 1>SUM Co-Founder </span><span 2>+ Graphic / Web Designer </span><span 3>+ Editor</span></div><div id=jflminnerright><span 3><a href=https://instagram.com/jpf__photo data-type=URL>@jpf__photo</a></span><span 5><a href=mailto:james@sumweekly.com data-type=URL>james@sumweekly.com</a></span></div></div>" );
    $( "#jflm" ).insertAfter( ".rt-wrapper .entry-header .entry-title" );

    $( ".tag-15" ).append( "<div id=jflm><div id=jflminnerleft><span 1>SUM Co-Founder </span><span 2>+ Editor</span></div><div id=jflminnerright><span 4>Contact:</span><span 5><a href=mailto:noah@sumweekly.com data-type=URL>noah@sumweekly.com</a></span></div></div>" );
    $( "#jflm" ).insertAfter( ".rt-wrapper .entry-header .entry-title" );

    $( ".tag-22" ).append( "<div id=jflm><div id=jflminnerleft><span 1>SUM Editor</span><span 2>+ Social Media Manager </span><span 3>+ Graphic Designer</span></div><div id=jflminnerright><span 3>IG: <a href=https://www.instagram.com/joellerobinson/ data-type=URL>@joellerobinson</a></span><span 5><a href=mailto:joellerobinson29@gmail.com data-type=URL>joellerobinson29@gmail.com</a></span></div></div>" );
    $( "#jflm" ).insertAfter( ".rt-wrapper .entry-header .entry-title" );


    $( ".category-10" ).append( "<div id=pocstemexp><div id=pocsteminner><p>“The Black Girl”… At one of Europe’s leading scientific institutions, a black female PhD student was informed that some members of staff were referring to her as “The Black Girl”. Although shocking, you could say it was a seemingly logical thing to do, as even with billions of euros in funding and hundreds of staff, she was the only black female in the institution.</p><p>The POC:STEM initiative aims to give a voice to unheard and unseen people of colour undertaking a career in Science, Technology, Engineering or Maths, in an effort to show that the white man in a lab coat isn’t the only one who contributes to the pursuit of knowledge.</p><p>By showcasing the incredible work these people do, SUM hopes to inspire a new generation of STEM peers, while shining a light on the hurdles POC must overcome in order to be successful in their field.</p></div></div>" );
    $( "#pocstemexp" ).insertAfter( "#custom-header-media" );

    $( ".category-10" ).append( "<div id=pocstemexpoverlay><div id=threedots>...</div></div>" );
    $( "#pocstemexpoverlay" ).insertBefore( "#pocstemexp" );


    //var button = document.getElementById("#btn");
    //button.onclick = function () {
    //    var value = document.getElementById("#site-search").value;
    //    newwindow=window.location("sumweekly.com/?s="+value);
    //};


    $( ".menu" ).append('<li class="menu-item menu-item-type-post_type menu-item-object-page headsearchbox"><div class=search-label-wrapper><div id="search-label">SEARCH</div></div><form class="search-wrapper"><input type="search" id="site-search" name="s" aria-label="Search through site content"></input><button type="submit" id="btn"><p></p></button><div class="bottom-line"></div></form></li>');

    $( ".rt-overlay" ).remove()

    $(document).ready(function() {
    var headheight = $('.tag-6 .site #custom-header-media .rt-slider-wrapper .slide-item .rt-wrapper').outerHeight();
    $( ".slide-item" ).css({'height': headheight})
    $( ".slide-item" ).css({'min-height': headheight})
    $( ".slide-item" ).css({'max-height': headheight})
    $( ".rt-slider-wrapper" ).css({'height': headheight})
    $( ".rt-slider-wrapper" ).css({'min-height': headheight})
    $( ".rt-slider-wrapper" ).css({'max-height': headheight})
    $( "#custom-header-media" ).css({'height': headheight})
    $( "#custom-header-media"  ).css({'min-height': headheight})
    $( "#custom-header-media"  ).css({'max-height': headheight})
    })

    $(window).resize(function(){
    var headheight = $('.tag-6 .site #custom-header-media .rt-slider-wrapper .slide-item .rt-wrapper').outerHeight();
    $( ".slide-item" ).css({'height': headheight})
    $( ".slide-item" ).css({'min-height': headheight})
    $( ".slide-item" ).css({'max-height': headheight})
    $( ".rt-slider-wrapper" ).css({'height': headheight})
    $( ".rt-slider-wrapper" ).css({'min-height': headheight})
    $( ".rt-slider-wrapper" ).css({'max-height': headheight})
    $( "#custom-header-media" ).css({'height': headheight})
    $( "#custom-header-media"  ).css({'min-height': headheight})
    $( "#custom-header-media"  ).css({'max-height': headheight})
    })


    $(document).ready(function() {
    var headheight = $('.category.archive .site #custom-header-media .rt-slider-wrapper .slide-item .rt-wrapper').outerHeight();
    $( ".slide-item" ).css({'height': headheight})
    $( ".slide-item" ).css({'min-height': headheight})
    $( ".slide-item" ).css({'max-height': headheight})
    $( ".rt-slider-wrapper" ).css({'height': headheight})
    $( ".rt-slider-wrapper" ).css({'min-height': headheight})
    $( ".rt-slider-wrapper" ).css({'max-height': headheight})
    $( "#custom-header-media" ).css({'height': headheight})
    $( "#custom-header-media"  ).css({'min-height': headheight})
    $( "#custom-header-media"  ).css({'max-height': headheight})
    })

    $(window).resize(function(){
    var headheight = $('.category.archive .site #custom-header-media .rt-slider-wrapper .slide-item .rt-wrapper').outerHeight();
    $( ".slide-item" ).css({'height': headheight})
    $( ".slide-item" ).css({'min-height': headheight})
    $( ".slide-item" ).css({'max-height': headheight})
    $( ".rt-slider-wrapper" ).css({'height': headheight})
    $( ".rt-slider-wrapper" ).css({'min-height': headheight})
    $( ".rt-slider-wrapper" ).css({'max-height': headheight})
    $( "#custom-header-media" ).css({'height': headheight})
    $( "#custom-header-media"  ).css({'min-height': headheight})
    $( "#custom-header-media"  ).css({'max-height': headheight})
    })


    $(".category-10 #pocsteminner p:nth-of-type(1)").attr("id","txtbxone");
    $(".category-10 #pocsteminner p:nth-of-type(2)").attr("id","txtbxtwo");
    $(".category-10 #pocsteminner p:nth-of-type(3)").attr("id","txtbxthree");



  //  $(document).click(function (e) {
    //    var container = $("#masthead");
      //  if (!container.is(e.target) && container.has(e.target).length === 0) {
          //  $('.modern-menu #site-navigation').removeClass('menu-open');
        //    $('.modern-menu #primary-menu').hide();
      //      $('.modern-menu .menu-overlay').removeClass('active');
        //    $('.menu-toggle').removeClass('active');
    //    }
  //  });




$(window).load(function() {
  if($vWidth > 700) {
    var txtboxh = $('.fullheighttxt > p').outerHeight();
    $( ".fullheighttxt" ).css({'height': txtboxh, 'max-height': txtboxh});
    $( ".fullheight .wp-block-column .wp-block-image" ).css({'height': txtboxh, 'max-height': txtboxh});
  }else{};
  });
  $(window).resize(function(){
    if($vWidth > 700) {
        var txtboxh = $('.fullheighttxt > p').outerHeight();
    $( ".fullheighttxt" ).css({'height': txtboxh, 'max-height': txtboxh});
    $( ".fullheight .wp-block-column .wp-block-image" ).css({'height': txtboxh, 'max-height': txtboxh});
  }else{};
  });
$(window).load(function() {
  if($vWidth > 700) {
    var txtboxh2 = $('.fullheighttxt2 > p').outerHeight();
    $( ".fullheighttxt2" ).css({'height': txtboxh2, 'max-height': txtboxh2});
    $( ".fullheight2 .wp-block-column .wp-block-image" ).css({'height': txtboxh2, 'max-height': txtboxh2});
  }else{};
  });
  $(window).resize(function(){
    if($vWidth > 700) {
        var txtboxh2 = $('.fullheighttxt2 > p').outerHeight();
    $( ".fullheighttxt2" ).css({'height': txtboxh2, 'max-height': txtboxh2});
    $( ".fullheight2 .wp-block-column .wp-block-image" ).css({'height': txtboxh2, 'max-height': txtboxh2});
  }else{};
  });




    $(document).ready(function() {
    var headheight = $('.tag .site #custom-header-media .rt-slider-wrapper .slide-item .rt-wrapper').outerHeight();
    $( ".slide-item" ).css({'height': headheight})
    $( ".slide-item" ).css({'min-height': headheight})
    $( ".slide-item" ).css({'max-height': headheight})
    $( ".rt-slider-wrapper" ).css({'height': headheight})
    $( ".rt-slider-wrapper" ).css({'min-height': headheight})
    $( ".rt-slider-wrapper" ).css({'max-height': headheight})
    $( "#custom-header-media" ).css({'height': headheight})
    $( "#custom-header-media"  ).css({'min-height': headheight})
    $( "#custom-header-media"  ).css({'max-height': headheight})
    })

    $(window).resize(function(){
    var headheight = $('.tag .site #custom-header-media .rt-slider-wrapper .slide-item .rt-wrapper').outerHeight();
    $( ".slide-item" ).css({'height': headheight})
    $( ".slide-item" ).css({'min-height': headheight})
    $( ".slide-item" ).css({'max-height': headheight})
    $( ".rt-slider-wrapper" ).css({'height': headheight})
    $( ".rt-slider-wrapper" ).css({'min-height': headheight})
    $( ".rt-slider-wrapper" ).css({'max-height': headheight})
    $( "#custom-header-media" ).css({'height': headheight})
    $( "#custom-header-media"  ).css({'min-height': headheight})
    $( "#custom-header-media"  ).css({'max-height': headheight})
    })

    $(window).resize(function(){
    var slideheight = $('.metaslider .slides').outerHeight();
    $( ".ms-image" ).css({'height': slideheight})
    $( ".ms-image" ).css({'min-height': slideheight})
    $( ".ms-image" ).css({'max-height': slideheight})
    })

    $(window).resize(function(){
    var slideheight = $('.metaslider .slides').outerHeight();
    $( ".ms-image" ).css({'height': slideheight})
    $( ".ms-image" ).css({'min-height': slideheight})
    $( ".ms-image" ).css({'max-height': slideheight})
    })

    $(window).resize(function(){
    var blockheight = $('.home .blog-posts-wrapper #featuredthumb').outerHeight();
    $( ".home .blog-posts-wrapper .entry-title a" ).css({'height': blockheight})
    $( ".home .blog-posts-wrapper .entry-title a" ).css({'min-height': blockheight})
    $( ".home .blog-posts-wrapper .entry-title a" ).css({'max-height': blockheight})
    })

    $(window).resize(function(){
    var blockheight = $('.home .blog-posts-wrapper #featuredthumb').outerHeight();
    $( ".home .blog-posts-wrapper .entry-title a" ).css({'height': blockheight})
    $( ".home .blog-posts-wrapper .entry-title a" ).css({'min-height': blockheight})
    $( ".home .blog-posts-wrapper .entry-title a" ).css({'max-height': blockheight})
    })


    $(window).resize(function(){
    var blockheight = $('.home .blog-posts-wrapper #featuredthumb').outerHeight();
    $( ".home .blog-posts-wrapper #goverlay" ).css({'height': blockheight})
    $( ".home .blog-posts-wrapper #goverlay" ).css({'min-height': blockheight})
    $( ".home .blog-posts-wrapper #goverlay" ).css({'max-height': blockheight})
    })

    $(window).resize(function(){
    var blockheight = $('.home .blog-posts-wrapper #featuredthumb').outerHeight();
    $( ".home .blog-posts-wrapper #goverlay" ).css({'height': blockheight})
    $( ".home .blog-posts-wrapper #goverlay" ).css({'min-height': blockheight})
    $( ".home .blog-posts-wrapper #goverlay" ).css({'max-height': blockheight})
    })

//$('div#divtest').data("css_animation", true); //set the flag

  $(".category-10 #pocstemexp").addClass("pocinfoclosed");

// POC:STEM Info (onload)
$(document).ready(function() {
  if ($(".category-10 #pocstemexp").hasClass("pocinfoclosed")) {
  var poctxt = $('.category-10 #txtbxtwo').outerHeight();
  $(".category-10#pocstemexpoverlay").css({'opacity':'1'});
  $(".category-10 #pocstemexp").css({'height':poctxt+90,'min-height':poctxt+90,'max-height':poctxt+90})
  $(".category-10 #pocstemexp").css({'border':'0px 1px solid gainsboro'})
$( ".category-10 #pocsteminner #txtbxone" ).css({'padding-top':'25px'})
$( ".category-10 #pocsteminner #txtbxthree" ).css({'padding-bottom':'25px'})
$(".category-10 #txtbxone").css({'margin-top':'0px'})
  $(".category-10 #pocsteminner").css({'height':'max-content','min-height':'max-content','max-height':'max-content'})
  var pocstemoverlayh = $('.category-10 #pocstemexp').outerHeight();
  $(".category-10 #pocstemexpoverlay").css({'height':pocstemoverlayh,'min-height':pocstemoverlayh,'max-height':pocstemoverlayh})
  $(".category-10 #threedots").css({'cursor':'pointer'})
  var headheight = $('.category-10 #pocsteminner #txtbxone').outerHeight();
  $(".category-10 #pocsteminner").css({'margin-top':-(headheight-30)})
}
})
//POC:STEM Info (onresize)
$(window).resize(function(){
  if ($(".category-10 #pocstemexp").hasClass("pocinfoclosed")) {
  var poctxt = $('.category-10 #txtbxtwo').outerHeight();
  var headheight = $('.category-10 #pocsteminner #txtbxone').outerHeight();
  $(".category-10 #pocstemexp").css({'height':poctxt+90,'min-height':poctxt+90,'max-height':poctxt+90})
  $(".category-10 #pocsteminner").css({'margin-top':-(headheight-30)})
}
})
  $(window).resize(function(){
    if ($(".category-10 #pocstemexp").hasClass("pocinfoclosed")) {
  var pocstemoverlayh = $('.category-10 #pocstemexp').outerHeight();
  $(".category-10 #pocstemexpoverlay").css({'height':pocstemoverlayh,'min-height':pocstemoverlayh,'max-height':pocstemoverlayh})
}
})



// POC:STEM Dropdown Description Toggle
$(document).ready(function() {
  var pocbuttonclick = false;
    $('.category-10 #pocstemexpoverlay').click(function (e) {
      var txtbxheight = $('.category-10 #pocsteminner').outerHeight();
      var poctxt = $('.category-10 #txtbxtwo').outerHeight();

      if (pocbuttonclick == false) {
        $(".category-10 #pocstemexp").removeClass("pocinfoclosed");



          $(function () {
            $( ".category-10 #pocstemexp" ).animate({
              'height':txtbxheight,'min-height':txtbxheight,'max-height':txtbxheight
            }, { duration:500, queue: false });
            $( ".category-10 #pocstemexpoverlay" ).animate({
              'height':txtbxheight,'min-height':txtbxheight,'max-height':txtbxheight
            }, { duration:500, queue: false });
            $(".category-10 #pocsteminner").css({'margin-top':-(headheight-30)}).animate({'margin-top':'0px'},{duration:500,queue:false}),
            $( ".category-10 #pocstemexpoverlay" ).css({'opacity' : '1'}).animate({'opacity':'0'},{duration:500, queue:false});
          });




          var pocstemexptrue = $('.category-10 #pocstemexp').outerHeight();
          $( ".category-10 #pocstemexpoverlay" ).css({'height':pocstemexptrue,'min-height':pocstemexptrue,'max-height':pocstemexptrue})
        $('div#divtest').data("css_animation", true);
        $(".category-10 #pocstemexp").trigger("pocmenuclosed");
        $(".category-10 #pocstemexp").removeClass("pocinfoclosed");
        return pocbuttonclick = true;

    } if (pocbuttonclick == true) {
          $(".category-10 #pocstemexp").addClass("pocinfoclosed");
          var poctxt = $('.category-10 #txtbxtwo').outerHeight();
          var headheight = $('.category-10 #pocsteminner #txtbxone').outerHeight();

        $(function () {
          $( ".category-10 #pocstemexp" ).animate({
            'height':poctxt+90,'min-height':poctxt+90,'max-height':poctxt+90
          }, { duration:500, queue: false });
          $( ".category-10 #pocstemexpoverlay" ).animate({
            'height':poctxt+90,'min-height':poctxt+90,'max-height':poctxt+90
          }, { duration:500, queue: false });
          $(".category-10 #pocsteminner").css({'margin-top':'0px'}).animate({'margin-top':-(headheight-30)},{duration:500,queue:false}),
          $( ".category-10 #pocstemexpoverlay" ).css({'opacity' : '0'}).animate({'opacity':'1'},{duration:500, queue:false});
        });



        return pocbuttonclick = false;

      }
    });
  });


  $(window).resize(function(){
  if (!$(".category-10 #pocstemexp").hasClass("pocinfoclosed")) {
    var poctxt = $('.category-10 #txtbxtwo').outerHeight();
    var headheight = $('.category-10 #txtbxtwo').outerHeight();
    var txtbxheight = $('.category-10 #pocsteminner').outerHeight();

    $(".category-10 #pocstemexp").css({'height':txtbxheight,'min-height':txtbxheight,'max-height':txtbxheight})
    $(".category-10 #pocstemexpoverlay").css({'height':txtbxheight,'min-height':txtbxheight,'max-height':txtbxheight})
    $(".category-10 #pocsteminner").css({'margin-top':'0px'}).animate({'margin-top':'0px'})
  }
});


//Menu Open Toggle
    $(document).click(function (e) {
        var container = $("#masthead");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.modern-menu #site-navigation').removeClass('menu-open');
            $('.modern-menu #primary-menu').hide();
            $('.modern-menu .menu-overlay').removeClass('active');
            $('.menu-toggle').removeClass('active');
        }
    });

    // Sticky Menu
    var navbarHeight = $('#masthead').height();
    $(window).scroll(function(){
        if($(window).scrollTop() > 32){
            $('.sticky-menu').addClass('stick-at');
        }else{
            $('.sticky-menu').removeClass('stick-at');
        }
    })

    $( '.menu-item-has-children > a' ).after('<button class="dropdown-toggle"><svg viewBox="0 0 129 129"><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"></path></svg></button>' );

    // $('.hentry .entry-header').matchHeight();
    $( 'section#featured-posts article' ).matchHeight();


// target text between metas

$(".home .entry-meta .tags-links a:nth-of-type(1)").attr("id","authorone");
$(".home .entry-meta .tags-links a:nth-of-type(2)").attr("id","authortwo");


// hspan3 arhive height

$(document).ready(function() {
  var headerheight = $(".archive #main .entry-header").outerHeight();
  $(".archive #main .entry-header #hspan3").css({'height':(headerheight-20),'min-height':(headerheight-20),'max-height':(headerheight-20)})
});

$(window).resize(function(){
  var headerheight = $(".archive #main .entry-header").outerHeight();
  $(".archive #main .entry-header #hspan3").css({'height':(headerheight-20),'min-height':(headerheight-20),'max-height':(headerheight-20)})
});


$(document).ready(function() {
  $(".wp-block-video video").addClass("videomedia");
});

$(document).ready(function() {
  $(".wp-block-video figcaption").addClass("videocaption");
});




//$(document).ready(function() {
  //  $(".wp-block-video").append("<div id=videobackdrop></div>");
  //  $( "#videobackdrop" ).insertAfter( ".wp-block-video" );
  //  $( ".videocaption" ).insertAfter( "#videobackdrop" );
//});


$(document).ready(function() {

  // place this within dom ready function
  function showpanel() {
    var videoheight = $(".videomedia").outerHeight();
    var playerboxheight = $(".wp-block-video").outerHeight();
    $("#videobackdrop").css({'height':(videoheight)});
    $("#videobackdrop").css({'margin-top':(- playerboxheight)});
 }

 // use setTimeout() to execute
 setTimeout(showpanel, 1000)
});


$(window).resize(function(){
  var videoheight = $(".videomedia").outerHeight();
  var playerboxheight = $(".wp-block-video").outerHeight();
$("#videobackdrop").css({'height':(videoheight)});
    $("#videobackdrop").css({'margin-top':(- playerboxheight)});
});


$(document).ready(function() {
    var vidwidth = $(".wp-block-video").outerWidth();
    var windwidth = $(window).width();
    $( ".videocaption" ).css({'margin-left:':'10px'});
});

$(window).resize(function(){
    var vidwidth = $(".wp-block-video").outerWidth();
    var windwidth = $(window).width();
    $( ".videocaption" ).css({'margin-left:':'10px'});
});


$(document).ready(function() {
  var vimhei = $("#vimeoyo").outerHeight();
    $( "iframe" ).css({'height':vimhei});
});

 $(window).resize(function(){
   var vimhei = $("#vimeoyo").outerHeight();
 $( "iframe" ).css({'height':vimhei});
});

//fullheight



function checkWidth(){
    $vWidth = $(window).width();
    $('#test').html($vWidth);

    //Check condition for screen width
    if($vWidth > 700){
      $( '.albumart').insertBefore( '.muslink:nth-of-type(1)' );
    }else{$( '.albumart').appendTo( '.albumartcol' );}
}




//aramidecode



$(document).ready(function() {
    checkWidth();
});
$(window).on("resize", function(){
    checkWidth();
});


function checkWidth(){
    $vWidth = $(window).width();
    $('#test').html($vWidth);

    //Check condition for screen width
    if($vWidth > 700 && $vWidth < 1100){
      $( '#aramideparamov').prependTo( '#aramidecolleft' );
    }else{}
    if($vWidth > 1100){
      $( '#aramideparamov' ).appendTo( '#aramidedesc');
    }else{}


    if($vWidth > 700 && $vWidth < 1000){
      $( "#aramideimg6" ).appendTo( "#aramidemaincol .wp-block-column:nth-of-type(2)" );
    }else{}
    if($vWidth > 1000){
      $( "#aramideimg6" ).appendTo( "#aramidecolleft");
    }else{}
    if($vWidth > 700 && $vWidth < 850){
      $( "#aramideimgfinal" ).appendTo( "#aramidemaincol .wp-block-column:nth-of-type(2)");
    }else{}
    if($vWidth > 850){
      $( "#aramideimgfinal" ).appendTo( "#aramidecolleft");
    }else{}

    if($vWidth < 700){
      $( "#aramideimg1" ).insertAfter( "#aramidecol1" );
      $( "#aramideimg2" ).insertAfter( "#aramidept1" );
      $( "#aramideimg3" ).insertAfter( "#aramidept2" );
      $( "#aramideimg4" ).insertAfter( "#aramidept3" );
      $( "#aramideimg5" ).insertAfter( "#aramidept4" );
    }else{
      $( "#aramideimg1" ).appendTo( "#aramidemaincol .wp-block-column:nth-of-type(2)" );
      $( "#aramideimg2" ).appendTo( "#aramidemaincol .wp-block-column:nth-of-type(2)" );
      $( "#aramideimg3" ).appendTo( "#aramidemaincol .wp-block-column:nth-of-type(2)" );
      $( "#aramideimg4" ).appendTo( "#aramidemaincol .wp-block-column:nth-of-type(2)" );
      $( "#aramideimg5" ).appendTo( "#aramidemaincol .wp-block-column:nth-of-type(2)" );
    }
}





//metaslider

jQuery(window).load(function(){
  var slidez = $(".slides").outerHeight();
  var secondsl = slidez / 2;
    $( ".ms-image" ).css({'top' : secondsl});
});

 $(window).resize(function(){
  var slidez = $(".slides").outerHeight();
    var secondsl = slidez / 2;
    $( ".ms-image" ).css({'top' : secondsl});
});


function checkWidth(){
    $vWidth = $(window).width();
    $('#test').html($vWidth);

    //Check condition for screen width
    if($vWidth < 700){
      $( '#tiaar').insertBefore( '.top-image-append-above-right' );
      $( '#biaar').insertAfter( '.bottom-image-append-above-right' );
    }else{
      $( '#tiaar' ).appendTo( '.top-image-append-above-right .wp-block-column:nth-of-type(2)' );
      $( '#biaar' ).appendTo( '.bottom-image-append-above-right .wp-block-column:nth-of-type(2)' );}
}



});

// Video add backdrop

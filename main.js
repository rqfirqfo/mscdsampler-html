$(document).ready(function(){
    var startVideo = $('#start-video')[0];
    var backgroundAudio = $('#audio-thingy')[0];
    var container = $('.container');
    var categories = $('.category');

    startVideo.play();

    // remove this if finished
    $('.disclaimer-text').click(function(){
        stopStartup();
    });

    startVideo.onended = function(e) {
        startVideo.src = "video/intro.mp4";
        startVideo.load();
        startVideo.play();
        $('.disclaimer-text').css('display', 'none');
        $('.skip-text').css('display', 'block');

        $('.skip-text').click(function(){
            stopStartup();
        });

        startVideo.onended = function(e) {
            stopStartup();
        }
    };
        
    function stopStartup() {
        startVideo.pause();
        backgroundAudio.play();
        startVideo.src = "";
        $('.startup').css('display', 'none');
        container.fadeIn(300);
        setTimeout(function() {
            $('.wdywtgt').fadeOut(200);
        }, 8000);
    }
            backgroundAudio.onended = function(e) {
                mainmenu();
            }

            function mainmenu() {
                backgroundAudio.pause();
                backgroundAudio.src = "sounds/MAIN.WAV";
                $('.homepage').css('display', 'block');
                $('.category').each(function(index) {
                    setTimeout(function() {
                        $(this).css('display', 'block');
                        if (index === categories.length - 1) {
                            backgroundAudio.load();
                            backgroundAudio.play();
                            $('.bottom-nav').css('display', 'flex');

                        }
                    }.bind(this), 200 * index);
                });
            }
    
    $('.main-button').click(function(){
        backgroundAudio.pause();
        backgroundAudio.src = "sounds/MAIN.WAV"
        $('.category-page').fadeOut(200, function(){
            $('.homepage').fadeIn(200);
            backgroundAudio.load();
            backgroundAudio.play();
        });
        backgroundAudio.onended = function(e) {
            backgroundAudio.src = "sounds/MAIN.WAV"
            backgroundAudio.play();
        }    
    });

    $('[class="category kids"]').click(function(){
        backgroundAudio.pause();
        backgroundAudio.src = "sounds/NAR20.WAV"
        $('.homepage').fadeOut(100, function(){
            $('.category-page').fadeIn(200);
            backgroundAudio.load();
            backgroundAudio.play();
        });
        $('.category-page').css('background-image', 'url(images/KIDS.BMP)')
        backgroundAudio.onended = function(e) {
            backgroundAudio.src = "sounds/KIDWORLD.WAV"
            backgroundAudio.play();
        }    
    });

    $('[class="category prod"]').click(function(){
        backgroundAudio.pause();
        backgroundAudio.src = "sounds/NAR24.WAV"
        $('.homepage').fadeOut(100, function(){
            $('.category-page').fadeIn(200);
            backgroundAudio.load();
            backgroundAudio.play();
        });
        $('.category-page').css('background-image', 'url(images/PROD.BMP)')
        backgroundAudio.onended = function(e) {
            backgroundAudio.src = "sounds/PRODCENT.WAV"
            backgroundAudio.play();
        }    
    });

    $('[class="category knowledge"]').click(function(){
        backgroundAudio.pause();
        backgroundAudio.src = "sounds/NAR23.WAV"
        $('.homepage').fadeOut(100, function(){
            $('.category-page').fadeIn(200);
            backgroundAudio.load();
            backgroundAudio.play();
        });
        $('.category-page').css('background-image', 'url(images/KNOW.BMP)')
        backgroundAudio.onended = function(e) {
            backgroundAudio.src = "sounds/HALLKNOW.WAV"
            backgroundAudio.play();
        }    
    });
    
});
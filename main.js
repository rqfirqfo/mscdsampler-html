$(document).ready(function(){
    var startVideo = $('#start-video')[0];
    var backgroundAudio = $('#audio-thingy')[0];
    var container = $('.container');
    var categories = $('.category');

    $('#playbt').click(function(){
        startVideo.play();
        $('#playbt').hide();
        $('#start-video').css('display', 'block');
        $('.disclaimer-text').css('display', 'block');
    });

    // to skip the video intros, will be removed later after i finish
    $('.disclaimer-text').click(function(){
        stopStartup();
    });

    startVideo.onended = function(e) {
        startVideo.src = "video/intro.mp4";
        startVideo.load();
        startVideo.play();
        $('.disclaimer-text').hide();
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
        startVideo.src = "";
        backgroundAudio.play();
        $('.startup').hide();
        container.fadeIn(300);
        setTimeout(function() {
            $('.wdywtgt').fadeOut(500);
        }, 8000);
    }

    function mainBGM() {
        backgroundAudio.pause();
        backgroundAudio.src = 'sounds/MAIN.WAV'
        backgroundAudio.load();
        backgroundAudio.play();
    };
    
    backgroundAudio.onended = function(e) {
        mainmenu();
    }

            function mainmenu() {
                backgroundAudio.pause();
                $('.homepage').css('display', 'block');
                $('.category').each(function(index) {
                    setTimeout(function() {
                        $(this).css('display', 'block');
                        if (index === categories.length - 1) {
                                mainBGM();
                            $('.bottom-nav').css('display', 'flex');
                        }
                    }.bind(this), 200 * index);
                });
            }

            $('.accessory-button').hover(function () {
                setTimeout(function() {
                    backgroundAudio.pause();
                    backgroundAudio.src = 'sounds/NAR17.WAV'
                    backgroundAudio.play();
                }, 1000);
                }, function () {
                    setTimeout(function() {
                        mainBGM();
                    }, 2000);   
                }
            );

            $('.exit-button').hover(function () {
                setTimeout(function() {
                    backgroundAudio.pause();
                    backgroundAudio.src = 'sounds/NAR19.WAV'
                    backgroundAudio.play();
                }, 1000);
                    
                }, function () {
                    setTimeout(function() {
                        mainBGM();
                    }, 2000);   
                }
            );

            $('.intro-button').hover(function () {
                setTimeout(function() {
                    backgroundAudio.pause();
                    backgroundAudio.src = 'sounds/NAR18.WAV'
                    backgroundAudio.play();
                }, 1000);
                    
                }, function () {
                }
            );

            $('.intro-button').click(function(){
                backgroundAudio.pause();
                backgroundAudio.src = "";
                backgroundAudio.load();
                container.hide();
                setTimeout(function(){
                    $('.startup').show();
                    $('#start-video').show();
                    startVideo.src = "video/mslogo.mp4";
                    startVideo.play();
                    $('.disclaimer-text').css('display', 'block');
                }, 1000);
            });
    
    $('.main-button').click(function(){
        backgroundAudio.pause();
        $('.category-page').fadeOut(200, function(){
            $('.homepage').fadeIn(200);
                mainBGM();
        });
        backgroundAudio.onended = function(e) {
            mainBGM();
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
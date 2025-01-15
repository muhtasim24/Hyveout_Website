$(window).on('load', function () {
    // Wait a bit before fading out the loading screen
    setTimeout(function() {
        $('.loading-screen').fadeOut(1000, function () {
            $('.container').fadeIn(1000);
        });
    }, 300); // 500ms delay before starting the fade-out
});

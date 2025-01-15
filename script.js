$(window).on('load', function () {
    // Ensure the container is hidden initially
    $('.container').hide()

    // Fade out the loading screen
    $('.loading-screen').fadeOut(1200, function () {
        // Once the loading screen fades out, display the container
        $('.container').fadeIn(500);
    });
});

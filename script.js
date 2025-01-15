$(window).on('load', function() {
    // Optionally, you can introduce a slight delay before fading out to ensure everything is ready
    setTimeout(function() {
        $('.loading-screen').fadeOut(1000); // Fade out the loading screen and arrow
        $('.container').fadeIn(1000); // Fade in the page content
    }, 500); // 500ms delay to allow all resources to load
});

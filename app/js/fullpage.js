
// fullpage customization
$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    slidesNavigation: true,
    responsive: true,
    resize: true,
    fitToSection: false,
    autoScrolling: false,
    // loopBottom: false,
    // loopTop: true,
    scrollBar: true,
    css3: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection'],
    menu: '#menu',

    afterLoad: function (anchorLink, index) {
        if (index == 6) {
            $('#fp-nav').hide();
        }
        var loadedSection = $(this);

    },

    onLeave: function (index, nextIndex, direction) {
        if (index == 6) {
            $('#fp-nav').show();
        }
    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        if (anchorLink == 'fifthSection' && slideIndex == 1) {
            $.fn.fullpage.setAllowScrolling(false, 'up');
            $(this).css('background', '#374140');
            $(this).find('h2').css('color', 'white');
            $(this).find('h3').css('color', 'white');
            $(this).find('p').css(
                {
                    'color': '#DC3522',
                    'opacity': 1,
                    'transform': 'translateY(0)'
                }
            );
        }
    },

    onSlideLeave: function (anchorLink, index, slideIndex, direction) {
        if (anchorLink == 'fifthSection' && slideIndex == 1) {
            $.fn.fullpage.setAllowScrolling(true, 'up');
        }
    }
});

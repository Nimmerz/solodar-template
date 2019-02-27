$(document).ready(function() {
    function moveClass() {
        $(".mobile").toggleClass("mobile-active", 1000, "easeInOutQuad");
        $(".mobile-active").toggleClass("mobile", 1000, "easeInOutQuad");
    }

    setInterval(moveClass, 3000);
    return false;
});
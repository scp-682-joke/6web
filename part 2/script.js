$(document).ready(function () {
    $("#hide-text").on("click", function () { $("#visibility-text").hide(); });
    $("#show-text").on("click", function () { $("#visibility-text").show(); });
    $("#toggle-text").on("click", function () { $("#visibility-text").toggle(); });

    $("#fade-in").on("click", function () { $("#fade-image").stop(true, true).fadeIn(500); });
    $("#fade-out").on("click", function () { $("#fade-image").stop(true, true).fadeOut(500); });
    $("#fade-toggle").on("click", function () { $("#fade-image").stop(true, true).fadeToggle(500); });

    $("#slide-up").on("click", function () { $("#slide-panel").stop(true, true).slideUp(400); });
    $("#slide-down").on("click", function () { $("#slide-panel").stop(true, true).slideDown(400); });
    $("#slide-toggle").on("click", function () { $("#slide-panel").stop(true, true).slideToggle(400); });
});

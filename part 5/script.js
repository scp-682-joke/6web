$(document).ready(function () {
    $(".accordion-button").on("click", function () {
        const wasOpen = $(this).attr("aria-expanded") === "true";
        $(".accordion-button").attr("aria-expanded", "false");
        $(".accordion-panel").stop(true, true).slideUp(300);
        if (!wasOpen) {
            $(this).attr("aria-expanded", "true");
            $("#" + $(this).attr("aria-controls")).stop(true, true).slideDown(300);
        }
    });
});

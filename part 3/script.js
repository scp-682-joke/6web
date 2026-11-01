$(document).ready(function () {
    function nextItemNumber() {
        let highestNumber = 0;
        $("#item-list li").each(function () {
            const number = Number($(this).text().replace("Item ", ""));
            highestNumber = Math.max(highestNumber, number);
        });
        return highestNumber + 1;
    }
    $("#add-item").on("click", function () {
        $("#item-list").append("<li>Item " + nextItemNumber() + "</li>");
    });
    $("#prepend-item").on("click", function () {
        $("#item-list").prepend("<li>Item " + nextItemNumber() + "</li>");
    });
    $("#remove-item").on("click", function () {
        $("#item-list li:last-child").remove();
    });

    $("#change-image").on("click", function () {
        const isDay = $("#attribute-image").attr("src") === "../images/day.svg";
        $("#attribute-image").attr({
            src: isDay ? "../images/night.svg" : "../images/day.svg",
            alt: isDay ? "Mountains and a lake at night" : "Mountains and a lake in daylight"
        });
    });
    $("#change-link").on("click", function () {
        const isHome = $("#resource-link").attr("href") === "https://jquery.com/";
        $("#resource-link")
            .attr("href", isHome ? "https://api.jquery.com/" : "https://jquery.com/")
            .text(isHome ? "Visit jQuery API documentation" : "Visit jQuery");
    });

    $("#name, #email").on("input", function () {
        $("#preview-name").text($("#name").val() || "Not entered");
        $("#preview-email").text($("#email").val() || "Not entered");
    });
    $("#profile-form").on("submit", function (event) { event.preventDefault(); });
});

$(document).ready(function () {
    console.log("jQuery is ready!");
    $("#ready-status").text("jQuery is ready!");
    $("#change-selectors").on("click", function () {
        $("#id-example").text("This text was changed using an ID selector.");
        $(".class-example").html("This content now includes <strong>bold text</strong>.");
        $("section span").css({ color: "#8f1414", fontWeight: "bold", fontSize: "20px" });
    });
});

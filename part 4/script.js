$(document).ready(function () {
    $("#basic-animation").on("click", function () {
        const rightEdge = $("#basic-box").parent().innerWidth() - 100;
        $("#basic-box").stop(true).css({ left: 0, width: 60, height: 60 })
            .animate({ left: rightEdge, width: 100, height: 100 }, 800);
    });

    $("#sequence-animation").on("click", function () {
        const rightEdge = $("#sequence-box").parent().innerWidth() - 60;
        $("#sequence-box").stop(true).css({ left: 0, top: 0, width: 60, height: 60 })
            .animate({ left: rightEdge }, 500)
            .animate({ top: 100 }, 500)
            .animate({ width: 30, height: 30 }, 500)
            .animate({ left: 0, top: 0, width: 60, height: 60 }, 600);
    });

    $("#combined-animation").on("click", function () {
        const rightEdge = $("#combined-box").parent().innerWidth() - 100;
        $("#combined-box").stop(true).css({ left: 0, top: 0, width: 60, height: 60, opacity: 1 })
            .animate({ left: rightEdge, top: 60, width: 100, height: 100, opacity: 0.4 }, 1000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slider');
    var nav = document.querySelectorAll(".sidenav");
    var tabs = document.querySelectorAll(".tabs");
    M.Slider.init(slides, {
        indicators: true,
        height: 600
    });
    M.Sidenav.init(nav, {
        draggable: false
    });
    M.Tabs.init(tabs);
});

var links = document.getElementsByClassName("link");
var linkIdx = 0;

function setTab(name) {
    switch (name) {
        case "catformer":
            $("#catformer").removeClass("none");
            $("#jetsam").addClass("none");
            $("#spud").addClass("none");
            break;
        case "jetsam":
            $("#jetsam").removeClass("none");
            $("#catformer").addClass("none");
            $("#spud").addClass("none");
            break;
        case "spud":
            $("#spud").removeClass("none");
            $("#jetsam").addClass("none");
            $("#catformer").addClass("none");
            break;
        default:
            break;
    }
}

$("#flip-img").click(function () {
    $(this).toggleClass("active");
})
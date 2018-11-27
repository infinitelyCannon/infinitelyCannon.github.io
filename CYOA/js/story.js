var urlString;

$(document).ready(function(){
    $("a").click(function (event) {
        event.preventDefault();
        $("#card-main").removeClass("forward");
        $("#card-main").addClass("backward");
        document.getElementById("card-main").addEventListener("webkitAnimationEnd", reRoute);
        document.getElementById("card-main").addEventListener("animationend", reRoute);
        urlString = $(this).attr("href");
    });
});

function reRoute(event) {
    //console.log("Ready! " + event.animationName);
    window.setTimeout(function () { window.location.href = urlString; }, 370);
}
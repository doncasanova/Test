var image = { imageAddy: "https://videos.files.wordpress.com/srpQjl0D/laserencore-demoreel_hd.mp4" };
addImage();

function addImage() {
    console.log("inside addImage");
    $(".test").append("include/test.html");
    $(".test").append(`<video autoplay muted loop id="myVideo"> <source src=" ${image.imageAddy}" type="video/mp4" </video> Your browser does not support HTML5 video.`);
}

//$("#link").click(function () {
//    $("#include").append("include/test.html");
//});


var image = { imageAddy: "https://videos.files.wordpress.com/srpQjl0D/laserencore-demoreel_hd.mp4" };
addImage();

function addImage() {
    console.log("inside addImage");
    //$(".test").append("include/test.html");
    $(".insertImagesHere").append(` <div class="container test"><video autoplay muted loop id="myVideo"><source src=" ${image.imageAddy}" type="video/mp4" </video></div>`);
    $(".test").append(`<div class="content"><button id="myBtn">Pause</button> Your browser does not support HTML5 video.<h1>Heading</h1><p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>  </div> </div> </div> </div> `);
}



//$("#link").click(function () {
//    $("#include").append("include/test.html");
//});


var image = { imageAddy: "./images/dixie on a bird.jpg" };
addImage();

function addImage() {
    console.log("inside addImage");
    //$(".test").append("include/test.html");
    $(".insertImagesHere").append(` <div class="container"><div class="row"><div class="col-3"><div class="content"><img src= "${image.imageAddy}" alt="Italian Trulli"> <div class="content"><h1>Heading</h1><p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p><button id="myBtn" onclick="myFunction()">Pause</button></div></div></div></div>`);
}

//$("#link").click(function () {
//    $("#include").append("include/test.html");
//});


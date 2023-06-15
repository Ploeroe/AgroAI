let base64Image;
$("#upload-apple-image").change(function() {
    let reader = new FileReader();
    reader.onload = function(e) {
        let dataURL = reader.result;
        $('#selected-apple-image').attr("src", dataURL);
        base64Image = dataURL.replace("data:image/png;base64,","");
    }
    reader.readAsDataURL($("#upload-apple-image")[0].files[0]);
});

$("#upload-corn-image").change(function() {
    let reader = new FileReader();
    reader.onload = function(e) {
        let dataURL = reader.result;
        $('#selected-corn-image').attr("src", dataURL);
        base64Image = dataURL.replace("data:image/png;base64,","");
    }
    reader.readAsDataURL($("#upload-corn-image")[0].files[0]);
});

$("#upload-grape-image").change(function() {
    let reader = new FileReader();
    reader.onload = function(e) {
        let dataURL = reader.result;
        $('#selected-grape-image').attr("src", dataURL);
        base64Image = dataURL.replace("data:image/png;base64,","");
    }
    reader.readAsDataURL($("#upload-grape-image")[0].files[0]);
});
